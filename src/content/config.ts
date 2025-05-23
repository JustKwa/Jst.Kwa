import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  loader: glob({
    pattern: '**/**/*.md',
    base: 'src/content/projects/',
  }),
  schema: z.object({
    title: z.string(),
    platform: z.string(),
    engine: z.string(),
  }),
});

export const collections = { projects };
