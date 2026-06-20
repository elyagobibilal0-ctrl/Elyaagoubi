import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-automaster-900 px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[40px] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Garage dashboard</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Manage your garage and bookings</h1>
            </div>
            <Button>New Booking</Button>
          </div>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>Revenue Analytics</CardTitle>
            </CardHeader>
            <CardDescription>Track monthly booking revenue and service performance.</CardDescription>
          </Card>
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>Active Requests</CardTitle>
            </CardHeader>
            <CardDescription>Monitor incoming roadside assistance and reservation requests.</CardDescription>
          </Card>
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>Employee Status</CardTitle>
            </CardHeader>
            <CardDescription>Review available, busy, and off-duty mechanics at a glance.</CardDescription>
          </Card>
        </div>
      </div>
    </main>
  );
}
