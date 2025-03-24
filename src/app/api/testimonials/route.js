import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Testimonial from "@/models/Testimonial";

export async function GET() {
  try {
    await connectToDatabase();

    const testimonials = await Testimonial.find({ isActive: true }).sort({
      order: 1,
    });

    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    await connectToDatabase();

    const testimonial = await Testimonial.create(body);

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
