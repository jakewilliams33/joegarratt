"use client";

import { useEffect, useRef } from "react";

export default function Clouds() {
  const cloud = useRef();

  function rn(from, to) {
    return ~~(Math.random() * (to - from + 1)) + from;
  }

  function rs() {
    return arguments[rn(1, arguments.length) - 1];
  }

  function boxShadows(max) {
    let ret = [];
    for (let i = 0; i < max; ++i) {
      ret.push(`
      ${rn(-300, 300)}vw ${rn(1, 100)}vh ${rn(20, 40)}vmin ${rn(1, 20)}vmin
      ${rs("#dbbadb", "#ae95d8", "#9e90d6", "#ebcbc2", "#8a7dbb")}
    `);
    }
    return ret.join(",");
  }

  function update() {
    if (cloud.current) {
      cloud.current.style.boxShadow = boxShadows(100);
    }
  }

  useEffect(() => {
    update();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        zIndex: -100000000000,
      }}
      className="sky-background"
    >
      <div className="clouds-container">
        <div className="cloud" ref={cloud}></div>

        <svg style={{ width: "200px" }}>
          <filter id="filter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency=".02"
              numOctaves="5"
            />

            <feDisplacementMap scale="140" in="SourceGraphic" />
          </filter>
        </svg>
      </div>
    </div>
  );
}
