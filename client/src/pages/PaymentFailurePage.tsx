import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/PaymentFailurePage.css";

const PaymentFailurePage = () => {
  const navigate = useNavigate();

  const handleTryAgain = () => {
    navigate("/checkout");
  };

  const handleBackToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="payment-failure-page">
      <Navbar />

      <div className="failure-container">
        <div className="failure-content">
          <div className="failure-icon">
            <svg viewBox="0 0 52 52" className="cross">
              <circle
                className="cross-circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="cross-line cross-line-1"
                fill="none"
                d="M16 16 l20 20"
              />
              <path
                className="cross-line cross-line-2"
                fill="none"
                d="M16 36 l20 -20"
              />
            </svg>
          </div>

          <h1>Payment Failed</h1>
          <p className="failure-message">
            We couldn't process your payment. This could be due to insufficient
            funds, or a network issue.
          </p>

          <div className="failure-reasons">
            <h3>Common reasons for payment failure:</h3>
            <ul>
              <li>Insufficient funds in your account</li>
              <li>Network or connection issues</li>
            </ul>
          </div>

          <div className="failure-actions">
            <button onClick={handleTryAgain} className="btn btn-primary">
              Try Again
            </button>
            <button onClick={handleBackToCart} className="btn btn-secondary">
              Back to Cart
            </button>
          </div>

          <div className="help-message">
            <p>Need help? Contact our support team</p>
            <p className="contact-info">
              <span>Email: support@brewhaven.com</span>
              <span>Phone: (555) 123-4567</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailurePage;
