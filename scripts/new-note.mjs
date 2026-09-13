import { access, copyFile, mkdir } from 'node:fs/promises';
import { constants } from 'node:fs';
import { resolve } from 'node:path';

const slug = process.argv[2];
const workspace = process.cwd();
const template = resolve(workspace, 'templates', 'note.md');
const notesDirectory = resolve(workspace, 'src', 'content', 'transmissions');

if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('Usage: npm run new:note -- a-kebab-case-slug');
  process.exitCode = 1;
} else {
  const destination = resolve(notesDirectory, `${slug}.md`);
  await mkdir(notesDirectory, { recursive: true });

  try {
    await access(destination, constants.F_OK);
    console.error(`A note already exists at src/content/transmissions/${slug}.md`);
    process.exitCode = 1;
  } catch {
    await copyFile(template, destination);
    console.log(`Created src/content/transmissions/${slug}.md`);
  }
}
