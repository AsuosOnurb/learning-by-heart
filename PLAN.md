# LEARNING BY HEART — Project Plan

## Purpose

This is the living planning document for the personal website and editorial blog. It records decisions, rationale, open questions, and implementation milestones so the project remains coherent as it evolves.

## Decision Log

| ID | Decision | Status | Outcome |
|---|---|---|---|
| D-001 | Select the static site generator | Decided | Astro |
| D-002 | Select the post authoring format | Decided | Plain Markdown |
| D-003 | Define the transmission metadata schema | Decided | Minimal frontmatter schema |
| D-004 | Select the styling approach | Decided | Vanilla CSS |
| D-005 | Define initial theme scope | Decided | Base monochrome first |
| D-006 | Define the deployment workflow | Decided | Automatic deploy from `main` |
| D-007 | Define the initial public URL | Decided | Default GitHub Pages URL |
| D-008 | Define commenting scope for launch | Decided | Add Giscus after launch |
| D-009 | Define Markdown content loading | Decided | Astro Content Collections |
| D-010 | Define typography delivery | Decided | Self-hosted fonts |
| D-011 | Select the typography families | Decided | Space Grotesk, Inter, JetBrains Mono |
| D-012 | Define search scope for launch | Decided | Add Pagefind search at launch |
| D-013 | Define profile image scope | Decided | No profile image |
| D-014 | Define public author identity | Decided | No personal sidebar identity |
| D-015 | Define sidebar content | Decided | Topic filters, archive context, structural metadata |
| D-016 | Define the Terminal section | Decided | System and site-information page |
| D-017 | Define archive navigation | Decided | Latest feed plus paginated archive |
| D-018 | Define syndication | Decided | Add RSS later |
| D-019 | Define analytics scope | Decided | No analytics initially |
| D-020 | Define homepage feed size | Decided | Five latest transmissions |
| D-021 | Define archive page size | Decided | Ten transmissions per page |
| D-022 | Define category vocabulary | Decided | Six fixed categories |
| D-023 | Define tag policy | Decided | Free-form tags, maximum six recommended |
| D-024 | Define reading-time display | Decided | `AS MUCH TIME AS NECESSARY` |
| D-025 | Define post excerpt policy | Decided | Required descriptions |
| D-026 | Define code highlighting style | Decided | Monochrome with restrained accents |
| D-027 | Define reading column width | Decided | Approximately `70ch` |
| D-028 | Define mobile sidebar behavior | Decided | Stack sidebar above feed |
| D-029 | Define mobile navigation behavior | Decided | Wrapped navigation tabs |

## Open Decisions

### D-001 — Static Site Generator

**Question:** Should the site use Astro or Hugo as its static site generator?

#### Option A: Astro

- Component-based architecture with strong layout flexibility.
- Excellent fit for custom editorial interfaces and reusable UI systems.
- Ships zero JavaScript by default when interactive behavior is not needed.
- Uses Markdown or MDX for posts.
- Larger ecosystem and JavaScript/Node-based toolchain.

#### Option B: Hugo

- Extremely fast builds, including for large archives.
- Simple Markdown-first publishing workflow.
- Mature and lightweight deployment model.
- Uses Go templates rather than component-based JavaScript tooling.
- More constrained for highly custom interactive or component-driven layouts.

#### Recommendation

Astro is the recommended choice because the mockup calls for a distinctive, structured interface with reusable components, while still meeting the zero-client-JavaScript delivery requirement.

#### Decision

**Astro.**

#### Rationale

Astro provides the flexibility needed for the custom editorial interface while preserving static HTML and zero JavaScript by default for content delivery.

### D-002 — Post Authoring Format

**Question:** Should blog posts be written in plain Markdown or MDX?

#### Option A: Markdown

- Simplest writing workflow in VS Code.
- Portable and easy to migrate to another static site generator.
- Keeps editorial content separate from presentation logic.
- Fully sufficient for the current requirements.

#### Option B: MDX

- Allows Astro components to be embedded directly in posts.
- Useful for interactive demos and custom editorial blocks.
- Adds more authoring complexity and couples posts more tightly to the site implementation.

