"use client";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

const LocomotiveScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: "vertical", // vertical, horizontal
      gestureOrientation: "vertical", // vertical, horizontal, both
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <div></div>;
};

export default LocomotiveScroll;
