import SkillCard from "./SkillCard";

interface Props {
  title: string;

  skills: {
    name: string;
    icon: React.ElementType;
  }[];
}

export default function SkillCategory({
  title,
  skills,
}: Props) {
  return (
    <div className="space-y-4">

      <h3 className="font-mono text-lg text-zinc-400">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            {...skill}
          />
        ))}
      </div>

    </div>
  );
}