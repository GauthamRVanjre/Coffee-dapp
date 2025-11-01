import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Brew Haven</h1>
          <p className="hero-subtitle">Where Every Cup Tells a Story</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">
              Explore Menu
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn btn-secondary"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
