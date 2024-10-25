"use client";

import { useEffect, useState } from "react";

const ColorRect = ({ children, customScroll, styles }) => {
  const ANIMATION_DURATION = 80; // duration in seconds
  const [animationDelay, setAnimationDelay] = useState("0s");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Retrieve or initialize start time in localStorage
      const startTime =
        localStorage.getItem("animationStartTime") || Date.now();
      localStorage.setItem("animationStartTime", startTime);

      // Calculate the elapsed time and determine the progress in animation
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = (elapsed % ANIMATION_DURATION) / ANIMATION_DURATION;

      // Set animation delay based on the calculated progress
      setAnimationDelay(`-${progress * ANIMATION_DURATION}s`);
    }
  }, []);

  return (
    <div
      className={customScroll ? "color-rect custom-scroll" : "color-rect"}
      style={{ animationDelay, ...styles }}
    >
      {children}
    </div>
  );
};

export default ColorRect;
