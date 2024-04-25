// app/projects/[project]/page.tsx
import { PortableText } from '@portabletext/react';
import { getProject } from '@/sanity/sanity-utils';
import Image from 'next/image';

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);
  return (
    <div className="max-w-3xl mx-auto py-20">
      <header className="flex justify-between items-center">
        <h1 className="text-5xl font-extrabold drop-shadow bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {project.name}
        </h1>
        <a
          href={project.url}
          className="py-3 px-4 bg-gray-100 rounded-lg text-gray-500 font-bold whitespace-nowrap hover:bg-pink-500 hover:text-white transition"
          title={`View project ${project.name}`}
          target="_blank"
          rel="noopener noreferrer">
          View Project
        </a>
      </header>
      {/*content goes here*/}
      <div className="mt-4 text-lg text-gray-700">
        <PortableText value={project.content} />
      </div>
      <Image
        className="mt-10 object-cover border-2 border-gray-700 rounded-xl"
        src={project.image}
        alt={project.alt}
        width={1920}
        height={1080}
      />
    </div>
  );
}
