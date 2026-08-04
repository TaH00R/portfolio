const experience = [
  {
    role: " Mavericks - The AI/ML Club Coordinator",
    company: "IIIT Guwahati",
    duration: "Jan 2026 — May 2026",
    description:
      "Organizing technical events, mentoring juniors and helping grow the developer community.",
  },

  {
    role: "Open Source Contributor",
    company: "Various Projects",
    duration: "2025 — Present",
    description:
      "Contributing bug fixes, documentation improvements and feature implementations.",
  },
];

const education = [
  {
    school: "IIIT Guwahati",
    degree: "B.Tech in Computer Science",
    duration: "2025 — 2029",
    description:
      "Coursework focused on algorithms, software engineering and systems.",
  },

  {
    school: "Competitive Exam",
    degree: "JEE Mains",
    duration: "2025",
    description:
      "97%ile in JEE Mains 2025 (AIR ~35k)",
  },

  {
    school: "School",
    degree: "CBSE",
    duration: "2022 — 2024",
    description:
      "94% in Class 12th (PCM with CS) and 95% in Class 10th.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto mt-24 max-w-5xl px-6"
    >
      <h2 className="mb-10 font-mono text-3xl font-bold">
        journey so far
      </h2>

      <div className="grid gap-16 md:grid-cols-2">

        {/* Experience */}

        <div>

          <h3 className="mb-6 font-mono text-lg text-zinc-400">
            experience
          </h3>

          <div className="space-y-8">
            {experience.map((item) => (
              <div key={item.role}>

                <div className="flex items-center justify-between">

                  <h4 className="font-mono text-lg font-semibold">
                    {item.role}
                  </h4>

                  <span className="font-mono text-sm text-zinc-500">
                    {item.duration}
                  </span>

                </div>

                <p className="mt-1 font-mono text-sm text-zinc-400">
                  {item.company}
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>

        {/* Education */}

        <div>

          <h3 className="mb-6 font-mono text-lg text-zinc-400">
            education
          </h3>

          <div className="space-y-8">
            {education.map((item) => (
              <div key={item.school}>

                <div className="flex items-center justify-between">

                  <h4 className="font-mono text-lg font-semibold">
                    {item.school}
                  </h4>

                  <span className="font-mono text-sm text-zinc-500">
                    {item.duration}
                  </span>

                </div>

                <p className="mt-1 font-mono text-sm text-zinc-400">
                  {item.degree}
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {item.description}
                </p>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}