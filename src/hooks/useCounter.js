"use client";

import { useState, useEffect, useRef } from "react";

export default function useCounterAnimation({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  easing = "easeOut",
  onUpdate,
  onComplete,
}) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const animationRef = useRef(null);
  const startTimeRef = useRef(null);

  // Easing functions
  const easingFunctions = {
    linear: (t) => t,
    easeOut: (t) => 1 - Math.pow(1 - t, 3),
    easeIn: (t) => t * t * t,
    easeInOut: (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  };

  const startAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    startTimeRef.current = null;

    const step = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp + delay;
      }

      const elapsed = timestamp - startTimeRef.current;

      if (elapsed < 0) {
        animationRef.current = requestAnimationFrame(step);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easingFunctions[easing](progress);

      countRef.current = start + easedProgress * (end - start);
      setCount(countRef.current);

      if (onUpdate) {
        onUpdate(countRef.current);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        if (onComplete) {
          onComplete();
        }
      }
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  const resetAnimation = () => {
    stopAnimation();
    setCount(start);
    countRef.current = start;
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return {
    count,
    startAnimation,
    stopAnimation,
    resetAnimation,
    isAnimating: !!animationRef.current,
  };
}
