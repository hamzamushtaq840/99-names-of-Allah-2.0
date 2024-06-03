"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hadith = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]);

  return (
    <div className="min-h-screen overflow-hidden text-white">
      <div className="readex about-text abc relative ml-28 mt-7">
        <motion.h1 style={{ x }} className="text-outline absolute top-0">
          Hadiths
        </motion.h1>
      </div>
    </div>
  );
};

export default Hadith;
