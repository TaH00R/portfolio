import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface Props {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  live,
}: Props) {
  return (
    <article
      className="
        flex flex-col
        overflow-hidden
        rounded-xl
        border border-zinc-800
        bg-zinc-950/40
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-zinc-600
        hover:shadow-lg
        hover:shadow-black/30
      "
    >
      <Image
        src={image}
        alt={title}
        width={700}
        height={400}
        className="aspect-video w-full object-cover transition duration-300 hover:scale-105"
      />

      <div className="flex flex-1 flex-col p-5">
        {/* Title & Description */}
        <div>
          <h3 className="font-mono text-xl font-bold">{title}</h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-md
                border border-zinc-800
                px-2.5
                py-1
                font-mono
                text-xs
                text-zinc-300
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-6 pt-6 font-mono text-sm">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}