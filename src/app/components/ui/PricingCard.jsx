"use client";
import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { motion } from "motion/react";
import Image from "next/image";
export default function PricingCard({ plan }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
        plan.popular
          ? "border-3 shadow-xl"
          : "border shadow-sm hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-[#e3f2ff] px-4 py-2 text-xs font-semibold shadow-md border">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div>
        <h3 className="text-xl font-bold text-zinc-900">{plan.name}</h3>

        <p className="mt-3 min-h-18 text-sm leading-6 text-zinc-600">
          {plan.description}
        </p>
      </div>

      {/* Price */}
      <div className="mt-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold tracking-tight text-zinc-900">
            {plan.price}
          </span>

          <span className="text-sm text-zinc-500">{plan.period}</span>
        </div>
      </div>

      {/* Button */}
      <a
        href={plan.href}
        className={`mt-8 flex h-12 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors border  ${
          plan.popular
            ? "bg-[#e3f2ff] hover:bg-[#e3f2ff]/70"
            : " text-zinc-900"
        }`}
      >
        {plan.buttonText}
      </a>

      {/* Divider */}
      <div className="my-8 h-px bg-zinc-400" />

      {/* Features */}
      <div className="flex-1">
        <p className="mb-5 text-sm font-semibold text-zinc-900">
          What's included:
        </p>

        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-[15px]"
            >
              <GiCheckMark />

              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Note */}
      {plan.note && (
        <p className="mt-6 text-xs leading-5 text-zinc-500">{plan.note}</p>
      )}
    </motion.div>
  );
}
