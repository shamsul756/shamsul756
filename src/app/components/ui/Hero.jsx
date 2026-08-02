"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-14 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl -z-10" />

      {/* Left: Text content */}
      <div className="flex-1 space-y-6 text-center md:text-left [animation:fade-in-up_0.8s_ease-out_both]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium">
          <Sparkles size={14} />
          Available for freelance work
        </div>

        {/* Greeting */}
        <p className="text-slate-400 text-lg">
          Hi, I&apos;m <span className="text-white font-semibold">Shamsul Islam</span> 👋
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
          I build{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Frontend
          </span>{" "}
          experiences that feel right.
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
          Passionate about creating elegant, accessible, and performance-driven
          web applications. I turn ideas into seamless digital experiences
          with clean code and thoughtful design.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-2">
          <Link
            href="/Contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
          >
            Hire Me
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>

          <a
            href="https://drive.google.com/file/d/145R2oUAn0yx8q1TW-p8JwaGdNEDepbxH/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/5 text-slate-200 font-semibold hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex justify-center md:justify-end [animation:fade-in_1s_ease-out_0.2s_both]">
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
          {/* Gradient ring behind image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-cyan-400 to-purple-500 blur-2xl opacity-30 [animation:pulse-slow_3s_ease-in-out_infinite]" />

          {/* Image container */}
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <Image
              src="/hero.png"
              alt="Shamsul Islam - Frontend Developer"
              fill
              priority
              sizes="(max-width: 768px) 288px, 384px"
              className="object-cover"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -left-4 sm:-left-6 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 shadow-xl [animation:float_3s_ease-in-out_infinite]">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-white font-medium whitespace-nowrap">
              Open to work
            </span>
          </div>
        </div>
      </div>

      {/* Global keyframe definitions for Next.js App Router compatibility */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 2;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}