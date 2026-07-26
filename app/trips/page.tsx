import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Marquee from "@/components/marquee";
import SectionTag from "@/components/section-tag";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Trips | Worldside",
  description: "The full 10-day Thailand route: Bangkok, Chiang Mai, Krabi, Koh Tao.",
};

const STOPS = [
  {
    n: "01",
    nights: "Nights 1-3",
    title: "Bangkok",
    sub: "Rooftops & rivers",
    body: "Land, meet your crew, and dive straight into the chaos: night markets, rooftop bars, and a river cruise that makes strangers feel like old friends by midnight.",
    tags: ["Rooftop bar crawl", "Chao Phraya river cruise", "Street food tour"],
    media: "/images/bangkok-night.jpg",
    mediaType: "image" as const,
  },
  {
    n: "02",
    nights: "Nights 4-6",
    title: "Chiang Mai",
    sub: "Temples & treks",
    body: "Slow down in the north. Sunrise temple visits, a jungle trek to a waterfall, and an evening at a lantern market that looks exactly like your camera roll dreams.",
    tags: ["Old City temple run", "Waterfall jungle trek", "Night bazaar"],
    media: "/images/chiang-mai.jpeg",
    mediaType: "image" as const,
  },
  {
    n: "03",
    nights: "Nights 7-8",
    title: "Krabi",
    sub: "Limestone cliffs",
    body: "This is the postcard. Longtail boats through limestone karsts, cliffside beach clubs, and a sunset you'll be describing badly for years.",
    tags: ["Railay Beach day trip", "Longtail island hopping", "Cliffside sunset"],
    media: "/videos/krabi_landscape.mp4",
    mediaType: "video" as const,
  },
  {
    n: "04",
    nights: "Nights 9-10",
    title: "Koh Tao",
    sub: "Island paradise",
    body: "End on the water. Dive or snorkel the reefs by day, beach bonfire by night; and a goodbye that turns into a group chat that never dies.",
    tags: ["Reef snorkel / dive day", "Beach bonfire", "Farewell dinner"],
    media:
      "https://images.unsplash.com/photo-1699734210448-f83a8e5da5d3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1200",
    mediaType: "image" as const,
  },
];

export default function TripsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-10 md:pt-24 md:pb-16">
        <SectionTag className="mb-6">The Itinerary</SectionTag>
        <h1 className="font-abril text-5xl md:text-8xl leading-[0.9]">
          10 days. <span className="text-bubblegum">4</span> stops.
          <br />
          One <span className="italic">unforgettable</span> crew.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink/70 dark:text-cream/70">
          Every Worldside trip is fully planned. Flights not included, everything
          else is. Here&rsquo;s exactly where you&rsquo;re headed.
        </p>
      </section>

      <Marquee
        items={["BANGKOK", "CHIANG MAI", "KRABI", "KOH TAO", "10 DAYS", "ONE CREW"]}
        bg="bg-sunbeam"
        text="text-ink"
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24 space-y-24 md:space-y-32">
        {STOPS.map((stop, i) => (
          <article
            key={stop.title}
            className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "" : ""
              }`}
          >
            <div
              className={`relative h-72 md:h-[30rem] rounded-3xl overflow-hidden border-2 border-ink dark:border-cream/30 shadow-[8px_8px_0_0_var(--ink)] dark:shadow-[8px_8px_0_0_var(--cream)] ${i % 2 === 1 ? "md:order-2 rotate-1" : "-rotate-1"
                }`}
            >
              {stop.mediaType === "video" ? (
                <video
                  src={stop.media}
                  poster="/videos/krabi_poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <Image alt={stop.title} src={stop.media} fill className="object-cover" />
              )}
              <span className="absolute top-4 left-4 font-anton uppercase text-xs tracking-widest bg-sunbeam text-ink px-3 py-1 rounded-full">
                {stop.nights}
              </span>
            </div>

            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <span className="font-abril text-7xl md:text-9xl text-ink/10 dark:text-cream/20 leading-none block -mb-6 md:-mb-10">
                {stop.n}
              </span>
              <h2 className="font-abril text-4xl md:text-6xl leading-none">{stop.title}</h2>
              <p className="mt-1 font-anton uppercase tracking-wide text-bubblegum text-sm md:text-base">
                {stop.sub}
              </p>
              <p className="mt-5 text-lg text-ink/70 dark:text-cream/70 max-w-md">{stop.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {stop.tags.map((t) => (
                  <li
                    key={t}
                    className="font-anton uppercase text-xs tracking-wide border-2 border-ink dark:border-cream/40 rounded-full px-3 py-1.5"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-bubblegum text-cream">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24 text-center">
          <h2 className="font-abril text-4xl md:text-6xl leading-none">
            Ready to see it in person?
          </h2>
          <Link href="/join" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-ink hover:bg-ink/90 text-cream font-anton uppercase tracking-wide rounded-full px-8 h-12 text-base"
            >
              Join The Waitlist <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
