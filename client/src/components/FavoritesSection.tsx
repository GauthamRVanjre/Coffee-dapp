import { Link } from "react-router-dom";
import { favorites } from "../contants/constants";

const FavoritesSection = () => {
  return (
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
  );
};

export default FavoritesSection;
