'use client'
import React, { useEffect, useRef } from "react";
import { GiCheckMark } from "react-icons/gi";
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";
export default function PricingCard({ info }) {
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
        hidden: { opacity: 0, y: 25 },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ delay: 0.7, duration: 0.7 }}
     className="border-2 rounded-[20px] py-12 md:py-15 px-10 flex flex-col items-center">
      <div
        className="py-1.5 px-3.75 border-2 rounded-full font-bold uppercase mb-6"
        style={{ backgroundColor: info.bgColor }}
      >
        {info.title}
      </div>
      <h2 className="text-3xl sm:text-[40px] font-medium text-center mb-4">
        {info.subTitle}
      </h2>
      <p className="text-lg font-light mb-6">{info.description}</p>
      <div className="space-y-2">
        {info.perks.map((perk, id) => (
          <div className="flex gap-2" key={id}>
            <GiCheckMark className="mt-1 text-lg" />
            <div className="text-lg">{perk}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
