import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FavoritesSection from "../components/FavoritesSection";
import FeaturesSection from "../components/FeaturesSection";
import EventsSection from "../components/EventsSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <FavoritesSection />

      <FeaturesSection />

      <EventsSection />

      <TeamSection />

      <Footer />
    </div>
  );
};

export default LandingPage;
