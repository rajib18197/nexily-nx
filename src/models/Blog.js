import mongoose from "mongoose";
import slugify from "slugify";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this blog post"],
      maxlength: [200, "Title cannot be more than 200 characters"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    content: {
      type: String,
      required: [true, "Please provide content for this blog post"],
    },
    excerpt: {
      type: String,
      required: [true, "Please provide an excerpt for this blog post"],
      maxlength: [500, "Excerpt cannot be more than 500 characters"],
    },
    coverImage: {
      type: String,
      default: "/placeholder.svg?height=600&width=800",
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      default: "General",
    },
    tags: {
      type: [String],
      default: [],
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    readTime: {
      type: Number,
      default: 5, // Default read time in minutes
    },
  },
  {
    timestamps: true,
  }
);

// Generate slug from title before saving
BlogSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }

  // Set publishedAt date when post is published
  if (this.isModified("isPublished") && this.isPublished && !this.publishedAt) {
    this.publishedAt = new Date();
  }

  next();
});

// Calculate read time based on content length
BlogSchema.pre("save", function (next) {
  if (this.isModified("content")) {
    // Average reading speed: 200 words per minute
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / 200);
  }
  next();
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
