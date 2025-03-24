import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide your name"],
      maxlength: [100, "Name cannot be more than 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      maxlength: [20, "Phone number cannot be more than 20 characters"],
    },
    company: {
      type: String,
      maxlength: [100, "Company name cannot be more than 100 characters"],
    },
    service: {
      type: String,
      required: [true, "Please select a service you're interested in"],
    },
    message: {
      type: String,
      required: [true, "Please provide a message"],
      maxlength: [2000, "Message cannot be more than 2000 characters"],
    },
    status: {
      type: String,
      enum: ["new", "read", "responded", "archived"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);
