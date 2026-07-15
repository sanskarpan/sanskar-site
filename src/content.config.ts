import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Long-form technical writing (the blog engine).
const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// The "garden" corner: rougher, evolving notes. Growth stages instead of dates-as-truth.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    stage: z.enum(['seed', 'sapling', 'evergreen']).default('seed'),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { writing, notes };
