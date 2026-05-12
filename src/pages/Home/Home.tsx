import {
  Box
} from "@mui/material";


import { useEffect, useState } from "react";
import ProfileSummary from "../../components/layout/ProfileSummary";
import Skills from "../../components/layout/Skills";
import Experience from "../../components/layout/Experience";
import Projects from "../../components/layout/Projects";
import Cta from "../../components/layout/Cta";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";




const Home = () => {

    const [activeSection, setActiveSection] =
  useState("home");


  const scrollToSection = (
  sectionId: string
) => {
    setActiveSection(sectionId)
  document
    .getElementById(sectionId)
    ?.scrollIntoView({
      behavior: "smooth",
    });
};

useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "skills", "experience","projects", "contact"];

    sections.forEach((id) => {
      const section:any = document.getElementById(id);

      if (
        window.scrollY >= section.offsetTop - 200 &&
        window.scrollY < section.offsetTop + section.offsetHeight - 200
      ) {
        setActiveSection(id);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

 return (
    <Box sx={{ bgcolor: "#f5f7fb" }}>
      {/* ================= NAVBAR ================= */}

      <Navbar scrollToSection={scrollToSection} activeSection={activeSection}></Navbar>

      {/* ================= HERO ================= */}
 <section id="home">
    <ProfileSummary scrollToSection={scrollToSection}></ProfileSummary>
 </section>
      

      {/* ================= TECH STACK ================= */}

     <section id="skills">
    <Skills></Skills>
    </section>

      {/* ================= EXPERIENCE + LEARNING ================= */}

      <section id="experience">
    <Experience></Experience>
    </section>

     

      {/* ================= PROJECTS ================= */}

<section id="projects">
    <Projects></Projects>
    </section>

    

      {/* ================= CTA SECTION ================= */}

      <section id="contact">
   <Cta></Cta>
     {/* ================= Footer SECTION ================= */}
   <Footer scrollToSection={scrollToSection}></Footer>
    </section>

      
    
       
      
  



    </Box>
  );
};

export default Home;