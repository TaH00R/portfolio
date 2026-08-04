import SkillCategory from "./SkillCategory";
import { techStack } from "@/data/skills";

export default function TechStack() {
  return (
    <section
      id="tech"
      className="mx-auto mt-20 max-w-5xl px-6"
    >
      <h2 className="mb-10 font-mono text-3xl font-bold">
        technologies
      </h2>

      <div className="space-y-10">
        {techStack.map((category) => (
          <SkillCategory
            key={category.title}
            {...category}
          />
        ))}
      </div>
    </section>
  );
}