import { promises as fs } from "fs";
import path from "path";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Booking {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  service: string;
  date: string;
  time: string;
  description: string;
}

async function getBookings() {
  try {
    const raw = await fs.readFile(path.join(process.cwd(), "data", "appointments.json"), "utf-8");
    return JSON.parse(raw) as Booking[];
  } catch {
    return [] as Booking[];
  }
}

export default async function AdminBookingsPage() {
  const bookings = await getBookings();

  return (
    <main className="min-h-screen bg-automaster-900 px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="rounded-[40px] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Appointment bookings</p>
            <h1 className="text-3xl font-semibold text-white">Recent appointment requests</h1>
            <p className="text-slate-400">Review the submitted bookings and follow up with customers directly.</p>
          </div>
        </div>

        {bookings.length === 0 ? (
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>No appointments yet</CardTitle>
            </CardHeader>
            <CardDescription>Bookings will appear here after customers submit the appointment form.</CardDescription>
            <div className="mt-6">
              <Link href="/" className="text-sky-300 hover:text-white">
                Return to booking page
              </Link>
            </div>
          </Card>
        ) : (
          <div className="space-y-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="rounded-[32px] border-white/10 p-8">
                <CardHeader>
                  <div>
                    <CardTitle>{booking.name}</CardTitle>
                    <CardDescription>
                      {booking.service} on {booking.date} at {booking.time}
                    </CardDescription>
                  </div>
                </CardHeader>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Contact</p>
                    <p className="text-sm text-slate-200">{booking.phone}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Vehicle</p>
                    <p className="text-sm text-slate-200">{booking.brand} {booking.model} ({booking.year})</p>
                  </div>
                </div>
                <div className="mt-6 rounded-3xl bg-slate-900/80 p-5 text-sm text-slate-300">
                  <p className="font-semibold text-white">Problem description</p>
                  <p className="mt-2">{booking.description}</p>
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.24em] text-slate-500">
                  Received {new Date(booking.createdAt).toLocaleString()}
                </p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
