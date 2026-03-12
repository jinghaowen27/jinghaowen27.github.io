# Personal Website

## File Structure

```
site/
│
├── index.html                  ← Main entry point (don't edit sections here)
│
├── css/
│   └── style.css               ← ALL visual styling (colors, fonts, layout)
│                                  Edit to change look & feel
│
├── js/
│   ├── nav.js                  ← Navigation, language toggle, photo/guitar filters
│   └── modal.js                ← Popup modal open/close logic
│
├── data/
│   └── modals-data.js          ← ALL popup card content:
│                                  recipes, cocktails, books, projects, tarot cards
│                                  ← EDIT THIS to change popup details
│
├── sections/
│   ├── _sidebar.html           ← Your name, title, email, social links, avatar
│   │                              ← EDIT THIS to update your profile info
│   │
│   ├── home.html               ← Hero greeting, About Me, research interests
│   ├── publications.html       ← Paper list (by date / topic / selected)
│   ├── competition.html        ← Competition awards timeline
│   ├── projects.html           ← Project cards
│   ├── recipes.html            ← Recipe cards (click opens popup)
│   ├── cocktails.html          ← Cocktail cards (click opens popup)
│   ├── reading.html            ← Book cards (click opens popup)
│   ├── photography.html        ← Photo masonry grid with topic filter
│   ├── tarot.html              ← Tarot card grid (click opens popup)
│   └── guitar.html             ← Song list with tabs/sheet music links
│
└── images/
    ├── avatar/
    │   └── README.txt          ← How to add your profile photo
    ├── photos/
    │   └── README.txt          ← How to add photography images
    └── thumbnails/
        └── README.txt          ← How to add paper thumbnails

```

## Quick Customization Guide

### Change your name, email, links
→ Edit `sections/_sidebar.html`

### Add a new publication
→ Edit `sections/publications.html`, copy an existing `<div class="pub-item">` block

### Add a new recipe / cocktail / book / project / tarot card
→ Edit `data/modals-data.js`, copy an existing entry in the MODALS object
→ Edit the matching section file (e.g. `sections/recipes.html`) to add the card

### Change colors or fonts
→ Edit `css/style.css`, look for the `:root { --accent: ... }` section at the top

### Add photos to the photography page
→ Drop images into `images/photos/`
→ Edit `sections/photography.html`, replace `.photo-placeholder` divs with `<img>` tags

### Deploy to GitHub Pages
1. Upload the entire `site/` folder contents to your GitHub repo
2. Settings → Pages → Deploy from branch → main / (root)
3. Your site will be live at https://yourusername.github.io
