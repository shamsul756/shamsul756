"use client";

import { useState } from "react";

import Navbar from "./components/ui/Navbar";
import Hero from "./components/ui/Hero";
import Footer from "./components/ui/Footer";
import AboutSection from "./About/page";
import EducationSection from "./Education/page";
import SkillsSection from "./Skills/page";
import ProjectSection from "./Projects/page";


export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans scroll-smooth">
      
     
<Navbar/>    
<Hero/>
<AboutSection/>
<SkillsSection/>
<EducationSection/>
<ProjectSection/>
<Footer/>
    </div>
  );
}