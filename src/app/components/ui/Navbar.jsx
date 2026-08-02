"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FiHome, FiUser, FiMail } from "react-icons/fi";
import { Code2, GraduationCap, FolderGit2 } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: <FiHome size={18} /> },
    { name: "About", href: "/About", icon: <FiUser size={18} /> },
    { name: "Skills", href: "/Skills", icon: <Code2 size={18} /> },
    { name: "Education", href: "/Education", icon: <GraduationCap size={18} /> },
    { name: "Projects", href: "/Projects", icon: <FolderGit2 size={18} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/70 border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-black tracking-wide bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition"
        >
          Shamsul<span className="text-white">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-all duration-300"
            >
              {item.icon}
              <span>{item.name}</span>
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Hire Me Button (desktop only) */}
        <Link
          href="/Contact"
          className="hidden lg:flex items-center gap-2 bg-slate-900 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all duration-300 px-6 py-2 font-semibold rounded-xl"
        >
          <Code2 size={18} />
          Hire Me
        </Link>

        {/* Hamburger Icon (mobile only) */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          className="lg:hidden relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/40 transition-colors duration-300"
        >
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 origin-center ${
                mobileMenuOpen ? "translate-y-[7px] rotate-45 bg-cyan-400" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-white transition-all duration-300 origin-center ${
                mobileMenuOpen ? "-translate-y-[7px] -rotate-45 bg-cyan-400" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl p-5 space-y-2">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{ transitionDelay: mobileMenuOpen ? `${i * 40}ms` : "0ms" }}
              className={`flex items-center gap-4 rounded-xl p-4 text-slate-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-500 hover:text-white transition-all duration-300 ${
                mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
            >
              {item.icon}
              {item.name}
            </a>
          ))}

          <Link
            as="a"
            href="/contact"
            radius="full"
            variant="bordered"
            startContent={<FiMail />}
            className="w-full border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300 px-7 py-6"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </nav>
  );
}