#### Recommendation

Plain Markdown is recommended for the initial version. Interactive or specialized blocks can be added later through Astro layouts or shortcodes if the need emerges.

#### Decision

**Plain Markdown.**

#### Rationale

Plain Markdown keeps the writing workflow simple and portable while satisfying the current editorial requirements. Interactive or specialized content can be introduced later through layouts or extensions if needed.

### D-003 — Transmission Metadata Schema

**Question:** Which frontmatter fields should every blog post include?

#### Option A: Minimal schema

```yaml
title: The Epistemology of Distributed Systems
description: A short summary for cards and search previews.
date: 2026-09-13
categories: [philosophy, code]
tags: [decentralization, epistemology]
draft: false
```

#### Option B: Editorial schema

The minimal schema plus explicit fields for `author`, `featured`, `series`, and a custom `readingTime` value.

#### Recommendation

Use the minimal schema and calculate reading time automatically from the post body. This avoids duplicated metadata while retaining everything required for the homepage, archive, SEO, and filtering.

#### Decision

**Minimal frontmatter schema.**

#### Rationale

The schema includes the metadata needed for cards, archive views, SEO, filtering, and draft handling. Reading time will be calculated automatically from the post body to avoid duplicated metadata.

### D-004 — Styling Approach

**Question:** Should the visual system use handcrafted CSS or a utility CSS framework?

#### Option A: Vanilla CSS

- Maximum control over the neo-brutalist editorial design.
- Minimal output and no unnecessary styling abstractions.
- CSS variables can support the base, Solarized Dark, and Pastel Industrial modes.
- Closely matches the project’s structural and performance philosophy.

#### Option B: Utility CSS framework

- Faster composition through predefined utility classes.
- More conventions and dependencies in the build system.
- Can produce a larger or less legible styling layer for this highly bespoke interface.

#### Recommendation

Use handcrafted CSS with CSS custom properties and a small set of reusable layout primitives.

#### Decision

**Vanilla CSS.**

#### Rationale

Handcrafted CSS provides precise control over the structural neo-brutalist system, keeps the output lean, and supports theme variants through CSS custom properties without introducing a utility framework.

### D-005 — Initial Theme Scope

**Question:** Should the first release ship with only the base monochrome theme or include the alternate themes immediately?

#### Option A: Base monochrome first

- Launches the visual identity shown in the mockup sooner.
- Keeps the first release focused and easier to refine.
- Establishes CSS custom properties so additional themes can be added later without redesigning components.

#### Option B: Multiple themes at launch

- Ships Solarized Dark and Pastel Industrial variants from the beginning.
- Requires additional design, testing, and theme-switching decisions before launch.

#### Recommendation

Launch with the base monochrome theme and architect the CSS around theme variables so alternate modes remain straightforward future additions.

#### Decision

**Base monochrome first.**

#### Rationale

The first release will focus on the visual identity established by the mockup. The CSS will still use theme variables so Solarized Dark and Pastel Industrial can be added later without restructuring the interface.

### D-006 — Deployment Workflow

**Question:** When should GitHub Pages deployments run?

#### Option A: Deploy on every push to the main branch

- Simple and closely matches the requested seamless Git workflow.
- Every merged change becomes live automatically.
- Pull requests can still run a separate build and validation check.

#### Option B: Deploy only after a manual approval or release action

- Adds an explicit publishing checkpoint.
- Slows down the writing-to-publication workflow.
- Requires additional release management.

#### Recommendation

Deploy automatically on pushes to `main`, with pull requests running build and validation checks before merge.

#### Decision

**Automatic deployment from `main`.**

#### Rationale

GitHub Actions will build and deploy every merged change automatically. Pull requests will run build and validation checks before merge.

### D-007 — Initial Public URL

**Question:** Should the site use a custom domain from the first release, or launch first at its GitHub Pages URL?

#### Option A: Custom domain from launch

- Establishes the intended public identity immediately.
- Requires the exact domain and DNS configuration.
- HTTPS and canonical SEO URLs can be configured from the start.

#### Option B: GitHub Pages URL first

