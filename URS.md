# User Requirements Specification (URS)

## Personal Website & Editorial Blog: “LEARNING BY HEART”

## 1. Document Control & Project Overview

- **Project Name:** Learning by Heart (`learningbyheart.dev` or equivalent custom domain)
- **Author/Owner:** Senior Python Backend Developer / Technical Philosopher
- **Target Audience:** Peers across software engineering, philosophy, metaphysics, politics, and social sciences.
- **Hosting Infrastructure:** GitHub Pages (Static Site Architecture)
- **Core Philosophy:** Uncompromising performance, zero database overhead, structural legibility, and distraction-free long-form reading.

## 2. High-Level Objectives & Scope

- **The Digital Notebook:** A centralized weekly log capturing continuous learnings across technical systems, linguistics, epistemology, and social structures.
- **Static-First Performance:** Zero client-side JavaScript bloat on content delivery; instant page loads leveraging static HTML/CSS compilation.
- **Seamless Git Workflow:** Content authored locally in Markdown (`.md`) via VS Code and deployed automatically via GitHub Actions upon pushing to the repository.

## 3. Technical Stack Requirements

### Build Engine / Static Site Generator (SSG)

- **Primary Recommendation:** Astro (for maximum flexibility with component structuring and zero-JS client delivery) or Hugo (for instantaneous compilation speeds).

### Hosting & CI/CD

- GitHub Pages connected to a custom domain with mandatory HTTPS enforcement.
- Automated GitHub Actions workflow for building and deploying static bundles.

### Commenting System

- Giscus (or equivalent lightweight widget utilizing GitHub Discussions under the hood) to manage user interactions without requiring an external proprietary database or backend server.

## 4. Aesthetic & UI/UX Design System

### Design Archetype

Structural Neo-Brutalism paired with a clean, high-contrast, non-retro editorial framework.

### Structural Characteristics

- Hard, solid borders (`2px solid black` / monochrome lines).
- Absolute zero border-radius (sharp corners across all cards, containers, and interface badges).
- Strict grid layouts ensuring symmetrical or intentional asymmetric partitioning.

### Typography Matrix

- **Headings & Display:** Bold grotesque or technical sans-serif (e.g., Space Grotesk, Outfit).
- **Body Copy (Reading Pane):** Highly optimized, humanist sans-serif (e.g., Inter, DM Sans) with generous line height (1.6–1.75x) and strict character-per-line constraints (65–80ch) for deep legibility.
- **Metadata & Code Elements:** Clean monospaced typeface (e.g., JetBrains Mono, Space Mono).

### Color Scheme Options

- **Base Configuration:** High-contrast monochrome with off-white canvas `#F4F1EA`, absolute black borders/text `#111111`, and sharp accent indicators in technical green `#00FF66` or amber `#FFB000`.
- **Alternate Modes:** Solarized Dark / Pastel Industrial variants supported via CSS variables.

## 5. Functional Page Requirements

### A. Main Directory / Index Page (`/`)

#### Top Navigation Framework

- Persistent site header (`LEARNING BY HEART`).
- Navigation tabs: `NOTEBOOK`, `INDEX`, `ESSAYS`, `ABOUT`.
- Reading status flag (`READING MODE: OPEN`).

#### Topic / Metadata Sidebar

- No personal information or profile photograph in the sidebar.
- Topic/category filter badges: `PHILOSOPHY`, `METAPHYSICS`, `POLITICS`, `LANGUAGE`, `SOCIETY`, `CODE`.
- The sidebar should prioritize topic navigation, archive context, and structural metadata.

#### Post Feed Container Cards

- Encapsulated inside hard-bordered grid blocks.
- Metadata headers displaying exact timestamps (`[MM.DD.YY]`), category tags, and the reading indicator `AS MUCH TIME AS NECESSARY`.
- Action links: `/ READ_NOTE`, marginalia counters, and `FILED UNDER` tags.

### B. Individual Post Page (`/posts/[slug]`)

#### Metadata Header Box

- Post title set in commanding display typography.
- Timestamp, category path, and the reading indicator `AS MUCH TIME AS NECESSARY`.

#### The Long-Form Reading Well

- Centered reading column with strict margins.
- Styled blockquotes enclosed in vertical hard-line border bars.
- Inline code styling and technical variable highlights rendered in monospaced blocks.

#### Post Footer & Action Bar

- Share utility (`/ SHARE_NOTE`) and complete post metadata tags.
- Comment section (Marginalia): integrated Giscus widget styled natively to match the 2px solid-border card system.
- Form input field styled as a notebook prompt (`LEAVE_A_THOUGHT...`).

## 6. Non-Functional & SEO Requirements

### Search Engine Optimization (SEO)

- Automatic generation of `sitemap.xml` and `robots.txt` via the SSG build pipeline.
- Clean Open Graph meta tags injected for pristine link previews across social platforms and messaging apps.

### Accessibility & Responsiveness

- Fully responsive grid layout scaling gracefully across mobile, tablet, and widescreen desktop displays.
- High color contrast ratio complying with accessibility guidelines for long-form reading comfort.
