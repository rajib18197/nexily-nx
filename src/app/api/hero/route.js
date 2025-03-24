import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Hero from "@/models/Hero";

export async function GET() {
  try {
    await connectToDatabase();

    // Get the active hero content
    // We'll only have one active hero at a time
    const hero = await Hero.findOne({ isActive: true });

    // If no hero content exists, return default values
    if (!hero) {
      return NextResponse.json(
        {
          heading: "Transform Your Business with Nexily",
          description:
            "We craft powerful software solutions and provide expert tech consultancy to help you stay ahead in the digital era. Let's help you transform ideas into reality.",
          buttonText1: "Get Started",
          buttonText2: "Learn More",
          clients: 500,
          yearsOfExperience: 10,
          projects: 150,
          countriesServed: 25,
          heroImage: "/placeholder.svg?height=600&width=800",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(hero, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    await connectToDatabase();

    // Check if there's already an active hero
    const existingHero = await Hero.findOne({ isActive: true });

    if (existingHero) {
      // Update the existing hero
      const updatedHero = await Hero.findByIdAndUpdate(existingHero._id, body, {
        new: true,
        runValidators: true,
      });
      return NextResponse.json(updatedHero, { status: 200 });
    } else {
      // Create a new hero
      const hero = await Hero.create(body);
      return NextResponse.json(hero, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
