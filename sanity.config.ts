import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import schemas from './sanity/schemas/index';

const config = defineConfig({
  projectId: 'jqqybpyv',
  dataset: 'production',
  title: 'My Next Sanity Website',
  apiVersion: '2024-04-24',
  basePath: '/admin',
  plugins: [structureTool()],
  schema: { types: schemas },
});

export default config;
