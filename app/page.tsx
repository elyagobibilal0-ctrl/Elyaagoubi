import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, ShieldCheck, Sparkles, Truck, Users } from "lucide-react";

const statistics = [
  { label: "Registered Garages", value: "1,248+" },
  { label: "Available Mechanics", value: "892" },
  { label: "Completed Repairs", value: "23,540" },
  { label: "Customer Satisfaction", value: "98%" }
];

const services = [
  { icon: "🔧", title: "Repair & Maintenance", description: "Oil changes, engine checks, brake repair, and scheduled service." },
  { icon: "🚗", title: "Roadside Assistance", description: "Fast towing, battery jumpstarts, and emergency support across Morocco." },
  { icon: "🧽", title: "Car Wash & Detailing", description: "Premium finishes, interior cleaning, and ceramic coating options." },
  { icon: "🛞", title: "Tire & Alignment", description: "Tire fitting, balancing, and advanced wheel alignment." }
];

function GarageCard() {
  return (
    <article className="glass-card rounded-[32px] p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-sky-400/30">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-300">Garage</p>
          <h3 className="text-xl font-semibold">Garage Elite Tanger</h3>
          <p className="mt-2 text-sm text-slate-400">Bd. Mohamed V, Tanger</p>
        </div>
        <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-200">Open</span>
      </div>
      <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
        <p>Rating: ★ 4.9</p>
        <p>Reviews: 254</p>
        <p>Mechanics: 12</p>
        <p>Wait Time: 18 min</p>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-hero-gradient px-5 py-10 sm:px-10 lg:px-16">
      <section className="mx-auto flex max-w-7xl flex-col gap-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-glass">
              <Truck className="h-4 w-4 text-sky-300" />
              Morocco's premier automotive marketplace
            </div>
            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Find The Best Garage Near You
              </h1>
              <p className="max-w-xl text-lg text-slate-300 sm:text-xl">
                Book repairs, compare garages, request roadside assistance, and manage your vehicle in one platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg">Find Garage</Button>
                <Button variant="secondary" size="lg">Emergency Assistance</Button>
                <Button variant="ghost" size="lg">Register Garage</Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {statistics.map((stat) => (
                <Card key={stat.label} className="border-white/10 p-5">
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
                  <CardDescription>{stat.label}</CardDescription>
                </Card>
              ))}
            </div>
          </div>
          <div className="relative flex h-[520px] items-end justify-center overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/70 p-6 shadow-glass">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_38%)]" />
            <div className="relative w-full max-w-2xl">
              <div className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-inner">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Marketplace Search</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Search your city, service, and vehicle brand</h2>
                  </div>
                  <div className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">Live</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <input className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white placeholder:text-slate-400 focus:border-sky-400/60 focus:outline-none" placeholder="City" />
                  <input className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white placeholder:text-slate-400 focus:border-sky-400/60 focus:outline-none" placeholder="Service" />
                  <input className="rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white placeholder:text-slate-400 focus:border-sky-400/60 focus:outline-none" placeholder="Vehicle Brand" />
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-300">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm uppercase text-slate-400">
                      <MapPin className="h-4 w-4 text-sky-300" /> Nearby Garages
                    </div>
                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">Best match</span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-900/80 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Garage</p>
                      <p className="mt-2 text-sm font-medium">Atlas Auto Center</p>
                      <p className="mt-1 text-xs text-slate-500">Casablanca</p>
                    </div>
                    <div className="rounded-3xl bg-slate-900/80 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Service</p>
                      <p className="mt-2 text-sm font-medium">Full Inspection</p>
                      <p className="mt-1 text-xs text-slate-500">From 249 MAD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-[36px] border-white/10 p-8">
            <CardHeader>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Featured services</p>
                <CardTitle>Explore the best in class auto care</CardTitle>
              </div>
            </CardHeader>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                  <div className="text-2xl">{item.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </Card>
          <Card className="rounded-[36px] border-white/10 p-8">
            <CardHeader>
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Garage spotlight</p>
                <CardTitle>Trusted by thousands of drivers across Morocco</CardTitle>
              </div>
            </CardHeader>
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-sm text-slate-400">Available mechanics</p>
                  <p className="mt-3 text-3xl font-semibold text-white">+116</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-sm text-slate-400">Verified garages</p>
                  <p className="mt-3 text-3xl font-semibold text-white">368</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-sm text-slate-400">Response rate</p>
                  <p className="mt-3 text-3xl font-semibold text-white">98%</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5">
                  <p className="text-sm text-slate-400">Average repair time</p>
                  <p className="mt-3 text-3xl font-semibold text-white">1.2h</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Marketplace</p>
              <h2 className="text-3xl font-semibold text-white">Top garages near you</h2>
            </div>
            <Button variant="outline">View all garages</Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <GarageCard />
            <GarageCard />
            <GarageCard />
          </div>
        </section>
      </section>
    </main>
  );
}
