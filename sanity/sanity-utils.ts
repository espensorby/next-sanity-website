import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: 'jqqybpyv',
    dataset: 'production',
    apiVersion: '2024-04-24',
  });

  return client.fetch(
    groq`*[_type == "project"] | order(name asc){
      _id,
      createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      alt,
      url,
      content,
    }`,
  );
}
