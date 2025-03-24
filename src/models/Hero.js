import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: [true, "Please provide a heading"],
      maxlength: [200, "Heading cannot be more than 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description"],
      maxlength: [500, "Description cannot be more than 500 characters"],
    },
    buttonText1: {
      type: String,
      default: "Get Started",
    },
    buttonText2: {
      type: String,
      default: "Learn More",
    },
    clients: {
      type: Number,
      default: 500,
    },
    yearsOfExperience: {
      type: Number,
      default: 10,
    },
    projects: {
      type: Number,
      default: 150,
    },
    countriesServed: {
      type: Number,
      default: 25,
    },
    images: [String],
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
