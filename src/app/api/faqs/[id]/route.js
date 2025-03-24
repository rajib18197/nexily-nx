import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import FAQ from "@/models/FAQ";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();

    const faq = await FAQ.findById(params.id);

    if (!faq) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json(faq, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const body = await request.json();

    await connectToDatabase();

    const faq = await FAQ.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!faq) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json(faq, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();

    const faq = await FAQ.findByIdAndDelete(params.id);

    if (!faq) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "FAQ deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
