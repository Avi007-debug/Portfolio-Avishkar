import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InteractiveBackground from "@/components/InteractiveBackground";
import CustomCursor from "@/components/CustomCursor";
import SectionIndex from "@/components/SectionIndex";
import SplashScreen from "@/components/SplashScreen";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackVisualization from "@/components/TechStackVisualization";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import GitHubCalendarSection from "@/components/GitHubCalendarSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CyberMarquee from "@/components/CyberMarquee";

export const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-accent/20 selection:text-foreground">
      {/* High-Tech Cyber Bootloader & Landing Page Animation */}
      <SplashScreen />

      {/* Background Interactive Constellation */}
      <InteractiveBackground />

      {/* Cyber Precision Custom Cursor */}
      <CustomCursor />

      {/* Persistent Floating Dossier Section Index */}
      <SectionIndex />

      {/* Main Header Navigation */}
      <Navbar />

      {/* Main Content Flow: Experience before Projects */}
      <main id="main-content" tabIndex={-1}>
        {/* 01 // Identity & Signature Hero Animation */}
        <HeroSection />

        {/* Cyber Industrial Marquee Ticker */}
        <CyberMarquee />

        {/* 02 // Engineering Dossier & Core Focus */}
        <AboutSection />

        {/* 03 // Academic Trajectory & Exam Standings */}
        <EducationSection />

        {/* 04 // Experience & Technical Leadership */}
        <ExperienceSection />

        {/* 05 // Curated Engineering Archive (Projects) */}
        <ProjectsSection />

        {/* 06 // Capabilities Radar & System Graph */}
        <TechStackVisualization />

        {/* 07 // Verified Industry Credentials */}
        <CertificationsSection />

        {/* Recognitions & Honors */}
        <AchievementsSection />

        {/* Telemetry & Contribution Graph */}
        <GitHubCalendarSection />

        {/* 08 // Direct Communication */}
        <ContactSection />
      </main>

      {/* Minimal Dossier Footer */}
      <Footer />
    </div>
  );
};

export default Index;
