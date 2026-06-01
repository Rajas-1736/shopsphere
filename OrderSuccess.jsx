import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/OrderSuccess.css";
import Footer from "../components/Footer";
function OrderSuccess() {
  return (
    <>
      <Navbar />

      <div className="success-page">
        <div className="success-card">
          <div className="success-icon">
            ✅
          </div>

          <h1 className="success-title">
            Order Placed Successfully!
          </h1>

          <p className="success-message">
            Thank you for shopping with
            ShopSphere.
          </p>

          <p className="success-subtext">
            Your order has been received
            and is being processed.
          </p>

          <div className="success-buttons">
            <Link to="/products">
              <button className="shop-btn-success">
                Continue Shopping
              </button>
            </Link>

            <Link to="/orders">
              <button className="orders-btn">
                View Orders
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OrderSuccess;