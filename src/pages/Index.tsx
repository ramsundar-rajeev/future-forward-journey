import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AspirationsSection from "@/components/AspirationsSection";
import HobbiesSection from "@/components/HobbiesSection";
import EducationSection from "@/components/EducationSection";
import CurrentFocusSection from "@/components/CurrentFocusSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AspirationsSection />
      <HobbiesSection />
      <EducationSection />
      <CurrentFocusSection />
      <Footer />
    </div>
  );
};

export default Index;
