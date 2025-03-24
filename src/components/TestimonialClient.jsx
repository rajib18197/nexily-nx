"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialClient({ testimonials, children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div
      className=""
      style={{
        boxShadow:
          "0 0 0 transparent,0 0 0 transparent, 0 0 3rem rgba(76, 103, 150, 0.3)",
        padding: "30px 0",
        width: "80%",
        margin: "0 auto",
      }}
    >
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {children}
          </div>
        </div>

        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
            style={{
              backgroundColor: "#60a5fa",
              color: "white",
              cursor: "pointer",
            }}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
            style={{
              backgroundColor: "#60a5fa",
              color: "white",
              cursor: "pointer",
            }}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
