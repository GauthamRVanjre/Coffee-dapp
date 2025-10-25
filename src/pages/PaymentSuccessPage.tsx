import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/PaymentSuccessPage.css';

const PaymentSuccessPage = () => {
  useEffect(() => {
    const confettiDuration = 3000;
    const animationEnd = Date.now() + confettiDuration;

    const colors = ['#8D6E63', '#A1887F', '#D7CCC8', '#BCAAA4', '#5D4037'];

    function createConfetti() {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.querySelector('.success-container')?.appendChild(confetti);

      setTimeout(() => confetti.remove(), 5000);
    }

    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }
      createConfetti();
      createConfetti();
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="payment-success-page">
      <Navbar />

      <div className="success-container">
        <div className="success-content">
          <div className="success-icon">
            <svg viewBox="0 0 52 52" className="checkmark">
              <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
              <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
          </div>

          <h1>Payment Successful!</h1>
          <p className="success-message">
            Your order has been placed successfully. We're preparing your coffee with love!
          </p>

          <div className="order-details">
            <div className="detail-item">
              <span className="detail-label">Order Number</span>
              <span className="detail-value">#{Math.floor(Math.random() * 900000) + 100000}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Estimated Delivery</span>
              <span className="detail-value">30-45 minutes</span>
            </div>
          </div>

          <div className="success-actions">
            <Link to="/menu" className="btn btn-primary">Order More</Link>
            <Link to="/" className="btn btn-secondary">Back to Home</Link>
          </div>

          <div className="thank-you-message">
            <p>Thank you for choosing Brew Haven!</p>
            <p className="small-text">You'll receive a confirmation email shortly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
