import { createClient, groq } from 'next-sanity';

export async function getProjects() {
  const client = createClient({
    projectId: 'jqqybpyv',
    dataset: 'production',
    apiVersion: '2024-04-24',
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content,
    }`,
  );
}
