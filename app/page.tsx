import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Compass, Waves, Trees } from "lucide-react";
import BackgroundVideo from "@/components/ui/background-video";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Marquee from "@/components/marquee";
import SectionTag from "@/components/section-tag";
import EditorialCard from "@/components/editorial-card";
import SubscribeForm from "@/components/subscribe-form";
import { Button } from "@/components/ui/button";

const TICKER = [
  "BANGKOK",
  "CHIANG MAI",
  "KRABI",
  "KOH TAO",
  "SOLO BUT NEVER ALONE",
  "THAILAND 2026",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-[100svh] overflow-hidden">
        <BackgroundVideo />
        <div className="absolute inset-0 bg-black/35 z-[1]" />

        <div className="relative z-10 flex h-full flex-col">
          <SiteNav transparent />

          <div className="flex-1 flex flex-col items-center justify-center px-5 text-center">
            <SectionTag className="bg-background/90 text-foreground border-background mb-6">
              Feel The Experience
            </SectionTag>

            <h1 className="font-abril text-white leading-[0.95] text-5xl sm:text-6xl md:text-8xl drop-shadow-[0_4px_24px_rgba(0,0,0,.45)] max-w-5xl">
              Explore Thailand
              <br />
              <span className="italic">with friends</span>
              <br />
              even if you&rsquo;re <span className="text-sunbeam">solo</span>
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/join">
                <Button
                  size="lg"
                  className="bg-bubblegum hover:bg-bubblegum/90 text-cream font-anton uppercase tracking-wide rounded-full px-7 h-12 text-base"
                >
                  Get Started <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/trips">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-cream text-ink hover:bg-cream/90 font-anton uppercase tracking-wide rounded-full px-7 h-12 text-base"
                >
                  See Highlights
                </Button>
              </Link>
            </div>
          </div>

          <div className="pb-8 flex justify-center px-5">
            <div className="bg-sunbeam text-ink rounded-2xl px-6 py-3 border-2 border-ink shadow-[5px_5px_0_0_var(--ink)] rotate-[-1deg]">
              <p className="font-anton uppercase text-sm md:text-base text-center tracking-wide">
                Curated 10-day route · Bangkok → Chiang Mai → Krabi → Koh Tao
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={TICKER} />

      {/* HIGHLIGHTS */}
      <section id="highlights" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <SectionTag className="mb-4">01 - The Route</SectionTag>
            <h2 className="font-abril text-4xl md:text-6xl leading-none">
              Four stops. <span className="text-bubblegum">Zero</span> boring days.
            </h2>
          </div>
          <Link
            href="/trips"
            className="font-anton uppercase tracking-wide text-sm underline underline-offset-4 hover:text-bubblegum"
          >
            See full itinerary →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <EditorialCard
            title="Bangkok"
            sub="Rooftops & rivers"
            media="/images/bangkok-night.jpg"
            tag="Night 01"
            rotate="lg:-rotate-1"
          />
          <EditorialCard
            title="Chiang Mai"
            sub="Temples & treks"
            media="/images/chiang-mai.jpeg"
            tag="Night 04"
            rotate="lg:rotate-1"
          />
          <EditorialCard
            title="Krabi"
            sub="Limestone cliffs"
            media="/videos/krabi_landscape.mp4"
            mediaType="video"
            poster="/videos/krabi_poster.jpg"
            tag="Night 07"
            rotate="lg:-rotate-1"
          />
          <EditorialCard
            title="Koh Tao"
            sub="Island paradise"
            media="https://images.unsplash.com/photo-1699734210448-f83a8e5da5d3?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=774"
            tag="Night 10"
            rotate="lg:rotate-1"
          />
        </div>
      </section>

      <Marquee items={TICKER} speed="slow" bg="bg-bubblegum" />

      {/* ABOUT TEASER */}
      <section id="about" className="mx-auto max-w-7xl px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-72 md:h-[28rem] rounded-3xl overflow-hidden border-2 border-ink shadow-[8px_8px_0_0_var(--ink)] order-2 md:order-1 rotate-[-1deg]">
          <Image alt="Worldside travellers" src="/images/group-pic.jpg" fill className="object-cover" />
        </div>

        <div className="order-1 md:order-2">
          <SectionTag className="mb-4">02 - Why Worldside</SectionTag>
          <h2 className="font-abril text-4xl md:text-6xl leading-none">
            Travel solo.<br /> Never <span className="text-skyblue">alone.</span>
          </h2>
          <p className="mt-5 text-lg text-ink/70 dark:text-cream/70 max-w-md">
            We plan the route, the stays, and the activities. You just show up
            and make friends for life.
          </p>
          <ul className="mt-8 space-y-4">
            <LI icon={<Waves className="h-5 w-5" />}>Seamless itinerary & transfers</LI>
            <LI icon={<Compass className="h-5 w-5" />}>Guided activities & flexible free time</LI>
            <LI icon={<Trees className="h-5 w-5" />}>A built-in crew from day one</LI>
          </ul>
          <Link href="/about" className="mt-8 inline-block">
            <Button className="bg-ink text-cream hover:bg-ink/90 font-anton uppercase tracking-wide rounded-full px-6 h-11">
              Our Story <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section id="waitlist" className="bg-ink text-cream">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-20 md:py-28 text-center">
          <SectionTag className="mb-6 border-cream text-cream">03 - Get In</SectionTag>
          <h2 className="font-abril text-4xl sm:text-5xl md:text-7xl leading-[0.95]">
            Join the insiders list for{" "}
            <span className="italic text-sunbeam">priority booking</span>
          </h2>
          <p className="mt-4 text-cream/70 text-lg">
            Limited spots. Drop your email for early access to Thailand 2026.
          </p>
          <div className="mt-8 dark">
            <SubscribeForm />
            <p className="mt-3 text-xs text-cream/50">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function LI({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sunbeam text-ink border-2 border-ink">
        {icon}
      </span>
      <span className="text-lg">{children}</span>
    </li>
  );
}
