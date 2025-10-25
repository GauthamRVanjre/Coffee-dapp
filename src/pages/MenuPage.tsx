import { useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { CoffeeItem } from "../types";
import "../styles/MenuPage.css";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart, cartItems } = useCart();

  const categories = [
    { id: "all", name: "All" },
    { id: "espresso", name: "Espresso" },
    { id: "milk", name: "Milk Coffees" },
    { id: "cream", name: "Cream Coffees" },
    { id: "cold", name: "Cold Brew" },
    { id: "arabica", name: "Arabica Specials" },
    { id: "snacks", name: "Snacks & Beverages" },
  ];

  const menuItems: CoffeeItem[] = [
    {
      id: "1",
      name: "Classic Espresso",
      description: "Pure, intense shot of premium espresso",
      price: 3.49,
      category: "espresso",
      image:
        "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "2",
      name: "Double Espresso",
      description: "Two shots of bold espresso for extra energy",
      price: 4.49,
      category: "espresso",
      image:
        "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "3",
      name: "Americano",
      description: "Espresso with hot water, smooth and strong",
      price: 3.99,
      category: "espresso",
      image:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "4",
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: 4.99,
      category: "milk",
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "5",
      name: "Caffe Latte",
      description: "Rich espresso with steamed milk",
      price: 5.49,
      category: "milk",
      image:
        "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "6",
      name: "Vanilla Latte",
      description: "Smooth latte with vanilla syrup",
      price: 5.99,
      category: "milk",
      image:
        "https://images.pexels.com/photos/4790062/pexels-photo-4790062.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "7",
      name: "Caramel Macchiato",
      description: "Espresso with vanilla, steamed milk, and caramel",
      price: 6.49,
      category: "milk",
      image:
        "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "8",
      name: "Flat White",
      description: "Velvety microfoam over espresso",
      price: 5.29,
      category: "milk",
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "9",
      name: "Mocha",
      description: "Chocolate and espresso with steamed milk",
      price: 5.99,
      category: "cream",
      image:
        "https://images.pexels.com/photos/373639/pexels-photo-373639.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "10",
      name: "White Chocolate Mocha",
      description: "White chocolate, espresso, and whipped cream",
      price: 6.49,
      category: "cream",
      image:
        "https://images.pexels.com/photos/2183027/pexels-photo-2183027.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "11",
      name: "Hazelnut Cream Coffee",
      description: "Rich hazelnut flavor with cream",
      price: 6.29,
      category: "cream",
      image:
        "https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "12",
      name: "Cold Brew",
      description: "Smooth, refreshing cold-steeped coffee",
      price: 4.49,
      category: "cold",
      image:
        "https://images.pexels.com/photos/4790062/pexels-photo-4790062.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "13",
      name: "Iced Latte",
      description: "Chilled espresso with cold milk",
      price: 5.49,
      category: "cold",
      image:
        "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "14",
      name: "Nitro Cold Brew",
      description: "Cold brew infused with nitrogen",
      price: 5.99,
      category: "cold",
      image:
        "https://images.pexels.com/photos/4790062/pexels-photo-4790062.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "15",
      name: "Ethiopian Arabica",
      description: "Fruity notes with floral aroma",
      price: 6.99,
      category: "arabica",
      image:
        "https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "16",
      name: "Colombian Arabica",
      description: "Rich, balanced with nutty undertones",
      price: 6.49,
      category: "arabica",
      image:
        "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "17",
      name: "Brazilian Arabica",
      description: "Smooth, chocolatey with low acidity",
      price: 6.29,
      category: "arabica",
      image:
        "https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "18",
      name: "Croissant",
      description: "Buttery, flaky French pastry",
      price: 3.99,
      category: "snacks",
      image:
        "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "19",
      name: "Blueberry Muffin",
      description: "Fresh baked with real blueberries",
      price: 4.49,
      category: "snacks",
      image:
        "https://images.pexels.com/photos/2135677/pexels-photo-2135677.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "20",
      name: "Fresh Orange Juice",
      description: "Freshly squeezed, 100% pure",
      price: 4.99,
      category: "snacks",
      image:
        "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item: CoffeeItem) => {
    addToCart(item);
  };

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <h1>Our Menu</h1>
        <p>Explore our artisan coffee selection</p>
      </div>

      <div className="menu-container">
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${
                selectedCategory === category.id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="menu-card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="menu-card-footer">
                  <span className="menu-price">${item.price.toFixed(2)}</span>
                  {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                    <div className="quantity-control">
                      <span>Added</span>
                    </div>
                  ) : (
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="empty-state">
            <p>No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
