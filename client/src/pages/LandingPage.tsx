import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const favorites = [
    {
      id: "1",
      name: "Caramel Macchiato",
      description:
        "Espresso with vanilla-flavored syrup, steamed milk, and caramel",
      price: 5.99,
      image:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "2",
      name: "Classic Cappuccino",
      description: "Espresso with steamed milk foam and a sprinkle of cocoa",
      price: 4.99,
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "3",
      name: "Cold Brew",
      description: "Smooth, refreshing cold-steeped coffee served over ice",
      price: 4.49,
      image:
        "https://images.pexels.com/photos/4790062/pexels-photo-4790062.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "4",
      name: "Vanilla Latte",
      description: "Rich espresso with vanilla syrup and velvety steamed milk",
      price: 5.49,
      image:
        "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const features = [
    {
      icon: "⚡",
      title: "Extra Caffeine Boost",
      description:
        "Premium blends with higher caffeine content for that extra energy",
    },
    {
      icon: "🥗",
      title: "Health-Conscious Options",
      description:
        "Organic, low-calorie, and plant-based alternatives available",
    },
    {
      icon: "📶",
      title: "Unlimited High-Speed WiFi",
      description: "Stay connected with our complimentary fiber-optic internet",
    },
    {
      icon: "🎵",
      title: "Live Music Events",
      description: "Weekly performances featuring local artists and musicians",
    },
  ];

  const events = [
    {
      title: "Coffee & Connections",
      description: "Professional networking sessions every Tuesday evening",
      image:
        "https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Coffee Date Nights",
      description:
        "Special romantic ambiance with live acoustic music on Fridays",
      image:
        "https://images.pexels.com/photos/1024359/pexels-photo-1024359.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Cultural Evenings",
      description:
        "Experience diverse cultures through coffee and performances",
      image:
        "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Local Talent Showcase",
      description: "Monthly open mic nights featuring community artists",
      image:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const team = [
    {
      name: "Elena Rodriguez",
      role: "Head Barista",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "15 years of coffee expertise",
    },
    {
      name: "Marcus Chen",
      role: "Coffee Roaster",
      image:
        "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Master of artisan roasting",
    },
    {
      name: "Sofia Martinez",
      role: "Pastry Chef",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Creating sweet perfection daily",
    },
    {
      name: "James Wilson",
      role: "Café Manager",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Ensuring your perfect experience",
    },
  ];

  return (
    <div className="landing-page">
      <Navbar />

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

      <section id="about" className="about-section">
        <div className="section-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">Our Coffee Journey</h2>
              <p className="section-description">
                At Brew Haven, we believe in the art of coffee. Our journey
                begins in the misty highlands of Ethiopia and Colombia, where we
                personally source the finest coffee beans from sustainable
                farms.
              </p>
              <p className="section-description">
                Each bean is carefully selected, ensuring only the highest
                quality makes it to your cup. Our master roasters craft small
                batches with precision, bringing out unique flavor profiles that
                celebrate the origin and terroir of each region.
              </p>
              <p className="section-description">
                From farm to cup, we maintain the highest standards of
                excellence, ensuring every sip delivers an unforgettable
                experience. Our commitment to quality, sustainability, and
                community drives everything we do.
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

      <section id="favorites" className="favorites-section">
        <div className="section-container">
          <h2 className="section-title">Customer Favorites</h2>
          <p className="section-subtitle">
            Discover what keeps our community coming back
          </p>

          <div className="favorites-grid">
            {favorites.map((item) => (
              <div key={item.id} className="favorite-card">
                <div className="favorite-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="favorite-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <div className="favorite-footer">
                    <span className="price">${item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/menu" className="btn btn-primary">
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

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

      <section id="events" className="events-section">
        <div className="section-container">
          <h2 className="section-title">Café Events</h2>
          <p className="section-subtitle">
            Join our vibrant community gatherings
          </p>

          <div className="events-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="membership-section">
        <div className="section-container">
          <h2 className="section-title">Brew Haven Membership</h2>
          <p className="section-subtitle">
            Unlock exclusive benefits and rewards
          </p>

          <div className="membership-content">
            <div className="membership-card">
              <div className="membership-icon">🌟</div>
              <h3>Premium Perks</h3>
              <ul>
                <li>15% discount on all coffee drinks</li>
                <li>20% off student special with valid ID</li>
                <li>Early access to new coffee tastings</li>
                <li>Digital loyalty program with rewards</li>
                <li>Exclusive member-only events</li>
                <li>Corporate team discounts available</li>
                <li>Student-focused study space priority</li>
                <li>Birthday month special treats</li>
              </ul>
              <button className="btn btn-primary">Join Now</button>
            </div>

            <div className="membership-image">
              <img
                src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Membership benefits"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="team-section">
        <div className="section-container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            The passionate people behind your perfect cup
          </p>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default LandingPage;
