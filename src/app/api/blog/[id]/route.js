import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Blog from "@/models/Blog";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const { id } = await params;
    const post = await Blog.findById(id).populate("author", "name email");

    if (!post) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
