"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function AnimatedHeroImage({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(currentIndex);
  function handleChangeInc() {
    console.log(12);
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  }

  function handleChangeDec() {
    console.log(21);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  }

  return (
    <div
      className="relative w-full aspect-square max-w-lg mx-auto"
      style={{ overflow: "hidden" }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl transform rotate-3"></div>
      <div>
        {images.map((image, index) => {
          return (
            <div
              className="absolute inset-0 bg-card rounded-2xl shadow-xl overflow-hidden"
              style={{
                transform: `translateX(${100 * (index - currentIndex)}%)`,
                transition: "all .6s",
              }}
              key={index}
            >
              <img
                src={image || ""}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}

        <div>
          <button
            style={{
              background: "white",
              opacity: "0.6",
              cursor: "pointer",
              position: "absolute",
              top: "50%",
              left: "0",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleChangeDec}
          >
            <ArrowLeft />
          </button>
          <button
            style={{
              background: "white",
              opacity: "0.6",
              cursor: "pointer",
              position: "absolute",
              top: "50%",
              right: "0",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleChangeInc}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
