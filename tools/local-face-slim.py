"""Apply a deterministic, localized horizontal liquify to the portrait face.

This preserves the source pixels and only remaps the cheek/jaw boundary region.
No generative model or facial-feature synthesis is involved.
"""

from pathlib import Path

import numpy as np
from PIL import Image


SOURCE = Path("public/images/photos/cocktails/intro.jpg")
OUTPUT = Path("public/images/photos/cocktails/intro-local-slim.png")


def smoothstep(value: np.ndarray) -> np.ndarray:
    value = np.clip(value, 0.0, 1.0)
    return value * value * (3.0 - 2.0 * value)


def interpolate(y: np.ndarray, points: list[tuple[float, float]]) -> np.ndarray:
    positions = np.array([point[0] for point in points], dtype=np.float32)
    values = np.array([point[1] for point in points], dtype=np.float32)
    return np.interp(y, positions, values).astype(np.float32)


def main() -> None:
    source = Image.open(SOURCE).convert("RGB")
    pixels = np.asarray(source, dtype=np.float32)
    height, width, _ = pixels.shape

    yy, xx = np.mgrid[0:height, 0:width].astype(np.float32)

    # The subject's face center drifts only slightly through the lower face.
    center_x = interpolate(
        yy,
        [(495, 599), (540, 601), (590, 603), (640, 604), (690, 604)],
    )

    # Keep the central features pixel-perfect. The strongest displacement sits
    # near the visible cheek/jaw outline and fades smoothly into the background.
    protected_radius = interpolate(
        yy,
        [(495, 57), (530, 52), (570, 47), (610, 42), (650, 31), (690, 18)],
    )
    peak_radius = interpolate(
        yy,
        [(495, 78), (530, 81), (570, 76), (610, 67), (650, 51), (690, 28)],
    )
    outer_radius = peak_radius + 46.0
    strength = interpolate(
        yy,
        [(495, 0), (520, 9), (555, 14), (595, 15), (625, 13), (655, 8), (690, 0)],
    )

    distance = np.abs(xx - center_x)
    direction = np.sign(xx - center_x)

    rise = smoothstep(
        (distance - protected_radius) / np.maximum(peak_radius - protected_radius, 1.0)
    )
    fall = 1.0 - smoothstep(
        (distance - peak_radius) / np.maximum(outer_radius - peak_radius, 1.0)
    )
    horizontal_profile = np.where(distance <= peak_radius, rise, fall)
    vertical_mask = ((yy >= 495.0) & (yy <= 690.0)).astype(np.float32)

    # Inverse mapping: an output pixel nearer the center samples a source pixel
    # farther out, pulling the original cheek/jaw pixels inward without synthesis.
    source_x = xx + direction * strength * horizontal_profile * vertical_mask
    source_x = np.clip(source_x, 0.0, width - 1.0)

    x0 = np.floor(source_x).astype(np.int32)
    x1 = np.minimum(x0 + 1, width - 1)
    alpha = (source_x - x0)[..., None]
    rows = np.arange(height, dtype=np.int32)[:, None]
    remapped = pixels[rows, x0] * (1.0 - alpha) + pixels[rows, x1] * alpha

    result = Image.fromarray(np.clip(remapped, 0, 255).astype(np.uint8), "RGB")
    # PNG avoids recompressing unchanged pixels outside the liquify region.
    result.save(OUTPUT, optimize=True)
    print(f"Saved {OUTPUT} ({width}x{height})")


if __name__ == "__main__":
    main()
