import { Button } from "@/components/ui/button";

export default function GarageRegisterPage() {
  return (
    <main className="min-h-screen bg-automaster-900 px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl rounded-[40px] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Garage Registration</p>
          <h1 className="text-3xl font-semibold text-white">Create your garage owner profile</h1>
          <p className="text-slate-400">Join AutoMasterPro.ma to manage bookings, roadside requests, and promote your services.</p>
        </div>
        <form className="mt-10 grid gap-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Garage Name" />
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Owner Name" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Phone" />
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Email" />
          </div>
          <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Address" />
          <textarea rows={4} className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Services Offered" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Working Hours" />
            <input className="rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Employee Count" />
          </div>
          <div className="flex items-center gap-3">
            <input className="h-12 w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 text-white placeholder:text-slate-500 focus:border-sky-400/60 focus:outline-none" placeholder="Google Maps Location" />
            <Button variant="secondary">Locate</Button>
          </div>
          <Button size="lg">Submit Garage Profile</Button>
        </form>
      </div>
    </main>
  );
}
