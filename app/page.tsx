"use client";
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutExperienceGrid } from "@/components/about-experience-grid"
import { ProjectsCertifications } from "@/components/projects-certifications"
import { TechStackBeyondCoding } from "@/components/tech-stack-beyond-coding"
import { RecommendationsSection } from "@/components/recommendations-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Chatbot from "@/components/chatbot"
import { MessageCircle, X } from "lucide-react";



export default function Home() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, duration: 800, easing: "ease-in-out-cubic" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-12 sm:py-16 max-w-4xl" data-aos="fade-in">
        <section className="space-y-12 sm:space-y-16">
          <HeroSection />
          <hr className="border-border/40" />
          <AboutExperienceGrid />
          <hr className="border-border/40" />
          <TechStackBeyondCoding />
          <hr className="border-border/40" />
          <ProjectsCertifications />
          <hr className="border-border/40" />
          <RecommendationsSection />
          <hr className="border-border/40" />
          <ContactSection />
        </section>
      </main>

      {/* Chat Button */}
      <button
        onClick={() => setShowChat((prev) => !prev)}
        className="group fixed bottom-8 right-8 z-40 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-blue-500/50 backdrop-blur-sm"
        aria-label={showChat ? "Close chat" : "Open chat"}
      >
        <div className="flex items-center gap-2">
          {showChat ? (
            <>
              <X size={18} />
              <span className="text-sm font-semibold">Close</span>
            </>
          ) : (
            <>
              <MessageCircle size={18} />
              <span className="text-sm font-semibold">Chat</span>
            </>
          )}
        </div>
        {!showChat && (
          <div className="absolute inset-0 rounded-full bg-blue-400/20 animate-pulse -z-10"></div>
        )}
      </button>

      {/* Chat Window */}
      {showChat && (
        <div className="fixed bottom-24 right-8 z-50 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <Chatbot onClose={() => setShowChat(false)} />
        </div>
      )}

      <Footer />
    </div>
  )
}
