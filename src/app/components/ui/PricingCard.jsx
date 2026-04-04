import React from "react";
import { GiCheckMark } from "react-icons/gi";

export default function PricingCard({ info }) {
  return (
    <div className="border-2 rounded-[20px] py-12 md:py-15 px-10 flex flex-col items-center">
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
        {info.perks.map((perk) => (
          <div className="flex gap-2">
            <GiCheckMark className="mt-1 text-lg" />
            <div className="text-lg">{perk}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
