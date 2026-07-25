import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("[CONTACT_SUBMISSION]", body);

  return NextResponse.json({
    ok: true,
    message: "Submission received.",
    delivery: process.env.CONTACT_EMAIL || "Configure CONTACT_EMAIL to enable email delivery integration."
  });
}
