import Link from "next/link";
import { ShieldCheck, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface GarageCardProps {
  name: string;
  city: string;
  rating: string;
  reviews: number;
  mechanics: number;
  waitTime: string;
  open: boolean;
  verified: boolean;
}

export function GarageCard({ name, city, rating, reviews, mechanics, waitTime, open, verified }: GarageCardProps) {
  return (
    <article className="glass-card rounded-[32px] p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-sky-400/30">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Garage</p>
          <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
          <p className="mt-2 text-sm text-slate-400">{city}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={cn("rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em]", open ? "bg-emerald-500/15 text-emerald-200" : "bg-slate-700/60 text-slate-200")}>{open ? "Open" : "Closed"}</span>
          {verified && (
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/80 px-3 py-1 text-xs text-slate-200">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-300" /> Verified
            </span>
          )}
        </div>
      </div>
      <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
        <p className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-300" /> {rating} / 5.0</p>
        <p>{reviews} Reviews</p>
        <p>{mechanics} Mechanics</p>
        <p>Wait {waitTime}</p>
      </div>
      <Link href="/garage" className="mt-6 inline-flex rounded-full bg-sky-400/15 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-400/25">
        View Garage
      </Link>
    </article>
  );
}
