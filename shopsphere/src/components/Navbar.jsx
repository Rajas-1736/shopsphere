import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const {
    cartItems,
    wishlistItems,
    orders = [],
  } = useContext(CartContext);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontSize: "16px",
    fontWeight: "500",
    marginLeft: "25px",
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        zIndex: "1000",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 50px",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#111",
          }}
        >
          ShopSphere
        </h1>
      </Link>

      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={linkStyle}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={linkStyle}
        >
          Products
        </Link>

        <Link
          to="/wishlist"
          style={linkStyle}
        >
          ❤️ Wishlist ({wishlistItems.length})
        </Link>

        <Link
          to="/orders"
          style={linkStyle}
        >
          📦 Orders ({orders.length})
        </Link>

        <Link
          to="/cart"
          style={linkStyle}
        >
          🛒 Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;