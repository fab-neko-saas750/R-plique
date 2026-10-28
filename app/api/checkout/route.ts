import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SECRET_KEY!
    );

    const signature = request.headers.get("stripe-signature");
    const body = await request.text();

    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature!,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch {
      return NextResponse.json(
        { error: "Signature invalide" },
        { status: 400 }
      );
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      if (session.subscription) {
        const { error } = await supabase.from("abonnements").upsert(
          {
            email: session.customer_details?.email ?? "inconnu",
            stripe_customer_id: session.customer as string,
            stripe_subscription_id: session.subscription as string,
            statut: "actif",
            mis_a_jour_le: new Date().toISOString(),
          },
          { onConflict: "stripe_subscription_id" }
        );
        if (error) {
          return NextResponse.json(
            { error: "Erreur base", detail: error.message },
            { status: 500 }
          );
        }
      }
    }

    if (
      event.type === "customer.subscription.updated" ||
      event.type === "customer.subscription.deleted"
    ) {
      const sub = event.data.object as Stripe.Subscription;
      const statut =
        sub.status === "active" || sub.status === "trialing"
          ? "actif"
          : sub.status === "canceled"
          ? "annule"
          : "impaye";
      await supabase
        .from("abonnements")
        .update({ statut, mis_a_jour_le: new Date().toISOString() })
        .eq("stripe_subscription_id", sub.id);
    }

    return NextResponse.json({ recu: true });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erreur inconnue";
    return NextResponse.json(
      { error: "Plantage", detail: message },
      { status: 500 }
    );
  }
}
