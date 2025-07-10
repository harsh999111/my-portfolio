"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="px-6 py-4">
      <div className="sticky top-0 z-50 bg-white text-black rounded-3xl shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          <Link href="/" className="text-lg font-semibold">Hey&apos;there</Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-x-6 text-sm font-medium lg:text-xl">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="cursor-pointer hover:text-orange-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0  z-40 bg-white text-black flex flex-col p-12 py-24 gap-y-2  text-xl lg:text-2xl font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={closeMenu}
              className="hover:text-yellow-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
