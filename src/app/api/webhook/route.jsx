import { stripe } from "@/app/utils/stripe";
import { revalidatePath } from "next/cache";

export async function POST(req, res) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.log("Error Message:", err.message);
    return Response.json(
      { error: `webhook Error: ${err.message}` },
      { status: 400 }
    );
  }
  if (event.type == "product.created" || event.type == "product.updated") {
    console.log("Event Type:", event.type);
    revalidatePath("/product", "page");
    revalidatePath("/product/[slug]", "page");
    revalidatePath("/", "page");
  } else {
    console.log(`Unhandled Event Type ${event.type}`);
  }
  return Response.json({ message: "success" });
}
