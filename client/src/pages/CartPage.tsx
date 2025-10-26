import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

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
            <Link to="/menu" className="btn btn-primary">Browse Menu</Link>
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
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
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
                onClick={() => navigate('/checkout')}
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
