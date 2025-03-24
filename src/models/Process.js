import mongoose from "mongoose";

const ProcessSchema = new mongoose.Schema(
  {
    number: {
      type: String,
      required: [true, "Please provide a step number"],
      maxlength: [10, "Step number cannot be more than 10 characters"],
    },
    title: {
      type: String,
      required: [true, "Please provide a title for this process step"],
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this process step"],
      maxlength: [500, "Description cannot be more than 500 characters"],
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

export default mongoose.models.Process ||
  mongoose.model("Process", ProcessSchema);
