const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Our Coffee Journey</h2>
            <p className="section-description">
              At Brew Haven, we believe in the art of coffee. Our journey begins
              in the misty highlands of Ethiopia and Colombia, where we
              personally source the finest coffee beans from sustainable farms.
            </p>
            <p className="section-description">
              Each bean is carefully selected, ensuring only the highest quality
              makes it to your cup. Our master roasters craft small batches with
              precision, bringing out unique flavor profiles that celebrate the
              origin and terroir of each region.
            </p>
            <p className="section-description">
              From farm to cup, we maintain the highest standards of excellence,
              ensuring every sip delivers an unforgettable experience. Our
              commitment to quality, sustainability, and community drives
              everything we do.
            </p>
          </div>
          <div className="about-images">
            <img
              src="https://images.pexels.com/photos/4350061/pexels-photo-4350061.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Coffee beans"
              className="about-image"
            />
            <img
              src="https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Coffee preparation"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
