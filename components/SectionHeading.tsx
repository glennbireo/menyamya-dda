export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight text-secondary">{title}</h2>
      {subtitle ? <p className="mt-2 text-zinc-600">{subtitle}</p> : null}
    </div>
  );
}
