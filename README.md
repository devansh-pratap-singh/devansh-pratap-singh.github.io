# Devansh Pratap Singh - Portfolio

[![Live Site](https://img.shields.io/badge/Live%20Site-devansh--pratap--singh.github.io-C0572A?style=flat-square&logo=github)](https://devansh-pratap-singh.github.io)
<!-- [![Deploy](https://img.shields.io/github/actions/workflow/status/devansh-pratap-singh/devansh-pratap-singh.github.io/deploy.yml?style=flat-square&label=Deploy&logo=githubactions)](https://github.com/devansh-pratap-singh/devansh-pratap-singh.github.io/actions)
[![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-100-0ABFB8?style=flat-square&logo=lighthouse)](https://devansh-pratap-singh.github.io)
[![Lighthouse Best Practices](https://img.shields.io/badge/Best%20Practices-100-0ABFB8?style=flat-square&logo=lighthouse)](https://devansh-pratap-singh.github.io) -->

Personal portfolio website for **Devansh Pratap Singh**, a Data Engineer specialising in big data, cloud infrastructure, and analytics. Built with a focus on accessibility, performance, and a distinctive typographic identity.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Vite 5 + React 18 |
| Animation | Framer Motion 11 |
| Styling | CSS Modules + custom design tokens |
| Typography | Fraunces (display) + DM Sans (body) |
| Hosting | GitHub Pages (User Page) |
| CI/CD | GitHub Actions |

---

## Features

- **WCAG 2.1 AA compliant** - Lighthouse Accessibility score: 100
- **Reduced motion support** - Global `MotionConfig reducedMotion="user"` via Framer Motion
- **Fully keyboard navigable** - Mobile nav includes a focus trap
- **Single source of truth** - All content lives in `src/data/portfolio.js`

---

## Project Structure

```
src/
├── App.jsx / App.css
├── main.jsx
├── hooks/
│   ├── useTheme.js          # Theme context, hook, and constants (.js — no JSX)
│   └── useFocusTrap.js      # Mobile nav focus trap
├── styles/
│   └── tokens.css           # All design tokens (color, spacing, duration)
├── data/
│   └── portfolio.js         # ALL site content — edit here, never in components
└── components/
    ├── ui/                  # ThemeProvider, ThemeToggle
    ├── layout/              # Navbar
    ├── shared/              # ExternalLink, ProjectCard, SectionLabel, SkillPill
    └── sections/            # Hero, About, Skills, Experience, Projects, Education, Contact
```

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

The site is deployed automatically to GitHub Pages on every push to `main` via `.github/workflows/deploy.yml`.

> **GitHub Pages config:** Settings → Pages → Source must be set to **"GitHub Actions"** (not the legacy branch method).

---

## Updating Content

All content is managed in a single file:

```
src/data/portfolio.js
```

This file exports: `meta`, `about`, `skills`, `experience`, `projects`, and `education`. Edit values here - no component files need to change for content updates.

---

## Design System

| Token | Value |
|---|---|
| Accent (Light) | `#C0572A` (Sienna) |
| Accent (Dark) | `#0ABFB8` (Teal) |
| Accessible accent | `#A84C24` & `#0bd3cc` (`--color-accent-accessible`) |
| Theme transition | `300ms` (`--duration-slow`) |

Design tokens are defined in `src/styles/tokens.css`.

---

## License

This repository contains the source code for a personal portfolio. The code structure and configuration are available for reference. Content (bio, work history, project descriptions) belongs to Devansh Pratap Singh.