- Allows the site to launch without waiting for domain configuration.
- Custom-domain migration can happen later.
- Canonical URLs and link previews may need to be updated after migration.

#### Recommendation

Use the custom domain from launch if `learningbyheart.dev` is available and under the owner’s control; otherwise use the GitHub Pages URL temporarily.

#### Decision

**Default GitHub Pages URL for the initial release.**

#### Rationale

This allows the site to launch and be validated without waiting for custom-domain or DNS configuration. The project will keep canonical URL settings easy to update when a custom domain is added.

### D-008 — Commenting Scope for Launch

**Question:** Should Giscus comments be included in the first public release?

#### Option A: Include Giscus at launch

- Completes the planned transmission interaction model immediately.
- Requires a public GitHub repository with Discussions enabled and Giscus configuration.
- Adds a small third-party client widget to post pages.

#### Option B: Add comments after launch

- Keeps the initial release focused on reading, publishing, and performance.
- Allows the visual integration and moderation model to be refined later.
- Requires a follow-up implementation phase.

#### Recommendation

Add Giscus after the core publishing experience is stable, while reserving the Terminal Logs area in the post layout from the beginning.

#### Decision

**Add Giscus after launch.**

#### Rationale

The initial release will prioritize the static reading and publishing experience. The post layout will reserve the Terminal Logs area so Giscus can be integrated later without changing the page structure.

### D-009 — Markdown Content Loading

**Question:** Should Astro use Content Collections to load and validate posts, or load Markdown files directly?

#### Option A: Astro Content Collections

- Provides typed, centralized frontmatter validation.
- Makes posts easier to query for feeds, archives, categories, and tags.
- Catches malformed metadata during development or builds.
- Adds a small amount of Astro-specific structure.

#### Option B: Direct Markdown file loading

- Simpler initial setup with fewer concepts.
- Less centralized validation and consistency as the archive grows.
- More manual work for sorting, filtering, and metadata guarantees.

#### Recommendation

Use Astro Content Collections with the agreed minimal frontmatter schema.

#### Decision

**Astro Content Collections.**

#### Rationale

Content Collections provide centralized frontmatter validation and make feeds, archives, categories, and tags reliable as the editorial archive grows.

### D-010 — Typography Delivery

**Question:** Should the site use self-hosted font files or load fonts from an external font provider?

#### Option A: Self-hosted fonts

- Avoids third-party font requests and improves privacy.
- Provides predictable rendering and deployment independence.
- Requires font files to be included and maintained in the repository.

#### Option B: Hosted fonts

- Easier to configure and update.
- May provide broad font variants through a provider CDN.
- Adds an external request and dependency to page rendering.

#### Recommendation

Self-host the selected display, body, and monospace fonts, with a carefully chosen system-font fallback stack.

#### Decision

**Self-hosted fonts.**

#### Rationale

Self-hosting avoids third-party font requests, supports predictable rendering on GitHub Pages, and aligns with the site’s performance and privacy goals.

### D-011 — Typography Families

**Question:** Which font combination should define the site’s visual voice?

#### Option A: Technical editorial

- **Display:** Space Grotesk
- **Body:** Inter
- **Metadata and code:** JetBrains Mono

This combination balances the technical character of the mockup with comfortable long-form reading.

#### Option B: Softer editorial

- **Display:** Outfit
- **Body:** DM Sans
- **Metadata and code:** Space Mono

This combination creates a slightly warmer and more contemporary reading experience.

#### Recommendation

Use Space Grotesk, Inter, and JetBrains Mono.

#### Decision

**Space Grotesk for display, Inter for body text, and JetBrains Mono for metadata and code.**

#### Rationale

This combination matches the technical editorial character of the mockup while preserving comfortable long-form reading and clear metadata treatment.

### D-012 — Search Scope for Launch

**Question:** Should the site-wide search interface be included in the first release?

#### Option A: Add search at launch

- Makes the header search control functional immediately.
- A static search index such as Pagefind can preserve the static-first architecture.
- Adds build configuration and a small amount of client-side behavior only when search is used.

#### Option B: Add search after launch

- Keeps the first release focused on the homepage, archive, and reading experience.
- The search control can remain reserved or be hidden until the index is ready.
- Avoids prematurely choosing search interaction details.

