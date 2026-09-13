import { defineCollection, z } from 'astro:content';
const transmissions = defineCollection({ type: 'content', schema: z.object({
  title: z.string(), description: z.string(), date: z.coerce.date(),
  categories: z.array(z.enum(['philosophy', 'metaphysics', 'politics', 'language', 'society', 'code'])),
  tags: z.array(z.string()).max(6), draft: z.boolean().default(false),
}) });
export const collections = { transmissions };
