# Portfolio Website — Documentation

## 1. Details
- **Name:** Shagun Mer
- **Roll number / batch:** _[fill in]_
- **Date:** _[fill in submission date]_

## 2. Template / Starting Point
Built from scratch — plain HTML, CSS, and JavaScript, no template or boilerplate.
Styled with a custom frosted-glass / dark-mode design system rather than a CSS
framework like Bootstrap or Tailwind, so every visual choice below was made by hand.

## 3. AI Tools Used
- **Claude (Anthropic)** — used to scaffold the full site (HTML structure, CSS design
  system, JS interactivity) and to draft this documentation file.
  - Design planning: color palette, typography, and layout concept.
  - Full HTML markup for all required sections.
  - Full CSS stylesheet (frosted-glass panels, responsive layout, animations).
  - JavaScript for mobile nav toggle, on-load reveal animation, and contact form handling.

## 4. Prompts Used
Below are the actual prompts used, in order:

1. "Let's do it in order" (following an initial request to build and host a personal
   portfolio website per the assignment brief, using the uploaded assignment PDF and
   class notes on Bootstrap/Tailwind and AI-driven UI/UX design as reference material).
2. "Whichever you think is the best" (in response to being asked to choose between
   Bootstrap and Tailwind for the build).
3. Provided real name ("Shagun Mer"), GitHub URL
   (https://github.com/shagunmer00-creator), and LinkedIn URL
   (https://www.linkedin.com/in/shagun-mer-041a38376) to populate the Contact section
   and site metadata.
4. Confirmed: real name to be used on the site, and to use placeholder content for the
   3 required project cards (no real projects supplied yet).

## 5. Method / Approach
1. Reviewed the assignment requirements (required sections, responsiveness, download
   button, GitHub Pages hosting) and the class material on CSS frameworks and
   AI-driven design workflow.
2. Chose a design direction: since the assignment allows AI-assisted UI generation but
   rewards visual quality and distinctiveness, a custom frosted-glass, dark-mode theme
   was chosen over a generic Bootstrap/Tailwind component-kit look, grounded in a
   real personal interest (Linux desktop customization / Hyprland ricing).
3. Planned a compact design system first: color tokens, two type families (Space
   Grotesk for display, Inter for body, JetBrains Mono for terminal-style accents),
   and a layout concept (a Waybar-style status-bar nav, and project cards styled as
   tiled window-manager panels) before writing any code.
4. Built the HTML structure for all six required sections: header/nav, hero, about,
   projects (3 cards), contact (form + direct links), and footer with the download
   button.
5. Wrote the CSS from scratch: frosted-glass panel treatment via `backdrop-filter:
   blur()`, a single on-load reveal animation (not per-element scroll spam), and a
   responsive layout that collapses to a single column with a mobile hamburger nav
   below 720px.
6. Wrote the JavaScript: mobile nav toggle, a one-time reveal animation on page load
   plus an IntersectionObserver for below-the-fold sections, dynamic footer year, and
   basic contact-form handling (client-side only, no backend).
7. Wired the footer "Download Documentation" button to this file via a plain
   `<a href="documentation.md" download>` link, keeping the file in the same repo.
8. Prepared the project for GitHub Pages: `index.html` at the repo root, relative
   asset paths, no build step required.

## 6. Live Link + GitHub Repo
- **Live link:** _[fill in after enabling GitHub Pages]_
- **GitHub repo:** https://github.com/shagunmer00-creator/_[fill in repo name]_

---
*Note: Project cards currently contain placeholder content (title, description, tech
tags, link) — replace with real projects before final submission. The contact form
has no backend attached; either wire it to a form service (e.g. Formspree) or remove
it and rely on the direct email/GitHub/LinkedIn links.*
