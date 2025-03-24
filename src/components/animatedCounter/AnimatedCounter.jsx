"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function AnimatedCounter({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  easing = "easeOut",
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Easing functions
  const easingFunctions = {
    linear: (t) => t,
    easeOut: (t) => 1 - Math.pow(1 - t, 3),
    easeIn: (t) => t * t * t,
    easeInOut: (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  };

  useEffect(() => {
    let startTimestamp = null;
    let animationFrameId;

    if (inView) {
      const step = (timestamp) => {
        if (!startTimestamp) {
          startTimestamp = timestamp + delay;
        }

        const elapsed = timestamp - startTimestamp;

        if (elapsed < 0) {
          animationFrameId = requestAnimationFrame(step);
          return;
        }

        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easingFunctions[easing](progress);

        countRef.current = easedProgress * end;
        setCount(countRef.current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [inView, end, duration, delay, easing]);

  const formattedCount =
    decimals > 0 ? count.toFixed(decimals) : Math.round(count).toLocaleString();

  return (
    <span
      ref={ref}
      className={cn("tabular-nums", className)}
      style={{ color: "hsl(221.2 83.2% 53.3%)" }}
    >
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
