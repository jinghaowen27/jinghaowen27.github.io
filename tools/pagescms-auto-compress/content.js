(() => {
  'use strict';

  const TARGET_BYTES = 1.8 * 1024 * 1024;
  const MINIMUM_QUALITY = 0.68;
  const SUPPORTED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp']);
  const bypassOnce = new WeakSet();
  let toastTimer;

  document.addEventListener('change', interceptImageSelection, true);

  async function interceptImageSelection(event) {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.type !== 'file') return;

    if (bypassOnce.has(input)) {
      bypassOnce.delete(input);
      return;
    }

    const files = [...(input.files || [])];
    const oversizedImages = files.filter(
      (file) => file.type.startsWith('image/') && file.size > TARGET_BYTES
    );
    if (!oversizedImages.length) return;

    // Stop Pages CMS from seeing the original oversized selection. Once all
    // files are ready, a replacement change event continues its normal flow.
    event.preventDefault();
    event.stopImmediatePropagation();
    input.disabled = true;
    input.setAttribute('aria-busy', 'true');
    showToast(`正在自动压缩 ${oversizedImages.length} 张大图…`, 'working', 0);

    try {
      const processedFiles = [];
      for (const file of files) {
        if (!file.type.startsWith('image/') || file.size <= TARGET_BYTES) {
          processedFiles.push(file);
          continue;
        }

        if (!SUPPORTED_TYPES.has(file.type)) {
          throw new Error(`${file.name} 的格式暂不支持自动压缩，请先转换为 JPG`);
        }
        processedFiles.push(await compressFile(file));
      }

      const transfer = new DataTransfer();
      processedFiles.forEach((file) => transfer.items.add(file));
      input.files = transfer.files;
      input.disabled = false;
      input.removeAttribute('aria-busy');

      bypassOnce.add(input);
      input.dispatchEvent(new Event('change', { bubbles: true }));
      const totalSize = processedFiles.reduce((sum, file) => sum + file.size, 0);
      showToast(
        `压缩完成，已交给 Pages CMS（共 ${formatBytes(totalSize)}）`,
        'success',
        5000
      );
    } catch (error) {
      input.value = '';
      input.disabled = false;
      input.removeAttribute('aria-busy');
      showToast(`自动压缩失败：${error.message || error}`, 'error', 8000);
    }
  }

  async function compressFile(file) {
    const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
    let width = bitmap.width;
    let height = bitmap.height;
    let best;

    try {
      // First vary JPEG quality while retaining all original pixels. Only if
      // that cannot meet the limit are both dimensions reduced proportionally.
      for (let scaleAttempt = 0; scaleAttempt < 10; scaleAttempt += 1) {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d', { alpha: false });
        if (!context) throw new Error('浏览器无法创建图片处理画布');

        context.fillStyle = '#fff';
        context.fillRect(0, 0, width, height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(bitmap, 0, 0, width, height);

        best = await findBestQuality(canvas);
        if (best.blob.size <= TARGET_BYTES) break;

        const ratio = Math.min(
          0.92,
          Math.sqrt(TARGET_BYTES / best.blob.size) * 0.96
        );
        width = Math.max(1, Math.round(width * ratio));
        height = Math.max(1, Math.round(height * ratio));
      }
    } finally {
      bitmap.close();
    }

    if (!best || best.blob.size > TARGET_BYTES) {
      throw new Error(`${file.name} 无法压缩到 1.8 MB 以下`);
    }

    return new File([best.blob], outputName(file.name), {
      type: 'image/jpeg',
      lastModified: file.lastModified
    });
  }

  async function findBestQuality(canvas) {
    let low = MINIMUM_QUALITY;
    let high = 0.94;
    let candidate = await canvasToBlob(canvas, low);

    if (candidate.size > TARGET_BYTES) {
      return { blob: candidate, quality: low };
    }

    let best = candidate;
    let bestQuality = low;
    for (let iteration = 0; iteration < 8; iteration += 1) {
      const quality = (low + high) / 2;
      candidate = await canvasToBlob(canvas, quality);
      if (candidate.size <= TARGET_BYTES) {
        best = candidate;
        bestQuality = quality;
        low = quality;
      } else {
        high = quality;
      }
    }
    return { blob: best, quality: bestQuality };
  }

  function canvasToBlob(canvas, quality) {
    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => blob ? resolve(blob) : reject(new Error('JPEG 编码失败')),
        'image/jpeg',
        quality
      );
    });
  }

  function outputName(name) {
    const base = name.replace(/\.[^.]+$/, '');
    return `${base}-web.jpg`;
  }

  function formatBytes(bytes) {
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
  }

  function showToast(message, type, duration) {
    let toast = document.querySelector('#pagescms-auto-compress-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'pagescms-auto-compress-toast';
      Object.assign(toast.style, {
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        zIndex: '2147483647',
        maxWidth: '420px',
        padding: '13px 16px',
        borderRadius: '10px',
        color: '#fff',
        font: '600 14px/1.45 system-ui, sans-serif',
        boxShadow: '0 12px 32px rgba(0,0,0,.24)'
      });
      (document.body || document.documentElement).appendChild(toast);
    }

    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.style.display = 'block';
    toast.style.background = type === 'error'
      ? '#b42318'
      : type === 'success'
        ? '#087443'
        : '#172033';

    if (duration > 0) {
      toastTimer = setTimeout(() => { toast.style.display = 'none'; }, duration);
    }
  }
})();
