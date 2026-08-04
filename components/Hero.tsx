import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-6 pt-28"
    >
      <div className="flex items-start gap-8">

        {/* Profile Picture */}

        <img
          src="/profile.png"
          alt="Profile"
          className="h-24 w-24 rounded-full border border-zinc-700 object-cover"
        />

        {/* Info */}

        <div className="space-y-4">

          <h1 className="font-mono text-6xl font-bold tracking-tight">
            tahoor
          </h1>

          <p className="font-mono text-sm text-zinc-400">
            computer science @ iiit guwahati
          </p>

          <div className="flex flex-wrap gap-6 font-mono text-sm">

            <a
              href="#"
              className="flex items-center gap-2 text-zinc-300 transition hover:text-white"
            >
              <FaFileAlt />
              resume
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-zinc-300 transition hover:text-white"
            >
              <FaGithub />
              github
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-zinc-300 transition hover:text-white"
            >
              <FaLinkedin />
              linkedin
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-zinc-300 transition hover:text-white"
            >
              <FaEnvelope />
              email
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}