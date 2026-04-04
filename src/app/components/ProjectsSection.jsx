"use client";
import React, { useEffect, useRef } from "react";
import { GoNorthStar } from "react-icons/go";
// images
import SaveSpend from "../assets/Save-spend.png";
import Ecommerce from "../assets/e-commerce-project.png";
import SummaristProject from "../assets/Summarist-project.png";
import MarketProject from "../assets/Market-landing-project.png";
import ProjectCard from "./ui/ProjectCard";
// Framer motion
import * as motion from "motion/react-client";
import { useAnimation, useInView } from "motion/react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Save Spend",
      description:
        "A budgeting app that helps users track their expenses and manage their finances effectively.",
      image: SaveSpend,
      link: "https://save-spend.vercel.app/",
    },
    {
      title: "Designer E-commerce",
      description:
        "A budgeting app that helps users track their expenses and manage their finances effectively.",
      image: Ecommerce,
      link: "https://designer-product-e-commerce.vercel.app/",
    },
    {
      title: "Summarist",
      description:
        "A blockchain-based non-fungible token platform for digital art ownership.",
      image: SummaristProject,
      link: "https://ben-internship-v2.vercel.app/",
    },
    {
      title: "Market Analysis",
      description:
        "A data visualization tool for analyzing market trends and consumer behavior.",
      image: MarketProject,
      link: "https://marketing-landing-page-gamma.vercel.app/",
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
    <section id="projects" className="py-30 px-6 border-b-2">
      <div className="max-w-7xl mx-auto">
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
          <div className="flex justify-center mb-8">
            <h3 className="uppercase border-2 py-1 px-5 rounded-full flex items-center gap-2 font-medium bg-[#e3f2ff]">
              <GoNorthStar />
              My Projects
            </h3>
          </div>
          <h2 className="text-center font-bold text-5xl mb-8">
            Check out some of my work!
          </h2>
        </motion.div>
        
        {/* Add scroll animations */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
