import React from "react";
import Link from "next/link";
import Menu from "./ui/Menu";

export default function Navbar() {
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
      path: "#pricing",
      name: "Pricing",
    },
    {
      path: "#contact",
      name: "Contact",
    },
  ];
  return (
    <div className="h-30 relative">
      <nav className="h-30 fixed -translate-x-[50%] left-[50%] flex items-center justify-between w-full bg-Primary z-10 border-b-2">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 ">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold">Benjamin Batres</h1>
            <p className="font-thin tracking-[2px]">Web Developer</p>
          </div>

          <ul className="hidden md:flex gap-9">
            {links.map((link, id) => (
              <li key={id}>
                <Link
                  href={`${link.path}`}
                  className="font-medium tracking-[2px] text-[17px] hover:text-[#8e83ed] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <Menu links={links} />
        </div>
      </nav>
    </div>
  );
}
