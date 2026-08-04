import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-16"
    >
      <div className="grid w-full items-center gap-16 md:grid-cols-2">

        {/* Left Side */}
        <div className="space-y-6">

          <p className="font-mono text-sm text-zinc-500">
            COMPUTER SCIENCE STUDENT
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm{" "}
            <span className="text-white">
              Tahoor
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-zinc-400">
            I enjoy building modern web experiences,
            beautiful Flutter applications, and interactive
            Three.js projects. I love open source and creating
            things that people enjoy using.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#"
              className="rounded-lg border border-zinc-700 px-5 py-3 transition hover:border-white"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="#"
              className="rounded-lg border border-zinc-700 px-5 py-3 transition hover:border-white"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
            >
              <FiDownload />
              Resume
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="flex h-80 w-80 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900">

            <span className="text-7xl">
              👤
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}