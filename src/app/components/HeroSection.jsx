"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { GoNorthStar } from "react-icons/go";
import HeroImg from "../assets/Hero-img.jpg";
//framer motion
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="pt-20 sm:pt-30 pb-20 lg:pb-55 px-6 bg-Primary border-b-2">
      <div className="max-w-7xl mx-auto flex flex-col gap-15 lg:flex-row items-center">
        <div className="lg:w-[60%] xl:pl-6">
          <motion.div
            className="flex flex-col items-center lg:items-start"
            ref={containerRef}
            animate={mainControls}
            initial="hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
          >
            <div className="relative md:mb-12">
              <div className="flex justify-center lg:justify-start">
                <div className="flex justify-center items-center gap-2 border-2 py-2 w-30 rounded-full animate-bounce mb-3 bg-[#e3f2ff]">
                  <GoNorthStar />
                  <span className="uppercase font-bold tracking-[2px] text-sm">
                    Hello!
                  </span>
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-2 text-center lg:text-left max-w-150">
                I'm Benjamin Batres, a Web Developer.
              </h2>
              <div className="absolute hidden md:block sm:left-[25%] lg:left-15 xl:left-14  xl:w-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 284 23"
                >
                  <path
                    d="M 3 3 L 280.663 3 C 269.449 3 258.349 3.9 247.279 4.764 C 221.349 6.787 195.529 8.92 169.786 11.556 C 151.278 13.451 132.755 15.328 114.19 17.061 C 113.357 17.139 90.773 19.35 90.951 19.635 C 91.634 20.727 116.442 19.025 118.838 18.968 C 135.096 18.578 151.406 18.638 167.64 18.014"
                    stroke="#08070e"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="transparent"
                    opacity="1"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="1px 1px"
                    will-change="auto"
                  ></path>
                </svg>
              </div>
            </div>
            <p className="text-xl xl:text-2xl text-center lg:text-left lg:max-w-lg mb-8">
              I'm a web developer focused on building modern, responsive, and
              user-friendly websites. <br className="hidden lg:block" />
              I'm a highly motivated software engineer with a strong passion for
              website development.
            </p>
            <Link
              href={"#projects"}
              className="py-[0.1em] px-1 w-[13em] h-[4.2em] rounded-[0.3em] border text-xs cursor-pointer"
            >
              <span className="relative flex justify-center items-center bottom-[0.4em] w-[8.25em] h-[2.5em] bg-Primary text-[1.5em] border shadow-[0_0.4em_0.1em_0.019em] hover:transition-all hover:duration-500 hover:translate-y-[0.4em] not:hover:transition-all not-hover:duration-400">
                See My Work
              </span>
            </Link>
          </motion.div>
        </div>
        <div className="lg:w-[40%]">
          <motion.div
            ref={containerRef}
            initial="hidden"
            animate={mainControls}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
          >
            <figure>
              <Image src={HeroImg} className="rounded-lg" alt="hero-img" />
            </figure>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
