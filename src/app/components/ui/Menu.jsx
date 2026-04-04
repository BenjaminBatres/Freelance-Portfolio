"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";

import { RiCloseLargeLine } from "react-icons/ri";

export default function Menu({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      {isOpen ? (
        <RiCloseLargeLine
          className="text-3xl sm:text-4xl md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <HiOutlineMenu
          className="text-3xl sm:text-4xl md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      <div
        ref={ref}
        className={`fixed md:hidden left-0 transition-all top-30 duration-400 w-full h-screen bg-[#08070e]/55 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <div className="bg-[#fbf8ff] w-[95%] sm:max-w-175 mx-auto md:w-full px-7.5 py-5 rounded-b-md">
          <ul className="space-y-5">
            {links.map((link, id) => (
              <li key={id}>
                <Link
                onClick={() => setIsOpen(false)}
                  href={link.path}
                  className="text-black font-medium text-lg hover:text-[#8e83ed] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
