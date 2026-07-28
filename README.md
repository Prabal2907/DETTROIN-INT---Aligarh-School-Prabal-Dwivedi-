# Excellence International School — Website Redesign

## Candidate Details
- **Full Name:** Prabal Dwivedi
- **Intern ID:** []
- **Email Address:** [prabaldwivedi2907@gmail.com]
- **GitHub Username:** Prabal2907
- **Selected Website:** [Excellence International School](https://excellenceinternationalschool.com/)
- **Live Demo Link:** [https://dettroin-int-aligarh-school-prabald.vercel.app/]

## Overview

This project is a complete frontend redesign of the Excellence International School website (Aligarh, Uttar Pradesh), built for the DETTROIN Full Stack Developer Internship — Round 1 Technical Assessment.

The original website used a clashing, dated green-and-yellow color scheme with cluttered layouts. This redesign reimagines it with a modern, sober, and professional visual identity while preserving the school's original purpose and core content.

## Technologies Used

- **React (Vite)** — component-based frontend framework
- **Tailwind CSS v4** — utility-first styling with a centralized design-token theme
- **React Icons** — iconography (social icons, navigation, facility icons)
- **Intersection Observer API** — scroll-triggered reveal animations (no external animation library)

## Key Improvements Made

- **Modern color palette** — replaced the original bright green/yellow scheme with a refined deep forest green + warm terracotta palette, paired with Space Grotesk (headings) and Inter (body) typography for a cleaner, more professional look.
- **Responsive design** — fully responsive across mobile, tablet, and desktop using a mobile-first Tailwind breakpoint system, tested across all sections.
- **Improved navigation** — sticky, frosted-glass header with a compact three-dot mobile menu (instead of a standard hamburger), smooth anchor-scroll navigation to page sections, and animated underline hover states.
- **Enhanced visual hierarchy** — consistent typography scale, spacing system, and eyebrow/heading/body pattern applied across every section for scannability.
- **Scroll-based animations** — Academic Stages and "Why Choose Us" sections use Intersection Observer to fade content into view as the user scrolls, adding polish without relying on a heavy animation library.
- **Alternating content layout** — image/text rows alternate left-right across sections to break visual monotony while keeping images at a fixed, quality-preserving size instead of stretching low-resolution assets.
- **Interactive facility cards** — the six-facility grid uses a smooth hover transition where cards shift to a dark background with white text, improving engagement without being distracting.
- **Lightweight performance** — no heavy animation or UI libraries; all transitions and effects are built with native CSS/Tailwind and the browser's Intersection Observer API, keeping the bundle small and load times fast.
- **Clean, reusable component architecture** — each section (Header, Hero, About, AcademicStages, Infrastructure, FacilitiesGrid, Footer) is a self-contained, reusable component with shared design tokens (colors, fonts, spacing) defined centrally.

## Project Structure

```
src/
  assets/          → images
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    AcademicStages.jsx
    Infrastructure.jsx
    FacilitiesGrid.jsx
    Footer.jsx
  App.jsx
  index.css        → global design tokens (colors, fonts)
  main.jsx
```

## Running Locally

```bash
npm install
npm run dev
```

## Scope Note

This is a frontend-focused assessment; the project intentionally does not include a backend. Forms and contact elements are built for UI/UX demonstration rather than live data submission.