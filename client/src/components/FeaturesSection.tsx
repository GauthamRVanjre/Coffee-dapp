import { features } from "../contants/constants";

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <div className="section-container">
        <h2 className="section-title">Why Choose Brew Haven</h2>
        <p className="section-subtitle">
          Experience coffee culture at its finest
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
