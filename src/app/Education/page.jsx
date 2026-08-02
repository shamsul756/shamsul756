"use client";

import Image from "next/image";
import React from "react";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

export default function EducationSection() {
  const educationData = [
    {
      degree: "B.Sc. in Management Information Systems (MIS)",
      institution: "Noakhali Science and Technology University (NSTU)",
      location: "Noakhali, Bangladesh",
      period: "Present / Ongoing",
      result: "CGPA 3.54+",
      description:
        "NSTU is a premier public university in Bangladesh known for technological innovation. The MIS department bridges technology and business strategy, covering modern web systems, database design, software development, and analytical problem-solving.",
      image: "/nstu.png",
      status: "Currently Studying",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sylhet Govt. College",
      location: "Sylhet, Bangladesh",
      period: "Completed",
      result: "GPA 4.69",
      description:
        "Established as one of the most prestigious educational landmarks in Sylhet, Sylhet Govt. College provides rigorous academic training in science and general disciplines, cultivating critical thinking and strong fundamentals.",
      image: "/college.png",
      status: "Completed",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Hazrat Shahparan (R.) High School",
      location: "Sylhet, Bangladesh",
      period: "Completed",
      result: "GPA 4.17",
      description:
        "Named after the historic Sufi saint of Sylhet, this institution built the foundational base for analytical thinking, basic science, and discipline throughout my primary secondary education.",
      image: "/school.png",
      status: "Completed",
    },
  ];

  return (
    <>
    <Navbar/>
    <section id="education" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium">
          <GraduationCap size={16} />
          Academic Background
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          My <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Educational Journey</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg">
          A overview of my academic achievements and the institutions that shaped my technical and strategic skills.
        </p>
      </div>

      {/* Education Cards */}
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-cyan-400/40 transition-all duration-300 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              
              {/* Institution Image Container */}
              <div className="relative w-full lg:w-48 h-48 rounded-2xl overflow-hidden border border-white/10 bg-white/5 shrink-0">
                <Image
                  src={item.image}
                  alt={`${item.institution} logo/campus`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 192px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Institution Info */}
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                    {item.status}
                  </span>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold">
                    <Award size={14} className="text-indigo-400" />
                    <span>{item.result}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.degree}
                </h3>

                <h4 className="text-lg font-medium text-slate-200">
                  {item.institution}
                </h4>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} className="text-cyan-400" />
                    {item.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} className="text-cyan-400" />
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl pt-1">
                  {item.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
    
    </>
  );
}