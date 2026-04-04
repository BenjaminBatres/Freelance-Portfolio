// components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}
