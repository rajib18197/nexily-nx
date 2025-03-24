import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Process from "@/models/Process";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();

    const process = await Process.findById(params.id);

    if (!process) {
      return NextResponse.json({ error: "Process not found" }, { status: 404 });
    }

    return NextResponse.json(process, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();

    await connectToDatabase();

    const process = await Process.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!process) {
      return NextResponse.json({ error: "Process not found" }, { status: 404 });
    }

    return NextResponse.json(process, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();

    const process = await Process.findByIdAndDelete(params.id);

    if (!process) {
      return NextResponse.json({ error: "Process not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Process deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
