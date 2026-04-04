"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";
export default function Footer() {
  const links = [
    {
      path: "#about",
      name: "About",
    },
    {
      path: "#projects",
      name: "Projects",
    },
    {
      path: "#contact",
      name: "Contact",
    },
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <footer className="pb-20 px-6">
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
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col items-center md:flex-row justify-between mb-5 gap-6">
          <h2 className="text-2xl/7 sm:text-4xl/7 font-bold text-center md:text-left">
            Benjamin Batres <br />
            <span className="font-thin text-base tracking-[2px]">
              Web Developer
            </span>
          </h2>
          <ul className="flex gap-9">
            {links.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.path}
                  className="font-medium tracking-[2px] text-[17px] hover:text-[#8e83ed] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="font-light text-lg text-center md:text-left">
          © 2026 Benjamin Batres. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
