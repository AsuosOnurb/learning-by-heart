# Publishing Notes

Learning by Heart publishes essays from Markdown files in `src/content/transmissions/`.

## Create a Draft

Run this from the project root:

```bash
npm run new:note -- the-name-of-your-note
```

This creates a draft Markdown file with the required frontmatter.

## Write the Frontmatter

Every note requires:

```yaml
title: A clear essay title
description: A concise summary used for the Notebook, search, and social previews.
date: 2026-09-13
categories: [philosophy]
tags: [memory, attention]
draft: true
```

- Choose at least one category: `philosophy`, `metaphysics`, `politics`, `language`, `society`, or `code`.
- Use up to six lowercase, hyphenated tags.
- Keep `draft: true` while writing. Drafts are excluded from the live site and search index.

## Preview and Publish

1. Run `npm run dev` and open the local URL it provides.
2. Set `draft: false` when the note is ready.
3. Run `npm run build` to validate the content and generate the static search index.
4. Commit and push to `main`. GitHub Pages publishes the note automatically.

## Markdown Conventions

- Use `##` headings to structure longer essays.
- Use `>` for quotations and ` ```language ` for code blocks.
- Keep the description distinct from the opening paragraph; it is the note’s editorial summary.
