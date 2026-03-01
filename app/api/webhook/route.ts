import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";


export async function POST(request: NextRequest) {
    const body = await request.text()
    const signature = request.headers.get("stripe-signature")
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, signature || "", webhookSecret)
    }
    catch (error: unknown) {
        return NextResponse.json( {error: error instanceof Error ? error.message : "Unknown error" }, { status: 400 })
    }

    switch (event.type) {
        case "checkout.session.completed": {
            const session = event.data.object as Stripe.Checkout.Session;
            await handleCheckoutSessionCompleted(session)
            break;
        }
        case "invoice.payment_failed": {
            const session = event.data.object as Stripe.Invoice;
            await handleInvoicePaymentFailed(session)
            break;
        }
        case "customer.subscription.deleted": {
            const session = event.data.object as Stripe.Subscription;
            await handleCustomerSubscriptionDeleted(session)
            break;
        }
        default: 
            console.warn(`Unhandled event type: ${event.type}`)
    }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
    
}

async function handleInvoicePaymentFailed(session: Stripe.Invoice) {

}

async function handleCustomerSubscriptionDeleted(session: Stripe.Subscription) {

}