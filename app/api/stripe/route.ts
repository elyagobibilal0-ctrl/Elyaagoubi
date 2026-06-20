import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", { apiVersion: "2024-08-19" });

export async function POST(request: Request) {
  const { amount, currency = "mad", metadata } = await request.json();
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency,
    payment_method_types: ["card"],
    metadata
  });

  return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
    headers: { "Content-Type": "application/json" }
  });
}
