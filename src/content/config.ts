import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export type Project = {
  data: {
    title: string;
    description: string;
  };
};

const projects = defineCollection({
  loader: glob({
    pattern: '**/**/*.md',
    base: 'src/content/projects/',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { projects };
