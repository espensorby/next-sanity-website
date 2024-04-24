import { getProjects } from '@/sanity/sanity-utils';
import { PortableTextBlock } from 'next-sanity';

export default async function Home() {
  const projects = await getProjects();

  return (
    <body suppressHydrationWarning={true}>
      <div>
        {projects.map((project: any) => (
          <div key={project._id}>{project.name}</div>
        ))}
      </div>
    </body>
  );
}
