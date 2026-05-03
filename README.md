# Portfolio — Héctor Andrés Güiza Ortegón

Personal portfolio website built as a university project for **Ingeniería Web** (Universidad de Antioquia). The site serves as an interactive CV showcasing education, skills, and featured projects.

**Live site:** [hector-andres-guiza.vercel.app](https://hector-andres-guiza.vercel.app)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | App Router, Turbopack, static generation |
| **React 19** | Component-based UI with hooks |
| **TypeScript** | Type safety across all components |
| **Tailwind CSS v4** | Utility-first styling with custom theme tokens |
| **react-icons** | Icon library for social links and UI elements |

---

## Architecture — Atomic Design

The project follows the **Atomic Design** methodology, organizing components into three hierarchical layers:

```
Atoms → Molecules → Organisms
```

- **Atoms**: Smallest reusable units (buttons, badges, progress bars, dividers)
- **Molecules**: Combinations of atoms that form functional groups (profile cards, skill lists, flip cards)
- **Organisms**: Complete page sections that compose molecules and atoms (sidebars, hero, education section)

This structure ensures components are **reused in 2+ places** — for example, `ProgressBar` is shared between the desktop `LeftSidebar` and the mobile `MobileHeader`, and `SocialIconLink` is shared between `RightSidebar` and `MobileHeader`.

### Component Reuse Map

| Component | Type | Used In |
|---|---|---|
| `ProgressBar` | Atom | LeftSidebar, MobileHeader |
| `InfoRow` | Atom | LeftSidebar, MobileHeader |
| `TagBadge` | Atom | PortfolioSection, KnowledgeSection |
| `SocialIconLink` | Atom | RightSidebar, MobileHeader |
| `SectionHeading` | Atom | KnowledgeSection, EducationSection, PortfolioSection |
| `Divider` | Atom | LeftSidebar, MobileHeader |
| `ProfileCard` | Molecule | LeftSidebar, MobileHeader |
| `InfoList` | Molecule | LeftSidebar, MobileHeader |
| `ProgressList` | Molecule | LeftSidebar, MobileHeader |
| `ExtraSkillsList` | Molecule | LeftSidebar, MobileHeader |

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Theme tokens, dark mode, animations, custom classes
│   ├── layout.tsx           # Root layout with Inter font
│   └── page.tsx             # Main page composing all organisms
├── data/
│   └── profile.ts           # Shared types + data (social links, skills, personal info)
├── components/
│   ├── atoms/
│   │   ├── ThemeToggle.tsx   # Dark/light mode switch
│   │   ├── ProgressBar.tsx   # Skill/language proficiency bar
│   │   ├── InfoRow.tsx       # Label-value info row
│   │   ├── TagBadge.tsx      # Technology tag pill
│   │   ├── SocialIconLink.tsx # Social media icon link
│   │   ├── SectionHeading.tsx # Section title + description
│   │   └── Divider.tsx       # Horizontal divider line
│   ├── molecules/
│   │   ├── ProfileCard.tsx       # Profile photo + name + title
│   │   ├── InfoList.tsx          # List of InfoRow items
│   │   ├── ProgressList.tsx      # Heading + list of ProgressBar items
│   │   ├── ExtraSkillsList.tsx   # Heading + skill items list
│   │   ├── SocialLinksGroup.tsx  # Group of SocialIconLink items
│   │   ├── FlipCard.tsx          # 3D flip card (front: icon+title, back: details)
│   │   └── EducationEntry.tsx    # Education/experience entry card
│   ├── organisms/
│   │   ├── LeftSidebar.tsx       # Fixed left sidebar (profile, skills, languages)
│   │   ├── RightSidebar.tsx      # Fixed right sidebar (social links)
│   │   ├── MobileHeader.tsx      # Mobile hamburger menu with full sidebar content
│   │   ├── HeroSection.tsx       # Animated gradient hero with profile photo
│   │   ├── KnowledgeSection.tsx  # Flip cards grid showing technical knowledge
│   │   ├── EducationSection.tsx  # Education & experience timeline
│   │   ├── PortfolioSection.tsx  # Expandable project showcase with lightbox
│   │   └── Footer.tsx            # Copyright footer
│   ├── ScrollReveal.tsx          # Intersection Observer fade-in wrapper
│   └── index.ts                  # Barrel export for clean imports
└── public/
    └── images/                   # Profile photo, project screenshots
```

---

## Features

- **Responsive 3-column layout** — fixed sidebars on desktop, hamburger menu on mobile
- **Dark/Light mode toggle** — persisted in localStorage, dark mode by default
- **Animated gradient hero** — dynamic background with glass-morphism "HIRE ME" button
- **Scroll-triggered animations** — Intersection Observer with staggered delays
- **3D flip cards** — CSS 3D transforms for knowledge section
- **Expandable portfolio** — collapsed card → full details with technical pillars and features
- **Screenshot lightbox** — portal-based modal for full-size image viewing
- **GitHub Actions CI/CD** — automated build verification and Vercel deployment on push to main

---

## Getting Started

### Prerequisites
- Node.js 22+
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/AndresGUIO2/hector-andres-guiza-portafolio.git
cd hector-andres-guiza-portafolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
```

---

## Deployment

The project is deployed on **Vercel** with automated deployments via **GitHub Actions**:

1. Every push to `main` triggers the workflow (`.github/workflows/deploy.yml`)
2. The workflow installs dependencies, builds the project, and deploys to Vercel production
3. The live site is available at [hector-andres-guiza.vercel.app](https://hector-andres-guiza.vercel.app)

### Required GitHub Secrets

| Secret | Description |
|---|---|
| `VERCEL_TOKEN` | API token from [vercel.com/account/tokens](https://vercel.com/account/tokens) |
| `VERCEL_ORG_ID` | Organization ID from `.vercel/project.json` |
| `VERCEL_PROJECT_ID` | Project ID from `.vercel/project.json` |

---

## Author

**Héctor Andrés Güiza Ortegón**
- Systems Engineering student — Universidad de Antioquia (10th semester)
- Full Stack Developer & Data Engineer
- GitHub: [@AndresGUIO2](https://github.com/AndresGUIO2)
- LinkedIn: [Héctor Güiza](https://www.linkedin.com/in/h%C3%A9ctor-andr%C3%A9s-g%C3%BCiza-ortegon-87795336a/)
