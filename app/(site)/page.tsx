import { getProjects } from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <h1 className="text-7xl font-extrabold drop-shadow">
        Hello I&apos;m{' '}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Espen
        </span>
        !
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Aloha everyone! Check out my projects!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg hover:scale-105 hover:border-blue-500 transition">
            {project.image && (
              <Image
                src={project.image}
                alt={project.alt}
                width={750}
                height={300}
                className="object-cover"
              />
            )}
            <div className="py-3 px-3 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent ">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
