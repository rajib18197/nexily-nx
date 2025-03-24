import mongoose from "mongoose";

const FAQSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Please provide a question"],
      maxlength: [200, "Question cannot be more than 200 characters"],
    },
    answer: {
      type: String,
      required: [true, "Please provide an answer"],
      maxlength: [1000, "Answer cannot be more than 1000 characters"],
    },
    category: {
      type: String,
      default: "General",
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

export default mongoose.models.FAQ || mongoose.model("FAQ", FAQSchema);
