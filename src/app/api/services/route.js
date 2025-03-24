import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Service from "@/models/Service";

export async function GET() {
  try {
    await connectToDatabase();

    const services = await Service.find({ isActive: true }).sort({ order: 1 });

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    await connectToDatabase();

    const service = await Service.create(body);

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
