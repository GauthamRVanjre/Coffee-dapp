const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Brew Haven</h4>
            <p>Crafting exceptional coffee experiences since 2010</p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Monday - Friday: 7am - 9pm</p>
            <p>Saturday - Sunday: 8am - 10pm</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>123 Coffee Street</p>
            <p>info@brewhaven.com</p>
            <p>(555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
