"use client";

import Image from "next/image";
import { GraduationCap, Code2, Heart, Calendar } from "lucide-react";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

export default function AboutSection() {
  const highlights = [
    {
      icon: <GraduationCap size={20} />,
      label: "Studying",
      value: "Management Information System",
      sub: "Noakhali Science & Technology University",
    },
    {
      icon: <Calendar size={20} />,
      label: "Journey started",
      value: "2023",
      sub: "Began learning web development",
    },
  ];

  return (
    <>
    <Navbar/>
    <section
      id="about"
      className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      {/* Section heading */}
      <div className="text-center mb-16 space-y-3">
        <p className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
          Get To Know Me
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
          About{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-12 items-center">
        {/* Left: Image */}
        <div className="md:col-span-2 flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            {/* Gradient ring behind image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 blur-2xl opacity-25" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <Image
                src="/education.png"
                alt="Shamsul Islam - Education"
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-4 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl">
              <Code2 size={16} className="text-cyan-400" />
              <span className="text-sm text-white font-medium whitespace-nowrap">
                Since 2023
              </span>
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="md:col-span-3 space-y-6 text-center md:text-left">
          <p className="text-lg text-slate-300 leading-relaxed">
            I&apos;m{" "}
            <span className="text-white font-semibold">Shamsul</span>, a
            student at{" "}
            <span className="text-cyan-400 font-medium">
              Noakhali Science and Technology University
            </span>
            , studying in the{" "}
            <span className="text-white font-medium">
              Management Information System
            </span>{" "}
            department.
          </p>

          <p className="text-slate-400 leading-relaxed">
            I started my web development journey in{" "}
            <span className="text-white font-medium">2023</span>, driven by
            pure curiosity about this field. What keeps me hooked is the
            feeling I get when I complete a project that actually helps
            someone — like building a site for a local band and watching it
            come to life.
          </p>

          {/* Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500">{item.label}</p>
                  <p className="text-white font-semibold text-sm">
                    {item.value}
                  </p>
                  <p className="text-xs text-slate-400">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Passion tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
            <Heart size={14} className="text-pink-400" />
            Passionate about clean code & real-world impact
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
}