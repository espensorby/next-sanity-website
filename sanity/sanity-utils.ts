import { Project } from '@/types/Project';
import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
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

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      alt,
      url,
      content,
    }`,
    { slug },
  );
}
