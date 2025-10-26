import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import "../styles/CartPage.css";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useState } from "react";
import { parseEther } from "viem";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();
  const [ethAmount, setEthAmount] = useState<number>(0);
  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      const data = await res.json();
      setEthAmount(data.ethereum.usd);
    };
    fetchData();

    const priceInEth = total / ethAmount;
    const value = parseEther(priceInEth.toFixed(6));
    console.log("priceInEth", priceInEth);
    console.log("value", value);
  }, [total]);

  console.log("ethAmount", ethAmount);
  // useEffect(() => {
  //   const { data, error, isLoading } = useQuery({
  //     queryKey: ["buyCoffee"],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
  //       );
  //       return res.json();
  //     },
  //     refetchInterval: 5000,
  //   });
  //   const ethUsd = data.ethereum.usd;
  // }, [total]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const buyCoffee = async (total: number) => {
    // Convert $5 → ETH
    // const priceInEth = COFFEE_PRICE_USD / ethUsd;
    // const value = parseEther(priceInEth.toFixed(6)); // convert to wei
    // await buyCoffee("Cappuccino", value);
    // alert(`ETH Amount! ${ethUsd}`);
  };

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-hero">
        <h1>Your Cart</h1>
        <p>Review your selections</p>
      </div>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Add some delicious coffee to get started!</p>
            <Link to="/menu" className="btn btn-primary">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              <h2>Cart Items ({cartItems.length})</h2>

              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <span className="item-price">${item.price.toFixed(2)}</span>
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <div className="item-total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                className="checkout-btn"
                // onClick={() => navigate('/checkout')}
                onClick={() => buyCoffee(total)}
              >
                Proceed to Checkout
              </button>

              <Link to="/menu" className="continue-shopping">
                ← Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
