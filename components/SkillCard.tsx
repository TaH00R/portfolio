interface Props {
  name: string;
  icon: React.ElementType;
}

export default function SkillCard({
  name,
  icon: Icon,
}: Props) {
  return (
    <div
      className="
      flex items-center gap-3
      rounded-lg
      border border-zinc-800
      px-4 py-3
      transition
      hover:border-zinc-600
      hover:bg-zinc-900/40
      "
    >
      <Icon size={22} />

      <span className="font-mono text-sm">
        {name}
      </span>
    </div>
  );
}