#### Recommendation

Add Pagefind-powered search at launch after the core pages are complete, keeping its JavaScript isolated to the search experience.

#### Decision

**Add Pagefind-powered search at launch.**

#### Rationale

Search will use a generated static index, preserving the static-first architecture while keeping client-side JavaScript limited to the search experience.

### D-013 — Profile Image Scope

**Question:** Should the sidebar include a profile image?

#### Decision

**No profile image.**

#### Rationale

The site should function as an editorial notebook and transmission archive rather than presenting a personal profile card.

### D-014 — Public Author Identity

**Question:** Should personal information appear in the sidebar?

#### Decision

**No personal sidebar identity.**

#### Rationale

Removing the name, biography, and profile image keeps the interface focused on the writing, topics, and archive structure.

### D-015 — Sidebar Content

**Question:** What should replace the personal profile area in the sidebar?

#### Recommendation

Use a topic and metadata panel containing category filters, archive context, and structural site information. Keep it editorial and functional rather than biographical.

#### Decision

**Topic filters, archive context, and structural site metadata.**

#### Rationale

The sidebar remains functional and editorial, supporting discovery without presenting personal profile information.

### D-016 — Terminal Section

**Question:** What should the `TERMINAL` navigation section represent?

#### Option A: System / site information page

- Presents the site’s status, architecture, publishing principles, and technical stack.
- Fits the `MODE: GHOST` and transmission-console language.
- Requires no external service or personal contact details.

#### Option B: Contact and utility page

- Provides contact links, feeds, and other ways to connect or interact.
- Gives the section a practical destination beyond site information.
- Requires deciding which personal contact channels should be public.

#### Recommendation

Use `TERMINAL` as a system and site-information page at launch, with optional contact utilities added later if needed.

#### Decision

**System and site-information page.**

#### Rationale

The section will explain the site’s architecture, publishing principles, and status while preserving the transmission-console language without requiring public contact details.

### D-017 — Archive Navigation

**Question:** How should visitors navigate a larger archive of transmissions?

#### Option A: Paginated archive

- Keeps each page fast, linkable, and crawlable.
- Requires no continuous client-side interaction.
- Makes archive position and navigation explicit.

#### Option B: Infinite scroll

- Creates a continuous feed-like browsing experience.
- Adds client-side behavior and can make deep posts harder to revisit or share.
- Less aligned with the static-first editorial philosophy.

#### Recommendation

Use a latest-transmissions feed on the homepage and a paginated archive page for the full collection.

#### Decision

**Latest-transmissions feed on the homepage plus a paginated archive.**

#### Rationale

This keeps the site fast, linkable, and crawlable without continuous client-side loading while preserving a focused homepage.

### D-018 — Syndication

**Question:** Should the site publish an RSS feed in the first release?

#### Option A: RSS at launch

- Lets readers follow new transmissions in their preferred reader.
- Fits the independent, static publishing model.
- Requires only a generated XML feed and feed metadata.

#### Option B: Add RSS later

- Keeps the first implementation scope smaller.
- Delays a useful distribution channel for the editorial archive.

#### Recommendation

Publish RSS at launch alongside the sitemap and robots file.

#### Decision

**Add RSS after launch.**

#### Rationale

The first release will focus on the core reading and publishing experience. The architecture will leave room for a generated feed to be added later.

### D-019 — Analytics Scope

**Question:** Should the site include analytics in the initial release?

#### Option A: No analytics initially

- Preserves the distraction-free and privacy-first character of the site.
- Avoids third-party scripts, cookies, and compliance overhead.
- Leaves performance and content quality as the initial success measures.

#### Option B: Add privacy-focused analytics

- Provides basic insight into traffic and popular transmissions.
- Requires selecting and configuring an analytics provider.
- Adds an external integration and maintenance responsibility.

#### Recommendation

Launch without analytics and revisit the decision after the site has an established publishing rhythm.

#### Decision

**No analytics initially.**

#### Rationale

The initial release will avoid tracking scripts, cookies, and external analytics dependencies in favor of privacy, performance, and a focused reading experience.

