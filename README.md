# Setu Advisory website

A plain HTML, CSS and JavaScript website. No build step, no frameworks,
no dependencies to install. You can open any `.html` file directly in a
browser, or deploy the whole folder to GitHub Pages / Cloudflare Pages
as-is.

## Structure

```
/
├── index.html            Home page
├── about.html             About Setu Advisory (name story, mission, values)
├── services.html          The four services, in detail
├── case-studies.html      Case studies (currently: Volunteers Initiative Nepal)
├── insights.html          Insights (articles and guest posts)
├── team.html               About Tom (biography)
├── contact.html            Contact details and message form
├── css/
│   └── styles.css         All styling for every page
├── js/
│   └── main.js             Mobile menu + contact form behaviour
├── assets/
│   ├── setu-logo.png      Logo (transparent background, used in the nav)
│   ├── favicon.svg        Browser tab icon
│   └── tom-portrait.jpg   Tom's photo
├── robots.txt
└── sitemap.xml
```

Every page repeats the same `<header>` and `<footer>` markup, rather than
loading it from a separate file. This is deliberate: it means the site has
no moving parts and works the same everywhere, but it does mean that if you
change the navigation or footer, **you need to update it in all six HTML
files.** Use your text editor's "find and replace across files" feature to
make this quick.

## Brand basics

- **Colours** (set once, at the top of `css/styles.css`, under `:root`):
  - Navy `#102A43` — text, headings, nav/footer backgrounds
  - Mustard `#D97706` — accents, links, emphasis
  - Green `#2F6F52` — secondary signal, positive outcomes (checkmarks, impact points)
  - Warm cream `#FDF8F0` — alternate section background
- **Font**: Inter, throughout — loaded from Google Fonts in the `<head>` of
  each page.
- **Logo**: `assets/setu-logo.png` has a transparent background and is used
  in the site's navigation bar (which has a white/cream background, so it
  reads clearly). The footer uses the wordmark as plain text rather than
  the logo image, since the logo's navy text would be invisible against the
  footer's navy background — if you want the logo in the footer too, you'll
  need a light/reversed-colour version of it first.

## Things you'll likely want to edit first

1. **Contact details** — in `contact.html` and in the footer of every page:
   - Email address: currently `hello@setuadvisory.com` (placeholder)
   - LinkedIn URL: currently `linkedin.com/company/setu-advisory` (placeholder)
   - Location: currently "Kathmandu, Nepal" (placeholder)
   - Also update the `recipient` address in `js/main.js` (search for
     `hello@setuadvisory.com`).

2. **Copy** — every page is plain, readable HTML. Text sits between tags
   like `<p>...</p>` or `<h2>...</h2>` and can be edited directly.

3. **More case studies** — `case-studies.html` currently holds one. Copy
   the `<article>` block for the existing case study, paste it below, and
   edit the content for the next one.

## Deploying

### GitHub Pages (free, fastest way to share a draft)
Push this folder to a GitHub repository, then in the repo go to
**Settings → Pages**, set the source to your main branch, root folder, and
save. GitHub will give you a live `https://<username>.github.io/<repo>/`
link within a minute or two.

### Cloudflare Pages (worth moving to later)
Same static files, but easier custom domain setup and access to Cloudflare
Pages Forms, which would let the contact form actually deliver messages
instead of opening the visitor's email client. Connects straight to the
same GitHub repository, so switching later is a five-minute job.

## Contact page

There's no contact form — the page just lists direct contact details (email,
LinkedIn, and the Outlook booking link). `js/main.js` still contains the old
form-handling code from an earlier version of the page; it's harmless (it
only runs if a `#contact-form` element exists, which it no longer does) but
can be deleted if you want to tidy it up. If you ever want a form again,
a service like Cloudflare Pages Forms or Formspree would let it actually
submit somewhere, rather than relying on a `mailto:` link.

## Adding to the Insights page

`insights.html` holds one `<article>` per piece, laid out like the case
study page: a header (title and details), an optional photo, the text, and
a "read the original" note. To add another, copy the whole `<article>`
block, paste it above the existing one (newest first), and edit it.
Photos should be free to use commercially (Unsplash, for example); keep
the photographer credit in the `<figcaption>`. `assets/og-insights.jpg`
is the preview image LinkedIn and others show when the page is shared.
