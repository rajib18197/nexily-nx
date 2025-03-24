"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function HeroButtons({ primaryText, secondaryText }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <Button
        size="lg"
        variant="default"
        className="group"
        style={{
          backgroundColor: "#60a5fa",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        {primaryText || "Get Started"}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        style={{ border: "2px solid #888", cursor: "pointer" }}
        onClick={() => {
          document
            .getElementById("services")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        {secondaryText || "Learn More"}
        <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
