# AR PERFUME

A premium luxury perfume brand website for **AR Perfume** — dark, elegant, Middle Eastern–inspired aesthetic.

## Overview

- **Brand:** AR PERFUME  
- **Style:** Dark luxury, royal gold accents, minimalist layout  
- **Stack:** HTML, CSS, vanilla JavaScript (no frameworks)

## Pages

| Page        | File            | Description                          |
|------------|-----------------|--------------------------------------|
| Home       | `index.html`    | Hero, featured collection, brand story, gift box |
| Collection | `collection.html` | Full perfume grid + gift set CTA   |
| Product    | `product.html`  | Detail page (use `?name=...` for perfume) |
| About      | `about.html`    | Brand story and craft                |
| Contact    | `contact.html`  | Minimal contact form                 |

### Product URL slugs

- `pure-oud`, `magna`, `7-boys`, `lord`, `opal`, `abaya`

Example: `product.html?name=pure-oud`

## Run locally

Open `index.html` in a browser, or use a simple static server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000` (or the port shown).

## Structure

```
ar_perfume/
├── index.html
├── collection.html
├── product.html
├── about.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   ├── main.js      # Header, scroll reveal, form, product buttons
│   └── product.js   # Product data and dynamic product page content
└── README.md
```

## Customization

- **Colors:** Edit `:root` in `css/style.css` (`--color-black`, `--color-gold`, etc.).
- **Fonts:** Headings use Cormorant Garamond, body uses Outfit (Google Fonts). Change in `style.css` and the `@import` at the top.
- **Products:** Edit the `PRODUCTS` object in `js/product.js` to add or change perfumes and copy.
- **Images:** Replace bottle/gift placeholders with real images by adding `<img>` in the card and product gallery markup and pointing to files in an `images/` folder.

## SEO

- Semantic HTML and one `<h1>` per page  
- Meta `description` on each page  
- Meaningful link text and minimal JS for content

---

© AR Perfume. For brand use only.
