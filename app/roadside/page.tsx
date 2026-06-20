import { Button } from "@/components/ui/button";

export default function RoadsidePage() {
  return (
    <main className="min-h-screen bg-automaster-900 px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl rounded-[40px] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Emergency Assistance</p>
          <h1 className="text-3xl font-semibold text-white">Request roadside support instantly</h1>
          <p className="text-slate-400">Share your location and vehicle details so nearby garages can respond quickly.</p>
        </div>
        <form className="mt-10 grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Name" />
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Phone" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Vehicle Brand" />
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Vehicle Model" />
          </div>
          <textarea rows={4} className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Problem Description" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="GPS Location" />
            <input type="file" className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white" />
          </div>
          <Button size="lg">Send Assistance Request</Button>
        </form>
      </div>
    </main>
  );
}
