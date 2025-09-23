import { ModeToggle } from "@/components/mode-toggle";
import SubscribeForm from "@/components/subscribe-form";

export default function Page() {
  return (
    <main className="min-h-screen px-6">
      <header className="mx-auto max-w-6xl py-6 flex items-center justify-between">
        <div className="text-xl font-semibold tracking-tight">Worldside</div>
        <ModeToggle />
      </header>

      <section className="mx-auto max-w-6xl pt-16 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
          Be first to know when <span className="underline decoration-2 underline-offset-4">trips drop</span>.
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          Join the newsletter for early access, itineraries, and member-only perks.
        </p>

        <div className="mt-8">
          <SubscribeForm />
          <p className="mt-3 text-xs text-muted-foreground">
            No spam. Unsubscribe any time.
          </p>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl pb-10 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Worldside
      </footer>
    </main>
  );
}