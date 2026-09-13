import { defineCollection, z } from 'astro:content';
const transmissions = defineCollection({ type: 'content', schema: z.object({
  title: z.string().trim().min(1), description: z.string().trim().min(1), date: z.coerce.date(),
  categories: z.array(z.enum(['philosophy', 'metaphysics', 'politics', 'language', 'society', 'code'])).min(1),
  tags: z.array(z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).max(6), draft: z.boolean().default(false),
}) });
export const collections = { transmissions };
