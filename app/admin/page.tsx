import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-automaster-900 px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[40px] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Admin panel</p>
            <h1 className="text-3xl font-semibold text-white">Manage users, garages, and reviews</h1>
            <p className="text-slate-400">Verify listings, moderate content, and monitor marketplace performance.</p>
          </div>
        </div>
        <div className="grid gap-6 xl:grid-cols-3">
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardDescription>Approve accounts and manage access levels.</CardDescription>
          </Card>
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>Garages</CardTitle>
            </CardHeader>
            <CardDescription>Verify and feature trusted businesses.</CardDescription>
          </Card>
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            <CardDescription>View platform performance and growth metrics.</CardDescription>
          </Card>
        </div>
      </div>
    </main>
  );
}
