export default function SectionTag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-anton uppercase tracking-widest text-xs md:text-sm px-3 py-1.5 rounded-full border-2 border-ink dark:border-cream text-ink dark:text-cream ${className}`}
    >
      {children}
    </span>
  );
}
