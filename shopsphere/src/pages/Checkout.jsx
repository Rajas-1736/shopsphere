import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const navigate = useNavigate();

  const { placeOrder } =
    useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    placeOrder();

    navigate("/order-success");
  };

  return (
    <>
      <Navbar />

      <div
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "30px",
          border:
            "1px solid #ddd",
          borderRadius: "10px",
        }}
      >
        <h1>Checkout</h1>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection:
              "column",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <textarea
            placeholder="Address"
            rows="5"
            required
          />

          <select>
            <option>
              Cash On Delivery
            </option>

            <option>UPI</option>

            <option>
              Credit Card
            </option>
          </select>

          <button
            type="submit"
          >
            Place Order
          </button>
        </form>
      </div>
    </>
  );
}

export default Checkout;