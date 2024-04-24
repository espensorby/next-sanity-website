import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

const config = defineConfig({
  projectId: "jqqybpyv",
  dataset: "production",
  title: "My Next Sanity Website",
  apiVersion: '2024-04-24',
  basePath: '/admin',
  plugins: [structureTool()],
})

export default config;