### D-020 — Homepage Feed Size

**Question:** How many latest transmissions should appear on the homepage?

#### Option A: Five transmissions

- Keeps the homepage concise and visually balanced.
- Gives each transmission card enough room to breathe.
- Encourages visitors to use the archive for deeper browsing.

#### Option B: Ten transmissions

- Shows more of the archive immediately.
- Makes the homepage longer and more feed-like.
- Provides more content for new visitors before they navigate away.

#### Recommendation

Show the five latest transmissions on the homepage, with a clear link to the full archive.

#### Decision

**Five latest transmissions.**

#### Rationale

The homepage will stay concise and visually balanced while directing readers to the full archive for deeper browsing.

### D-021 — Archive Page Size

**Question:** How many transmissions should appear on each paginated archive page?

#### Option A: Ten transmissions

- Provides a useful amount of archive context without making pages excessive.
- Keeps the number of archive pages manageable.
- Works well with the structured card-based layout.

#### Option B: Twenty transmissions

- Reduces the number of archive pages.
- Produces longer pages and more scrolling.
- Makes the archive feel denser and more database-like.

#### Recommendation

Show ten transmissions per archive page.

#### Decision

**Ten transmissions per archive page.**

#### Rationale

This provides useful archive context while keeping individual pages at a manageable length and preserving the structured card-based layout.

### D-022 — Category Vocabulary

**Question:** Should transmission categories use a fixed vocabulary or be freely defined per post?

#### Option A: Fixed category vocabulary

- Uses the six established categories: `PHILOSOPHY`, `METAPHYSICS`, `POLITICS`, `LANGUAGE`, `SOCIETY`, and `CODE`.
- Keeps filters, navigation, and visual labels consistent.
- Makes the archive easier to understand as it grows.

#### Option B: Free-form categories

- Allows new subjects to be introduced without updating a central list.
- Risks near-duplicate categories and inconsistent taxonomy.
- Makes navigation and filtering less predictable.

#### Recommendation

Use the six established categories as the controlled vocabulary, with tags providing more specific or emerging subjects.

#### Decision

**Six fixed categories: Philosophy, Metaphysics, Politics, Language, Society, and Code.**

#### Rationale

The controlled category vocabulary keeps filtering and navigation consistent, while tags can provide more specific or emerging subjects.

### D-023 — Tag Policy

**Question:** How should post tags be managed?

#### Option A: Free-form tags with a soft limit

- Authors can introduce precise subjects as needed.
- A recommended limit of three to six tags keeps cards and metadata readable.
- Tags remain flexible without overwhelming the interface.

#### Option B: Fully controlled tags

- Guarantees maximum consistency across the archive.
- Requires maintaining a central tag vocabulary.
- Can make it harder to name new or highly specific concepts.

#### Recommendation

Use free-form tags with a recommended maximum of six tags per transmission.

#### Decision

**Free-form tags with a recommended maximum of six tags per transmission.**

#### Rationale

This keeps tags precise and flexible while preventing metadata areas from becoming visually overloaded.

### D-024 — Reading-Time Display

**Question:** Should posts display a quantified reading time?

#### Decision

**No. Display the fixed reading indicator `AS MUCH TIME AS NECESSARY`.**

#### Rationale

The site treats long-form reading as an intentional activity rather than a timed task. A quantified estimate would introduce the wrong incentive for the intended audience.

### D-025 — Post Excerpt Policy

**Question:** Should every transmission require a short description/excerpt for cards, search results, and Open Graph previews?

#### Option A: Required description

- Ensures every card and link preview has intentional editorial framing.
- Matches the agreed minimal frontmatter schema.
- Adds a small writing requirement to every post.

#### Option B: Optional description with fallback

- Makes publishing faster for shorter or experimental posts.
- Requires generating a fallback excerpt from the opening paragraph.
- Can produce less controlled previews.

#### Recommendation

Keep `description` required so every transmission has a deliberate summary for discovery and sharing.

#### Decision

**Every transmission requires a deliberate `description` field.**

#### Rationale

Descriptions provide controlled editorial framing for homepage cards, search results, and Open Graph previews.

