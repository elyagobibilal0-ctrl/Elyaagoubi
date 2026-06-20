import { GarageCard } from "@/components/garage-card";
import { GarageMap } from "@/components/google-map";
import { Button } from "@/components/ui/button";

export default function GarageMarketplacePage() {
  return (
    <main className="min-h-screen bg-automaster-900 px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl space-y-10">
        <section className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Garage marketplace</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Find verified garages, tire shops, and service centers</h1>
            </div>
            <Button variant="outline">Filter results</Button>
          </div>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-4">
              <GarageCard name="Garage Atlas" city="Casablanca" rating="4.9" reviews={320} mechanics={14} waitTime="20 min" open verified />
              <GarageCard name="Speed Service" city="Marrakesh" rating="4.8" reviews={198} mechanics={9} waitTime="15 min" open verified />
              <GarageCard name="Tanger Auto Pro" city="Tanger" rating="4.7" reviews={146} mechanics={12} waitTime="22 min" open verified />
            </div>
            <GarageMap />
          </div>
        </section>
      </div>
    </main>
  );
}
