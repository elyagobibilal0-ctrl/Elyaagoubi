import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-automaster-900/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-10">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          AutoMasterPro.ma
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <Link href="/garage" className="transition hover:text-white">Garages</Link>
          <Link href="/garage/register" className="transition hover:text-white">Register Garage</Link>
          <Link href="/roadside" className="transition hover:text-white">Roadside</Link>
          <Link href="/dashboard" className="transition hover:text-white">Dashboard</Link>
          <Link href="/admin" className="transition hover:text-white">Admin</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Sign Up</Button>
        </div>
      </div>
    </header>
  );
}
