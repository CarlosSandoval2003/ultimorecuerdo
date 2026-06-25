import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, details } = body;

    if (!clientPromise) {
      return NextResponse.json(
        { error: "MongoDB URI not configured." },
        { status: 503 }
      );
    }

    const client = await clientPromise;
    const db = client.db(); // Uses the database specified in the URI

    // Create the event document
    const eventDoc = {
      timestamp: new Date(),
      action,
      details,
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    // Insert into 'tracking_events' collection
    await db.collection("tracking_events").insertOne(eventDoc);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Tracking Error:", error);
    return NextResponse.json(
      { error: "Failed to track event" },
      { status: 500 }
    );
  }
}
