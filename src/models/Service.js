import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this service"],
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this service"],
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    icon: {
      type: String,
      required: [true, "Please provide an icon for this service"],
    },
    bulletPoints: {
      type: [String],
      default: [],
    },
    buttonText: {
      type: String,
      default: "Get Started",
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

export default mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);
