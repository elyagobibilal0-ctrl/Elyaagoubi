import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const bookingsFile = path.join(process.cwd(), "data", "appointments.json");

interface BookingRequest {
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

async function readBookings() {
  try {
    const content = await fs.readFile(bookingsFile, "utf-8");
    return JSON.parse(content) as Array<BookingRequest & { id: string; createdAt: string }>;
  } catch {
    return [];
  }
}

async function saveBookings(bookings: unknown) {
  await fs.mkdir(path.dirname(bookingsFile), { recursive: true });
  await fs.writeFile(bookingsFile, JSON.stringify(bookings, null, 2), "utf-8");
}

function validateBooking(data: Partial<BookingRequest>) {
  const requiredFields: Array<keyof BookingRequest> = [
    "name",
    "phone",
    "brand",
    "model",
    "year",
    "service",
    "date",
    "time",
    "description"
  ];

  return requiredFields.every((field) => typeof data[field] === "string" && data[field].trim().length > 0);
}

export async function GET() {
  const bookings = await readBookings();
  return NextResponse.json({ bookings });
}

export async function POST(request: Request) {
  const payload = (await request.json()) as Partial<BookingRequest>;

  if (!validateBooking(payload)) {
    return NextResponse.json({ error: "All booking fields are required." }, { status: 400 });
  }

  const bookingPayload = payload as BookingRequest;
  const booking = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    name: bookingPayload.name.trim(),
    phone: bookingPayload.phone.trim(),
    brand: bookingPayload.brand.trim(),
    model: bookingPayload.model.trim(),
    year: bookingPayload.year.trim(),
    service: bookingPayload.service.trim(),
    date: bookingPayload.date.trim(),
    time: bookingPayload.time.trim(),
    description: bookingPayload.description.trim()
  };

  const bookings = await readBookings();
  bookings.unshift(booking);

  try {
    await saveBookings(bookings);
    return NextResponse.json({ success: true, booking }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Unable to save appointment." }, { status: 500 });
  }
}
