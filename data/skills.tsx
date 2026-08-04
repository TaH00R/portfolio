import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDart,
  SiFlutter,
  SiNodedotjs,
  SiNextdotjs,
  SiThreedotjs,
  SiExpress,
  SiSpringboot,
  SiFastapi,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiGit,
  SiGithub,
  SiLinux,
  SiTailwindcss,
  SiPostman,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiHtml5,
  SiCss,
  SiJson,
} from "react-icons/si";

import { FaJava } from "react-icons/fa6";

import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

export const techStack = [
  {
    title: "languages",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "Dart", icon: SiDart },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },

  {
    title: "frameworks",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Three.js", icon: SiThreedotjs },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "FastAPI", icon: SiFastapi },
    ],
  },

  {
    title: "databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "SQLite", icon: SiSqlite },
      { name: "Firebase", icon: SiFirebase },
    ],
  },

  {
    title: "tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Linux", icon: SiLinux },
      { name: "VS Code", icon: VscVscode },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Postman", icon: SiPostman },
    ],
  },

  {
    title: "ml / data",
    skills: [
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
  },

  {
    title: "other",
    skills: [
      { name: "REST APIs", icon: TbApi },
      { name: "JSON", icon: SiJson },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
];