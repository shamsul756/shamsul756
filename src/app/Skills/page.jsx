"use client";

import React from "react";
import { 
  Code2, 
  Layers, 
  Database, 
  Layout, 
  Terminal, 
  Globe, 
  Utensils, 
  Briefcase, 
  Sparkles,
  Rocket
} from "lucide-react";

import Navbar from "../components/ui/Navbar";

export default function SkillsSection() {
  const learningStartYear = 2023;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - learningStartYear;

  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: <Layout className="text-cyan-400" size={22} />,
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "HTML5 & CSS3", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" },
      ],
    },
    {
      title: "Backend & Database",
      icon: <Database className="text-indigo-400" size={22} />,
      skills: [
        { name: "Node.js", level: "Intermediate" },
        { name: "Express.js", level: "Intermediate" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Dotenv / Config", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Methodologies",
      icon: <Terminal className="text-purple-400" size={22} />,
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Component Architecture", level: "Advanced" },
        { name: "Responsive Web Design", level: "Expert" },
        { name: "Performance Optimization", level: "Intermediate" },
      ],
    },
  ];

  const projectTypes = [
    {
      title: "Multidimensional Websites",
      description: "Complex, multi-page platforms featuring dynamic state management, rich animations, and responsive UI/UX.",
      icon: <Globe className="text-cyan-400" size={20} />,
    },
    {
      title: "Restaurant & Food Platforms",
      description: "Interactive ordering systems, menu showcases, booking platforms, and customized local business web apps.",
      icon: <Utensils className="text-emerald-400" size={20} />,
    },
    {
      title: "Developer Portfolios & Dashboards",
      description: "High-performance, visual-first portfolios, personal sites, and data-driven client dashboards.",
      icon: <Briefcase className="text-purple-400" size={20} />,
    },
  ];

  return (
    <>
    <Navbar/>
    <section id="skills" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium">
          <Code2 size={16} />
          Technical Stack
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Skills & <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Capabilities</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          I started my web development journey in <strong className="text-white">{learningStartYear}</strong> and remain a dedicated, continuous learner. I specialize in building modern MERN-stack applications with clean code and intuitive user interfaces.
        </p>

        {/* Experience Counter Badge */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-slate-900/80 border border-white/10 shadow-xl text-slate-300 text-sm">
            <Sparkles size={16} className="text-cyan-400" />
            <span><strong className="text-white font-semibold">{experienceYears}+ Years</strong> of continuous learning & building</span>
          </div>
        </div>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="group bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-cyan-400/40 transition-all duration-300 shadow-2xl space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>

            <div className="space-y-3">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <span className="text-slate-200 font-medium text-sm">{skill.name}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* What I Build Section */}
      <div className="bg-slate-900/40 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Specialization</span>
            <h3 className="text-2xl font-bold text-white">What I Build & Deliver</h3>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Rocket size={14} className="text-indigo-400" /> Custom Web Solutions
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectTypes.map((type, pIdx) => (
            <div
              key={pIdx}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-400/30 transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                {type.icon}
              </div>
              <h4 className="text-lg font-bold text-white">{type.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   
    </>
  );
}