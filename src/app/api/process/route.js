import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Process from "@/models/Process";

export async function GET() {
  try {
    await connectToDatabase();

    const processes = await Process.find({ isActive: true }).sort({ order: 1 });

    return NextResponse.json(processes, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    await connectToDatabase();

    const process = await Process.create(body);

    return NextResponse.json(process, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
