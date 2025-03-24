import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema(
  {
    quote: {
      type: String,
      required: [true, "Please provide a testimonial quote"],
      maxlength: [500, "Quote cannot be more than 500 characters"],
    },
    author: {
      type: String,
      required: [true, "Please provide an author name"],
      maxlength: [100, "Author name cannot be more than 100 characters"],
    },
    position: {
      type: String,
      required: [true, "Please provide the author's position"],
      maxlength: [100, "Position cannot be more than 100 characters"],
    },
    company: {
      type: String,
      maxlength: [100, "Company name cannot be more than 100 characters"],
    },
    authorImage: {
      type: String,
      default: "/placeholder.svg?height=100&width=100",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Testimonial ||
  mongoose.model("Testimonial", TestimonialSchema);
