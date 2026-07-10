"use client";
import React from "react";
// images
import RoyalBBQ from "../assets/Royal-BBQ-project.png";
import NeighborHoodPlumbing from "../assets/neighborhood-plumbing-co.png";
import LandscapingProject from "../assets/Landscaping-project.png";
import FirstChoiceAutoRepair from "../assets/first-choice-auto-repair.png";

import ProjectCard from "./ui/ProjectCard";
import SectionHeader from "./ui/SectionHeader";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Landscaping Website - Template",
      description:
        "A modern, responsive website template designed for lawn care, landscaping, and gardening businesses. This project focuses on clean design, strong visual hierarchy, and conversion-driven sections like services, testimonials, and contact forms.",
      image: LandscapingProject,
      link: "https://landscaping-website-template-ten.vercel.app/",
    },
    {
      title: "First Choice Auto Repair",
      description:
        "🚗 A modern, responsive landing page for a local auto & motorcycle repair workshop. Built with Next.js and Tailwind CSS to showcase clean UI components, service breakdowns, and optimized performance for client conversion. 🛠️",
      image: FirstChoiceAutoRepair,
      link: "https://first-choice-auto-repair-eta.vercel.app/",
    },
    {
      title: "Royal BBQ - Restaurant Template",
      description:
        "A modern, high-performance frontend template designed for premium restaurants, steakhouses, and BBQ joints.",
      image: RoyalBBQ,
      link: "https://royal-bbq-template.vercel.app/",
    },
    {
      title: "Neighborhood Plumbing Co.",
      description:
        "A modern, fully responsive business landing page for a local plumbing company. Built with React, Next.js, and Tailwind CSS, featuring smooth UI animations and a clean UX layout.",
      image: NeighborHoodPlumbing,
      link: "https://neighborhood-plumbing-co.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-30 px-7.5 border-b-2">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title={"My projects"}
          subTitle={"Check out some of my work!"}
        />

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
