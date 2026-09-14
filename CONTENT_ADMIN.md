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

Uploaded media is committed under `public/images/`. Saving content creates a Git commit; the existing deployment workflow publishes it.
