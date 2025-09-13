"use client";
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutExperienceGrid } from "@/components/about-experience-grid"
import { TechStackBeyondCoding } from "@/components/tech-stack-beyond-coding"
import { ProjectsCertifications } from "@/components/projects-certifications"
import { RecommendationsSection } from "@/components/recommendations-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Chatbot from "@/components/chatbot"
import { FaRocketchat } from "react-icons/fa";



export default function Home() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl min-h-screen" data-aos="zoom-in">
        <HeroSection />
        <AboutExperienceGrid />
        <TechStackBeyondCoding />
        <ProjectsCertifications />
        <RecommendationsSection />
        <ContactSection />
      </main>
      <button
        className="flex items-center gap-2 fixed bottom-8 right-8 z-50 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => setShowChat((prev) => !prev)}
      >
        {showChat ? <><FaRocketchat /> Close Chat</> : <><FaRocketchat /> Chat with Cielo</>}
      </button>
      {showChat && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-auto sm:right-8 z-50">
          <Chatbot onClose={() => setShowChat(false)} />
        </div>
      )}
      <Footer />
    </div>
  )
}
