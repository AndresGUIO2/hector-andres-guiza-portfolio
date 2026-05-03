# Portfolio - Hector Andres Guiza

Personal portfolio website for **Hector Andres Guiza Ortegon**, built as a university project for Ingenieria Web.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **react-icons**

## Features

- Responsive 3-column layout with fixed sidebars
- Dark/light mode toggle with localStorage persistence
- Animated gradient hero section
- Scroll-triggered fade-in animations (Intersection Observer)
- Flip cards on hover (CSS 3D transforms)
- Expandable portfolio section with screenshot gallery
- Mobile-first responsive design with hamburger menu

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build

```bash
pnpm build
```

## Project Structure

```
src/
  app/
    globals.css        # Theme tokens, dark mode, animations
    layout.tsx         # Root layout with Inter font
    page.tsx           # Main page composing all sections
  components/
    HeroSection.tsx    # Animated gradient hero
    LeftSidebar.tsx    # Profile, skills, languages
    RightSidebar.tsx   # Social links
    MobileHeader.tsx   # Hamburger menu for mobile
    PortfolioSection.tsx # Expandable project showcase
    KnowledgeSection.tsx # Flip cards grid
    EducationSection.tsx # Education & experience
    ThemeToggle.tsx    # Dark/light mode switch
    ScrollReveal.tsx   # Intersection Observer wrapper
    Footer.tsx         # Copyright footer
public/
  images/              # Profile photo, HistorIA screenshots
```
