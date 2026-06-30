export default function VerifyBadge({ verified }: { verified: boolean }) {
  if (verified) return null;

  return (
    <span
      title="Sourced from public research — pending confirmation by MDDA before this goes live."
      className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 ring-1 ring-amber-300"
    >
      Pending verification
    </span>
  );
}
