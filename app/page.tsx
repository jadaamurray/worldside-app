import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import SubscribeForm from "@/components/subscribe-form";
import { Button } from "@/components/ui/button";
import { ChevronRight, Compass, Waves, Trees } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <header className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <div className="text-2xl font-chewy text-background-day-1 tracking-tight">Worldside</div>
        <nav className="hidden md:flex gap-6 text-sm text-foregorund dark:text-white/80">
          <a href="#highlights" className="hover:underline">Highlights</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#waitlist" className="hover:underline">Waitlist</a>
        </nav>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="relative mx-auto max-w-6xl px-6 pt-8 pb-16 md:py-20">
          <Image
            alt="Thailand coastline"
            src="https://images.unsplash.com/photo-1596879857570-7b6b9018bcb6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            fill
            priority
            className="object-cover"
          />

          {/*  dark overlay for readability */}
          {/*<div className="absolute inset-0 bg-white/30" />*/}

          <div className="relative z-10 gap-8 items-center">
            <div>
              <span className="inline-block rounded-full px-3 py-1 text-xs font-medium bg-background text-foreground border-white/30">
                Feel the experience
              </span>
              <h1 className="mt-4 text-4xl md:text-6xl text-center font-abril italic leading-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,.35)]">
                Explore Thailand With Friends Even If You’re Travelling Solo
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#waitlist">
                  <Button size="lg" className="px-5">
                    Get Started <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </a>
                <a href="#highlights">
                  <Button size="lg" variant="secondary" className="px-5">
                    See Highlights
                  </Button>
                </a>
              </div>
            </div>

            {/* Hero image */}
            {/* <div className="relative h-72 md:h-[26rem] rounded-2xl overflow-hidden ring-1 ring-white/30 shadow-2xl">
              <Image
                alt="Thailand coastline"
                src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1600&auto=format&fit=crop"
                fill
                priority
                className="object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>
      {/* Itinerary Overview */}
      <div className="mt-4 flex justify-center">
        <div className="bg-accent rounded-md px-4 py-2">
          <p className="text-foreground md:text-lg font-semibold text-center">
            Curated 10-day route: Bangkok → Chiang Mai → Krabi → Koh Tao.
          </p>
          <p className="text-foreground md:text-lg font-semibold text-center">
            Activities, accommodation, and new friends sorted.
          </p>
        </div>
      </div>
      {/* WAITLIST */ }
  <section id="waitlist" className="mx-auto max-w-6xl px-6 py-16 text-center">
    <h2 className="text-3xl md:text-4xl font-semibold">Join our insiders list for <span className="underline decoration-2 underline-offset-4">priority booking </span> access</h2>
    <p className="mt-2 text-muted-foreground">
      Limited spots. Drop your email for early access to Thailand 2026.
    </p>
    <div className="mt-6">
      <SubscribeForm />
      <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
    </div>
  </section>

  {/* HIGHLIGHTS */ }
  <section id="highlights" className="mx-auto max-w-6xl px-6 py-14">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <HighlightCard
        title="Bangkok Nights"
        sub="Rooftops & rivers"
        img="/images/bangkok-night2.jpg"
      />
      <HighlightCard
        title="Chiang Mai Jungle"
        sub="Temples & treks"
        img="/images/chiang-mai.jpg"
      />
      <HighlightCard
        title="Krabi Beaches"
        sub="Limestone cliffs"
        img="https://images.unsplash.com/photo-1580981072760-b72ef15a545e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1548"
      />
      <HighlightCard
        title="Koh Tao Diving"
        sub="Island paradise"
        img="https://images.unsplash.com/photo-1699734210448-f83a8e5da5d3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774"
      />
    </div>
  </section>

  {/* ABOUT */ }
  <section id="about" className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold">Why Worldside?</h2>
      <p className="mt-3 text-muted-foreground">
        We plan the route, stays, and activities so you can focus on the people and the moments.
      </p>
      <ul className="mt-6 space-y-3">
        <LI icon={<Waves className="h-5 w-5" />}>Seamless itinerary & transfers</LI>
        <LI icon={<Compass className="h-5 w-5" />}>Guided activities & flexible free time</LI>
        <LI icon={<Trees className="h-5 w-5" />}>Make friends for life. Travel solo, never alone</LI>
      </ul>
    </div>
    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/15">
      <Image
        alt="Travellers in the jungle"
        src="/images/group-pic.jpg"
        fill
        className="object-cover"
      />
    </div>
  </section>

  {/* FOOTER */ }
  <footer className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-white/90 dark:text-white/80">
    © {new Date().getFullYear()} Worldside • <a className="underline" href="#">Instagram</a>
  </footer>
    </main >
  );
}

/* ---------- small components ---------- */
function HighlightCard({ title, sub, img }: { title: string; sub: string; img: string }) {
  return (
    <article className="group relative h-56 rounded-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/15">
      <Image alt={title} src={img} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="absolute bottom-3 left-3 text-white drop-shadow">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xs text-white/80">{sub}</p>
      </div>
    </article>
  );
}

function LI({ children, icon }: { children: React.ReactNode; icon: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-black dark:bg-white/10 dark:text-white ring-1 ring-black/10 dark:ring-white/20">
        {icon}
      </span>
      <span>{children}</span>
    </li>
  );
}