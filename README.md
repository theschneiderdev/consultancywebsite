# Ruhcrest website

A plain HTML, CSS and JavaScript website. No build step, no frameworks,
no dependencies to install. You can open any `.html` file directly in a
browser, or deploy the whole folder to Cloudflare Pages as-is.

## Structure

```
/
├── index.html          Home page
├── about.html           About Ruhcrest (name story, mission, values)
├── services.html        The four services, in detail
├── team.html             About Tom (biography)
├── contact.html          Contact details and message form
├── css/
│   └── styles.css       All styling for every page
├── js/
│   └── main.js           Mobile menu + contact form behaviour
├── assets/
│   └── favicon.svg      Browser tab icon (uses the brand mark)
├── robots.txt
└── sitemap.xml
```

Every page repeats the same `<header>` and `<footer>` markup, rather than
loading it from a separate file. This is deliberate: it means the site has
no moving parts and works the same everywhere, but it does mean that if you
change the navigation or footer, **you need to update it in all five HTML
files.** Use your text editor's "find and replace across files" feature to
make this quick.

## Things you'll likely want to edit first

1. **Contact details** — in `contact.html` and in the footer of every page:
   - Email address: currently `hello@ruhcrest.com` (placeholder)
   - LinkedIn URL: currently `linkedin.com/company/ruhcrest` (placeholder)
   - Location: currently "Kathmandu, Nepal" (placeholder)
   - Also update the `recipient` address in `js/main.js` (search for
     `hello@ruhcrest.com`).

2. **Tom's portrait** — in `team.html`, replace the `.portrait-placeholder`
   `<div>` with a real `<img>` tag once a photograph is available, e.g.:
   ```html
   <img src="assets/tom-portrait.jpg" alt="Portrait of Tom, founder of Ruhcrest">
   ```

3. **Colours and fonts** — all defined once, at the top of `css/styles.css`,
   under `:root`. Changing a colour there updates it across the whole site.

4. **Copy** — every page is plain, readable HTML. Text sits between tags
   like `<p>...</p>` or `<h2>...</h2>` and can be edited directly.

## Deploying to Cloudflare Pages

1. Push this folder to a GitHub or GitLab repository (or upload it directly
   in the Cloudflare dashboard).
2. In Cloudflare Pages, create a new project from that repository.
3. Build command: leave blank (none required).
4. Build output directory: `/` (the root of this folder).
5. Deploy. Cloudflare will serve the site as static files — fast, and with
   no server to maintain.

## Contact form

The form on `contact.html` currently opens the visitor's email client with
a pre-filled message (a `mailto:` link) — there is no backend yet. To
collect submissions properly, connect it to a service such as Cloudflare
Pages Forms, Formspree, or a small Cloudflare Worker, and update the
`submit` handler in `js/main.js` accordingly.
