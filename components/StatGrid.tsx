import type { StatItem } from "@/types";

export default function StatGrid({ stats }: { stats: StatItem[] }) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-zinc-200 bg-white p-4 text-center shadow-sm"
        >
          <dd className="text-2xl font-bold text-primary">{stat.value}</dd>
          <dt className="mt-1 text-sm text-zinc-600">{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
