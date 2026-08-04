// lib/basePath.ts
export const BASE =
  process.env.NODE_ENV === "production"
    ? "/portfolio"
    : "";

export const projects = [
  {
    title: "ISS Tracker",
    description: "Real-time ISS tracking using Three.js and satellite.js.",
    image: `${BASE}/projects/iss.png`,
    tags: ["Three.js", "JavaScript", "satellite.js"],
    github: "https://github.com/TaH00R/ISS_tracker",
    live: "https://tah00r.github.io/ISS_tracker/",
  },

  {
    title: "Gallery",
    description:
      "Modern Flutter gallery application with albums and favorites.",
    image: `${BASE}/projects/gallery.png`,
    tags: ["Flutter"],
    github: "https://github.com/TaH00R/gallery-app",
  },

  {
    title: "DevTrack",
    description:
      "A simple and intuitive task management application for developers. (In Progress)",
    image: `${BASE}/projects/devtrack.png`,
    tags: ["Flutter", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/TaH00R/devtrack",
  },

  {
    title: "Dev Setup",
    description:
      "Automated scripts to set up a development environment on Windows and Linux. Open source and customizable.",
    image: `${BASE}/projects/devsetup.png`,
    tags: ["Shell", "Python"],
    github: "https://github.com/TaH00R/dev_setup",
  },
];