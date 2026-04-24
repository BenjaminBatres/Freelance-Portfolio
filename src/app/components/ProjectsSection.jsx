"use client";
import React from "react";
// images
import SaveSpend from "../assets/Save-spend.png";
import Ecommerce from "../assets/e-commerce-project.png";
import LandscapingProject from "../assets/Landscaping-project.png";
import ThePartyPlanner from "../assets/ThePartyPlanner-project.png";

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
      title: "ThePartyPlanner - Template",
      description:
        "A Party planner template project. With About, services, and contacts pages",
      image: ThePartyPlanner,
      link: "https://the-party-planner-template.vercel.app/",
    },
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
        "An e-commerce UI for adding clothing products to your cart.",
      image: Ecommerce,
      link: "https://designer-product-e-commerce.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-30 px-6 border-b-2">
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
