import Container from "@/components/Container";

export default function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="bg-secondary text-white">
      <Container className="py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
        {subtitle ? (
          <p className="mt-3 max-w-2xl text-base text-zinc-300">{subtitle}</p>
        ) : null}
      </Container>
    </div>
  );
}
