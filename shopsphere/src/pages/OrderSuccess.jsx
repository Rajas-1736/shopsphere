import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function OrderSuccess() {
  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          padding: "100px",
        }}
      >
        <h1
          style={{
            color: "green",
          }}
        >
          ✅ Order Placed
          Successfully
        </h1>

        <p>
          Thank you for shopping
          with ShopSphere.
        </p>

        <Link to="/orders">
          <button
            style={{
              marginTop: "20px",
            }}
          >
            View Orders
          </button>
        </Link>
      </div>
    </>
  );
}

export default OrderSuccess;