import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import FAQ from "@/models/FAQ";

export async function GET() {
  try {
    await connectToDatabase();

    const faqs = await FAQ.find({ isActive: true }).sort({ order: 1 });

    return NextResponse.json(faqs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    await connectToDatabase();

    const faq = await FAQ.create(body);

    return NextResponse.json(faq, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
