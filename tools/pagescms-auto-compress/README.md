# Pages CMS automatic image compression

This unpacked Chrome/Edge extension runs only on `https://app.pagescms.org/`.
When a file is selected through a Pages CMS upload button:

- images at or below 1.8 MB are passed through unchanged;
- larger JPG, PNG, and WebP images are compressed locally to at most 1.8 MB;
- the full image and its aspect ratio are preserved, with no cropping;
- no image is sent anywhere except through the original Pages CMS upload.

## Install in Microsoft Edge

1. Open `edge://extensions/`.
2. Turn on **Developer mode**.
3. Click **Load unpacked**.
4. Select the `tools/pagescms-auto-compress` folder.
5. Refresh the open Pages CMS tab.

## Install in Google Chrome

1. Open `chrome://extensions/`.
2. Turn on **Developer mode**.
3. Click **Load unpacked**.
4. Select the `tools/pagescms-auto-compress` folder.
5. Refresh the open Pages CMS tab.

The extension must remain installed in the browser for automatic compression to
work. If this folder changes after a Git update, click the extension's reload
button on the extensions page.
