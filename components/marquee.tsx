type MarqueeProps = {
  items: string[];
  className?: string;
  speed?: "normal" | "slow";
  bg?: string;
  text?: string;
};

export default function Marquee({
  items,
  className = "",
  speed = "normal",
  bg = "bg-foreground",
  text = "text-background",
}: MarqueeProps) {
  const content = items.join("   ✦   ") + "   ✦   ";

  return (
    <div
      className={`pause-on-hover overflow-hidden ${bg} ${text} py-3 border-y-2 border-ink dark:border-cream/20 ${className}`}
    >
      <div
        className={`flex whitespace-nowrap font-anton uppercase text-lg md:text-2xl tracking-wide ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        <span className="pr-4">{content}</span>
        <span className="pr-4" aria-hidden>{content}</span>
      </div>
    </div>
  );
}
