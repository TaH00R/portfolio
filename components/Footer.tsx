import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-12">

        <p className="font-mono text-sm text-zinc-500">
          The guidance of grace is never lost.
        </p>

        <div className="flex items-center gap-8 font-mono text-sm">

          <a
            href="https://github.com/TaH00R"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/x-tahoor-x-36652739a/"
              target="_blank"
              rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
             href="mailto:mohammad.tahoor25b@iiitg.ac.in"
            className="flex items-center gap-2 text-zinc-400 transition hover:text-white"
          >
            <FaEnvelope />
            Email
          </a>

        </div>

        <div className="space-y-1 text-center font-mono text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} Tahoor</p>
          <p>Don`t you dare go hollow</p>
        </div>

      </div>
    </footer>
  );
}