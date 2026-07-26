import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-chewy text-3xl">
            Worldside<span className="text-bubblegum">.</span>
          </div>
          <p className="mt-3 text-cream/70 max-w-xs">
            Solo trips. Never alone. We plan the route — you bring the energy.
          </p>
        </div>

        <div className="font-anton uppercase tracking-wide text-sm">
          <p className="text-cream/50 mb-3">Explore</p>
          <ul className="space-y-2 text-lg">
            <li><Link href="/trips" className="hover:text-bubblegum">Trips</Link></li>
            <li><Link href="/about" className="hover:text-bubblegum">About</Link></li>
            <li><Link href="/join" className="hover:text-bubblegum">Join</Link></li>
          </ul>
        </div>

        <div className="font-anton uppercase tracking-wide text-sm">
          <p className="text-cream/50 mb-3">Follow</p>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-bubblegum">Instagram</a></li>
            <li><a href="#" className="hover:text-bubblegum">TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Worldside. Made for the ones who go solo and leave with a family.
      </div>
    </footer>
  );
}
