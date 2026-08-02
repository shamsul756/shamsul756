"use client";

import React from "react";
import Link from "next/link";
import { 
  ExternalLink, 
  FolderGit2, 
  Utensils, 
  Car, 
  Scale, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";

export default function ProjectSection() {
  const projects = [
    {
      id: "hassle-to-hansle",
      title: "Hassle to Hansle",
      subtitle: "Food & Restaurant Management Platform",
      description:
        "A feature-rich restaurant application where users can browse menus, place food orders, update or cancel meal orders, and track order status in real time.",
      link: "https://hassle-to-hansle.vercel.app/",
      status: "In Active Development",
      category: "Restaurant & E-commerce",
      icon: <Utensils className="text-amber-400" size={24} />,
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"],
      features: [
        "Interactive Food Menu",
        "Order Creation & Real-Time Updates",
        "Order Cancellation & Meal Customization",
      ],
    },
    {
      id: "car-reservation",
      title: "DriveEase",
      subtitle: "Car Reservation & Fleet Listing App",
      description:
        "A seamless vehicle reservation platform allowing users to browse available cars, list their own vehicles, and directly communicate with car owners.",
      link: "https://carreservationclient-65mtzryu0-shamsul756s-projects.vercel.app/",
      status: "Live Project",
      category: "Automotive & Rental",
      icon: <Car className="text-cyan-400" size={24} />,
      gradient: "from-cyan-500/20 via-indigo-500/10 to-transparent",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      techStack: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
      features: [
        "In-Stock Car Inventory Search",
        "User Vehicle Listing & Customization",
        "Direct Messaging / Contact with Owners",
      ],
    },
    {
      id: "legal-ease",
      title: "LegalEase",
      subtitle: "Legal Services Directory & Consultation Hub",
      description:
        "A platform connecting clients directly with specialized lawyers. Includes detailed lawyer profiles, legal blogs, and a management admin dashboard.",
      link: "https://legal-ease-main.vercel.app",
      status: "Live Project",
      category: "Legal Tech & Publishing",
      icon: <Scale className="text-purple-400" size={24} />,
      gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
      features: [
        "Lawyer Directory & Profile Viewer",
        "Legal Knowledge & Blog Section",
        "Dedicated Admin Panel",
      ],
    },
    {
      id: "study-corner",
      title: "StudyCorner",
      subtitle: "Library & Study Space Reservation System",
      description:
        "An educational library platform designed for students to reserve study corners, book favorite titles, and inspect detailed reading room layouts.",
      link: "https://study-phi-coral.vercel.app",
      status: "Live Project",
      category: "EdTech & Management",
      icon: <BookOpen className="text-emerald-400" size={24} />,
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      features: [
        "Favorite Book & Room Reservations",
        "Detailed Study Corner Previews",
        "Student Seat Allocation System",
      ],
    },
  ];

  return (
    <>
    <Navbar/>
    <section id="projects" className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium">
          <FolderGit2 size={16} />
          Featured Work
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Crafted with <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">Purpose & Code</span>
        </h2>
        <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
          A selection of full-stack and frontend web applications I've engineered—ranging from real-time food ordering systems to legal and educational platforms.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-7 sm:p-8 hover:border-cyan-400/40 transition-all duration-300 shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Top Hover Gradient Layer */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

            <div className="space-y-6">
              {/* Card Header: Category & Status */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${project.badgeColor}`}>
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              </div>

              {/* Title & Icon Header */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 shrink-0 group-hover:scale-110 transition-transform">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-medium pt-0.5">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Key Features:</span>
                <ul className="space-y-1.5">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-slate-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions CTA */}
            <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </Link>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-400 hover:text-white text-xs font-medium transition-colors"
              >
                <span>Inspect URL</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Banner */}
      <div className="mt-16 text-center bg-slate-900/40 border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto space-y-3">
        <Sparkles className="mx-auto text-cyan-400" size={24} />
        <h4 className="text-lg font-bold text-white">Have a project idea in mind?</h4>
        <p className="text-slate-400 text-sm">
          I'm open to freelance work and full-time opportunities. Let's build something exceptional together!
        </p>
      </div>
    </section>
    
    </>
  );
}