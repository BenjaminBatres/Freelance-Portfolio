import Image from "next/image";
import Link from "next/link";
import { LuCircleArrowRight } from "react-icons/lu";
import * as motion from "motion/react-client";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: 0.7, duration: 0.7 }}
    >
      <Link href={project.link} target="_blank">
        <Image
          src={project.image}
          alt="project"
          className="rounded-2xl mb-8 border-2 border-[#08070e] "
        />
      </Link>

      <h2 className="text-2xl font-medium mb-3">{project.title}</h2>
      <p className="text-lg font-light mb-3">{project.description}</p>
      <Link
        href={project.link}
        target="_blank"
        className="flex items-center gap-2 text-xl transition-colors duration-300 hover:text-[#8e83ed] w-fit"
      >
        View Project
        <LuCircleArrowRight />
      </Link>
    </motion.div>
  );
}
