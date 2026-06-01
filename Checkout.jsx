import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";
import Footer from "../components/Footer";
function Checkout() {
  const navigate = useNavigate();

  const { placeOrder } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    placeOrder();

    navigate("/order-success");
  };

  return (
    <>
      <Navbar />

      <div className="checkout-container">
        <div className="checkout-card">
          <h1 className="checkout-title">
            Checkout
          </h1>

          <form
            onSubmit={handleSubmit}
            className="checkout-form"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              className="checkout-input"
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className="checkout-input"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="checkout-input"
            />

            <textarea
              placeholder="Shipping Address"
              rows="5"
              required
              className="checkout-input"
            />

            <select
              className="checkout-input"
            >
              <option>
                Cash On Delivery
              </option>

              <option>
                Credit Card
              </option>

              <option>
                Debit Card
              </option>

              <option>UPI</option>
            </select>

            <button
              type="submit"
              className="place-order-btn"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;