### D-026 — Code Highlighting Style

**Question:** How should code blocks and inline code be highlighted?

#### Option A: Monochrome code treatment

- Uses weight, borders, spacing, and a restrained tonal scale rather than multiple syntax colors.
- Preserves the high-contrast editorial identity.
- Keeps code readable without competing with the surrounding argument.

#### Option B: Accent syntax highlighting

- Uses technical green or amber for selected syntax elements.
- Makes code structure easier to scan for some readers.
- Introduces more visual color and can reduce the monochrome discipline.

#### Recommendation

Use monochrome syntax highlighting by default, reserving the technical green or amber for focused states and small structural accents.

#### Decision

**Monochrome syntax highlighting with technical green or amber reserved for restrained structural accents.**

#### Rationale

This keeps code readable and clear without allowing colorful syntax treatment to compete with the editorial argument or monochrome identity.

### D-027 — Reading Column Width

**Question:** How wide should the long-form reading column be on desktop screens?

#### Option A: Approximately 70ch

- Sits comfortably within the specified 65–80 character range.
- Supports sustained reading with a strong editorial measure.
- Leaves room for generous surrounding margins.

#### Option B: Approximately 80ch

- Fits more text per line and makes posts feel denser.
- Reduces the surrounding whitespace and can be tiring for long essays.

#### Recommendation

Use a maximum reading width of approximately `70ch`, with responsive margins on smaller screens.

#### Decision

**Approximately `70ch` maximum reading width.**

#### Rationale

This sits comfortably within the specified 65–80 character range and supports sustained reading with generous surrounding margins.

### D-028 — Mobile Sidebar Behavior

**Question:** How should the topic and metadata sidebar adapt on mobile screens?

#### Option A: Stack above the transmission feed

- Keeps topic filters visible and immediately available.
- Requires no interaction or extra client-side JavaScript.
- Preserves the full information architecture in a linear layout.

#### Option B: Collapse behind a toggle

- Gives the feed more immediate vertical priority.
- Requires interactive state and additional mobile controls.
- Hides category discovery until the user opens the panel.

#### Recommendation

Stack the sidebar above the feed on mobile, using the same static-first markup and responsive CSS.

#### Decision

**Stack the sidebar above the feed on mobile.**

#### Rationale

This keeps topic discovery visible and avoids requiring client-side interaction for core navigation.

### D-029 — Mobile Navigation Behavior

**Question:** How should the top navigation tabs behave on narrow screens?

#### Option A: Wrap tabs onto multiple lines

- Keeps every route visible without horizontal gestures.
- Works with static HTML and responsive CSS only.
- Uses a little more vertical space.

#### Option B: Horizontal scrolling tab row

- Preserves a single compact navigation row.
- Requires users to discover or perform a horizontal gesture.
- Can make less prominent tabs feel hidden.

#### Recommendation

Allow the navigation tabs to wrap naturally on mobile, while keeping the status indicator on its own aligned row if necessary.

#### Decision

**Allow navigation tabs to wrap naturally on mobile.**

#### Rationale

All routes remain visible without horizontal gestures, using responsive CSS and no client-side interaction for core navigation.

## Confirmed Product Direction

- Project name: LEARNING BY HEART
- Hosting target: GitHub Pages
- Content format: Markdown
- Visual direction: structural neo-brutalism with a high-contrast editorial layout
- Core pages: directory/index, archive, individual transmissions, and terminal
- Comments: Giscus or an equivalent GitHub Discussions-based system

## Planned Milestones

1. Resolve foundational technology and deployment decisions.
2. Establish the site information architecture and content model.
3. Create the visual foundation: typography, colors, borders, spacing, and responsive grid.
4. Build the homepage and transmission card system.
5. Build the individual post reading experience.
6. Add archive, terminal, search, comments, SEO, and accessibility features.
7. Configure GitHub Actions and GitHub Pages deployment.
8. Test performance, responsiveness, accessibility, and content publishing.

## Decision Record Template

For each decision, record:

- **Question**
- **Options considered**
- **Recommendation**
- **Decision**
- **Rationale**
- **Consequences / follow-up work**
