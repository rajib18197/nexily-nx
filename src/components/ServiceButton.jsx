"use client";
import { ArrowRight } from "lucide-react";

export default function ServiceButton({ buttonText }) {
  return (
    <button
      className={`group flex text-center items-center justify-center text-sm font-medium hover:text-white transition-colors`}
      style={{
        textAlign: "center",
        width: "100%",
        background: "white",
        color: "#101d28",
        padding: "10px 20px",
        borderRadius: "100px",
        cursor: "pointer",
      }}
      onClick={() => {
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" });
      }}
    >
      {buttonText}
      <ArrowRight className={`ml-2 h-4 w-4 transition-transform`} />
    </button>
  );
}
