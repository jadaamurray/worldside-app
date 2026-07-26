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
  title: "About | Worldside",
  description: "Why Worldside exists, and who it's for.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-7xl px-5 md:px-8 pt-16 pb-10 md:pt-24 md:pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <SectionTag className="mb-6">Our Story</SectionTag>
          <h1 className="font-abril text-5xl md:text-7xl leading-[0.95]">
            Booking a trip alone shouldn&rsquo;t feel like a risk.
          </h1>
          <p className="mt-6 text-lg text-ink/70 dark:text-cream/70 max-w-lg">
            Worldside started with one question: why does &ldquo;solo travel&rdquo;
            have to mean traveling by yourself? We build small-group trips for
            people who want to go somewhere new without waiting on a friend
            group that&rsquo;s never actually free at the same time.
          </p>
        </div>
        <div className="relative h-72 md:h-[26rem] rounded-3xl overflow-hidden border-2 border-ink shadow-[8px_8px_0_0_var(--ink)] rotate-1">
          <Image alt="Worldside travellers" src="/images/group-pic.jpg" fill className="object-cover" />
        </div>
      </section>

      <Marquee items={["MADE FOR SOLO TRAVELERS", "BUILT-IN CREW", "NO AWKWARD GROUP CHATS", "JUST SHOW UP"]} bg="bg-sunbeam" text="text-ink" />

      {/* PULL QUOTE */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 py-20 md:py-28 text-center">
        <p className="font-abril italic text-3xl md:text-5xl leading-tight">
          &ldquo;We plan the logistics so the only thing you have to plan is
          who you&rsquo;re becoming by the end of the trip.&rdquo;
        </p>
        <p className="mt-6 font-anton uppercase tracking-wide text-sm text-bubblegum">
          ~ The Worldside Team
        </p>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-24">
        <SectionTag className="mb-8">What We Believe</SectionTag>
        <div className="grid md:grid-cols-3 gap-6">
          <ValueCard
            n="01"
            title="Solo ≠ alone"
            body="Every trip is built around a small group of solo travelers. You land as strangers, you leave as a group chat that won't quit."
          />
          <ValueCard
            n="02"
            title="Zero logistics tax"
            body="Routes, stays, and activities are locked in before you land. You spend your energy on the trip, not a spreadsheet."
          />
          <ValueCard
            n="03"
            title="Bold over boring"
            body="No cookie-cutter bus tours. We pick the rooftop, the cliffside, the night market that actually slaps."
          />
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-4xl px-5 md:px-8 py-16 md:py-24 text-center">
          <h2 className="font-abril text-4xl md:text-6xl leading-none">
            Next stop: <span className="text-sunbeam italic">Thailand.</span>
          </h2>
          <Link href="/join" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-bubblegum hover:bg-bubblegum/90 text-cream font-anton uppercase tracking-wide rounded-full px-8 h-12 text-base"
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

function ValueCard({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-3xl border-2 border-ink dark:border-cream/30 p-6 md:p-8 bg-cream dark:bg-ink/40">
      <span className="font-abril text-5xl text-bubblegum">{n}</span>
      <h3 className="mt-3 font-anton uppercase text-xl tracking-wide">{title}</h3>
      <p className="mt-3 text-ink/70 dark:text-cream/70">{body}</p>
    </div>
  );
}
