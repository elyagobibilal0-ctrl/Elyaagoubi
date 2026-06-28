"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const heroHighlights = [
  "Personal concierge booking",
  "Certified premium garages",
  "Real-time appointment slots",
  "Door-to-door delivery options"
];

const premiumServices = [
  {
    title: "Precision service booking",
    description: "Book appointments with elite service centers and enjoy transparent pricing, detailed inspection, and trusted workmanship."
  },
  {
    title: "Electric & hybrid expertise",
    description: "Specialized care for modern EV and hybrid vehicles with genuine parts and calibrated diagnostics."
  },
  {
    title: "White-glove pickup",
    description: "Schedule a luxury pickup and delivery experience so your car is serviced without interrupting your day."
  }
];

const processSteps = [
  {
    label: "Select service",
    detail: "Choose the exact maintenance or repair package your vehicle requires."
  },
  {
    label: "Pick date & time",
    detail: "Reserve a slot instantly and confirm with premium partners near you."
  },
  {
    label: "Enjoy vehicle care",
    detail: "Receive updates, inspection reports, and a flawless completion experience."
  }
];

function PremiumCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="group rounded-[32px] border border-white/10 bg-slate-950/80 p-8 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30">
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900/70 text-sky-300 transition group-hover:bg-sky-400/10">
        <Sparkles className="h-6 w-6" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
    </div>
  );
}

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    brand: "",
    model: "",
    year: `${currentYear}`,
    service: "Periodic check-up",
    date: "",
    time: "09:00",
    description: ""
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const serviceOptions = [
    "Periodic check-up",
    "Brake service",
    "Battery inspection",
    "Detailing & protection",
    "Tire alignment",
    "Oil change"
  ];

  const yearOptions = Array.from({ length: 14 }, (_, i) => `${currentYear - i}`);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    if (
      !form.name ||
      !form.phone ||
      !form.brand ||
      !form.model ||
      !form.year ||
      !form.service ||
      !form.date ||
      !form.time ||
      !form.description
    ) {
      setStatus("error");
      setMessage("Please complete all fields before submitting your appointment.");
      return;
    }

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error || "Unable to submit your appointment.");
      }

      setStatus("success");
      setMessage("Your appointment request has been received. Our team will contact you shortly.");
      setForm({
        name: "",
        phone: "",
        brand: "",
        model: "",
        year: `${currentYear}`,
        service: "Periodic check-up",
        date: "",
        time: "09:00",
        description: ""
      });
    } catch (error) {
      setStatus("error");
      setMessage((error as Error).message || "An unexpected error occurred.");
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-hero-gradient px-5 py-10 sm:px-10 lg:px-16">
      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-950/70 p-8 shadow-glow">
        <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-500/30 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
              <Truck className="h-4 w-4 text-sky-300" />
              Premium service scheduling for Garajy customers
            </div>
            <div className="max-w-3xl space-y-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Appointment Booking</p>
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  Book your next service with the elegance of a luxury drive
                </h1>
              </div>
              <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
                Discover a refined vehicle care experience. Get instant slots, white-glove pickup, and premium garages all from one beautifully crafted booking flow.
              </p>
              <p className="text-sm text-slate-400">
                Need help? Call our booking line at <a className="text-sky-300 transition hover:text-sky-200" href="tel:0777683347">0777683347</a> or <a className="text-sky-300 transition hover:text-sky-200" href="tel:0693575942">0693575942</a>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="#booking-form">Book Appointment</a>
                </Button>
                <Button variant="secondary" size="lg">
                  View Premium Fleet
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-inner">
                  <p className="text-sm text-slate-400">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0a1325]/80 p-8 shadow-2xl shadow-slate-950/60 backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-fuchsia-400 to-emerald-400 opacity-60" />
            <div className="relative space-y-8">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Choose your appointment</p>
                <h2 className="text-3xl font-semibold text-white">Reserve your service slot</h2>
              </div>
              <form id="booking-form" className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    Name
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-sky-400/60"
                      placeholder="Your full name"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    Phone
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-sky-400/60"
                      placeholder="0777683347"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <label className="space-y-2 text-sm text-slate-300">
                    Car Brand
                    <input
                      name="brand"
                      value={form.brand}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-sky-400/60"
                      placeholder="Peugeot"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    Car Model
                    <input
                      name="model"
                      value={form.model}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-sky-400/60"
                      placeholder="208 GT"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    Year
                    <select
                      name="year"
                      value={form.year}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-sky-400/60"
                    >
                      {yearOptions.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    Service
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-sky-400/60"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    Date
                    <input
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-sky-400/60"
                    />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm text-slate-300">
                    Time
                    <input
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-sky-400/60"
                    />
                  </label>
                  <label className="space-y-2 text-sm text-slate-300">
                    Problem Description
                    <textarea
                      name="description"
                      rows={4}
                      value={form.description}
                      onChange={handleChange}
                      className="w-full rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-4 text-white outline-none transition focus:border-sky-400/60"
                      placeholder="Describe the issue or service request"
                    />
                  </label>
                </div>
                {message ? (
                  <div
                    className={`rounded-3xl border p-4 text-sm ${
                      status === "success"
                        ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-200"
                        : "border-rose-400/20 bg-rose-500/10 text-rose-200"
                    }`}
                  >
                    {message}
                  </div>
                ) : null}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="rounded-3xl border border-slate-800/90 bg-slate-900/80 p-4 text-sm text-slate-300">
                    <p className="font-semibold text-white">Next available:</p>
                    <p className="mt-1">Tomorrow, 09:30 AM</p>
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Confirm appointment"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl space-y-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {premiumServices.map((service) => (
            <PremiumCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl rounded-[40px] border border-white/10 bg-slate-950/70 p-10 shadow-glow">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Service flow</p>
            <h2 className="text-3xl font-semibold text-white">A refined booking experience in three steps</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.label} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{step.label}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Why choose Garajy</p>
            <h2 className="text-3xl font-semibold text-white">Premium appointments built for modern drivers</h2>
          </div>
          <Button variant="outline">Explore all services</Button>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>Elite partners</CardTitle>
            </CardHeader>
            <CardDescription>Only top-rated garages with a commitment to luxury service are featured in our network.</CardDescription>
          </Card>
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>Transparent pricing</CardTitle>
            </CardHeader>
            <CardDescription>Book with confidence thanks to clear cost estimates and appointment confirmations.</CardDescription>
          </Card>
          <Card className="rounded-[32px] border-white/10 p-8">
            <CardHeader>
              <CardTitle>Seamless follow-up</CardTitle>
            </CardHeader>
            <CardDescription>Receive service progress updates, inspection reports, and post-service care notes.</CardDescription>
          </Card>
        </div>
      </section>
    </main>
  );
}
