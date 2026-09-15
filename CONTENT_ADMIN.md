# Content administration

The website content is stored as structured JSON and edited through [Pages CMS](https://app.pagescms.org/). Pages CMS uses GitHub authentication and writes every saved change back to this repository as a commit. GitHub Pages then rebuilds the site normally.

## First-time setup

1. Visit `https://app.pagescms.org/` and sign in with the GitHub account that owns this repository.
2. Install the Pages CMS GitHub App and grant it access only to `jinghaowen27/jinghaowen27.github.io`.
3. Open this repository in Pages CMS. The four editors are loaded from `.pages.yml`.

Only GitHub users with write access to the repository can edit its content. Do not add a password form or GitHub token to the public GitHub Pages site.

## Content sources

- `src/data/content/publications/` powers both Home and Publications. Use `showOnHome` and `showOnPublications` independently; `featured` controls the selected view.
- `src/data/content/photography/` powers Photography. Film entries should set `medium` to `film`, fill `filmStock`, and include the stock name in both captions.
- `src/data/content/cocktails/` powers Bartending cards and their detail popups.
- `src/data/content/recipes/` powers Recipe cards and their detail popups.

Each entry is stored as its own JSON file. Pages CMS therefore opens each section as a compact collection list, with creation controls at the top instead of one long expanded array form. The `order` field controls website display order.

Photography order uses zero-based insertion positions. If a new or edited photo uses an existing position, the most recently saved photo takes that position and all following photos are shifted down automatically by the `Normalize photography order` GitHub Action.

Uploaded media is committed under `public/images/`. Saving content creates a Git commit; the existing deployment workflow publishes it.

# Photo upload helper / 图片上传辅助工具

If Pages CMS reports `Failed to upload file: 413`, open
`tools/photo-prep.html` locally in Chrome or Edge. Drag the original photos into
the page, download the processed `-web.jpg` files, and upload those files in
Pages CMS. The default 1.8 MB target leaves room for upload encoding overhead.
The tool preserves the whole image and its aspect ratio; it never crops.

如果 Pages CMS 显示 `Failed to upload file: 413`，请用 Chrome 或 Edge 打开
`tools/photo-prep.html`，拖入原图，下载生成的 `-web.jpg`，再将它上传到
Pages CMS。默认上限为 1.8 MB，给上传编码留出余量。工具始终保留完整画面和
原始长宽比，不会裁切。

For automatic processing inside the original Pages CMS upload control, install
the unpacked browser extension in `tools/pagescms-auto-compress/`. It passes
images at or below 1.8 MB through unchanged and locally compresses larger images
before Pages CMS receives the file. Installation steps are in that folder's
`README.md`.

如果希望直接使用 Pages CMS 原来的上传按键，请安装
`tools/pagescms-auto-compress/` 中的本地浏览器扩展。小于或等于 1.8 MB 的
图片会直接上传；更大的图片会先在浏览器本地自动压缩。安装方法见该目录中的
`README.md`。
