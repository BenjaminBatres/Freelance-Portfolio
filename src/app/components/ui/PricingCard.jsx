"use client";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import * as motion from "motion/react-client";
export default function PricingCard({ info }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="border-2 rounded-[20px] py-12 md:py-15 px-10 flex flex-col items-center"
    >
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
