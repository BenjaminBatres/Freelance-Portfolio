'use client'
import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { GoNorthStar } from "react-icons/go";
import { useAnimation, useInView } from "motion/react";

export default function SectionHeader({ title, subTitle }) {
    const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <motion.div
      ref={containerRef}
      animate={mainControls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="flex justify-center mb-5">
        <h3 className="uppercase border-2 py-1 px-5 rounded-full flex items-center gap-2 font-medium bg-[#e3f2ff]">
          <GoNorthStar />
          {title}
        </h3>
      </div>
      <h2 className="text-center font-bold text-[40px]/10 sm:text-5xl mb-10 max-w-md mx-auto">
        {subTitle}
      </h2>
    </motion.div>
  );
}
