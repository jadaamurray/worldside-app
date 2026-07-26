import Image from "next/image";
import type { Metadata } from "next";
import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import Marquee from "@/components/marquee";
import SectionTag from "@/components/section-tag";
import SubscribeForm from "@/components/subscribe-form";

export const metadata: Metadata = {
  title: "Join | Worldside",
  description: "Get priority access to the Thailand 2026 trip.",
};

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <SiteNav />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image alt="" src="/images/chiang-mai.jpeg" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-cream/70 dark:bg-ink/70" />

        <div className="relative mx-auto max-w-3xl px-5 md:px-8 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <SectionTag className="mb-6">Limited Spots</SectionTag>
          <h1 className="font-abril text-5xl md:text-7xl leading-[0.95]">
            Get in before <span className="italic text-bubblegum">everyone else.</span>
          </h1>
          <p className="mt-6 text-lg text-ink/70 dark:text-cream/70">
            Drop your email for priority booking access to the Thailand 2026 trip
            - plus trip drops and behind-the-scenes before anyone else sees them.
          </p>

          <div className="mt-10 dark bg-ink rounded-3xl p-8 md:p-10 border-2 border-ink shadow-[8px_8px_0_0_var(--bubblegum)]">
            <SubscribeForm />
            <p className="mt-4 text-xs text-cream/50">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>

      <Marquee
        items={["THAILAND 2026", "PRIORITY BOOKING", "LIMITED SPOTS", "SOLO BUT NEVER ALONE"]}
        bg="bg-skyblue"
      />

      <SiteFooter />
    </main>
  );
}
