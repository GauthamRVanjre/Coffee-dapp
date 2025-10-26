import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useCart } from '../context/CartContext';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const paymentSuccess = Math.random() > 0.3;

    if (paymentSuccess) {
      clearCart();
      navigate('/payment-success');
    } else {
      navigate('/payment-failure');
    }
  };

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08;
  const deliveryFee = 4.99;
  const total = subtotal + tax + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <Navbar />
        <div className="checkout-hero">
          <h1>Checkout</h1>
        </div>
        <div className="checkout-container">
          <div className="empty-checkout">
            <h2>Your cart is empty</h2>
            <p>Add items to your cart before checking out.</p>
            <button className="btn btn-primary" onClick={() => navigate('/menu')}>
              Browse Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Navbar />

      <div className="checkout-hero">
        <h1>Checkout</h1>
        <p>Complete your order</p>
      </div>

      <div className="checkout-container">
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-section">
            <h2>Contact Information</h2>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Delivery Address</h2>
            <div className="form-grid">
              <div className="form-field full-width">
                <label htmlFor="address">Street Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="zipCode">Zip Code</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h2>Payment Method</h2>
            <div className="payment-methods">
              <label className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>💳 Credit/Debit Card</span>
              </label>
              <label className={`payment-option ${paymentMethod === 'cash' ? 'active' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span>💵 Cash on Delivery</span>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <div className="form-grid">
                <div className="form-field full-width">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>
                <div className="form-field full-width">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            )}
          </div>

          <button type="submit" className="place-order-btn">
            Place Order - ${total.toFixed(2)}
          </button>
        </form>

        <div className="order-summary-sidebar">
          <h2>Order Summary</h2>

          <div className="summary-items">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-item">
                <div className="summary-item-info">
                  <span className="item-name">{item.name}</span>
                  <span className="item-qty">x{item.quantity}</span>
                </div>
                <span className="item-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="summary-divider"></div>

          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="summary-divider"></div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
