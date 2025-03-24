import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    await connectToDatabase();

    const contact = await Contact.create(body);

    return NextResponse.json(contact, { status: 201 });
  } catch (error) {
    console.log("Contact API route error 61511", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
