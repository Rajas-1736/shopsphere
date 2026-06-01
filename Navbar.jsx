import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";

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

  return (
    <nav className="navbar">
      <Link
        to="/"
        className="logo-link"
      >
        <h1 className="logo">
          ShopSphere
        </h1>
      </Link>

      <div className="nav-links">
        <Link
          to="/"
          className="nav-link"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="nav-link"
        >
          Products
        </Link>

        <Link
          to="/wishlist"
          className="nav-link"
        >
          ❤️ Wishlist ({wishlistItems.length})
        </Link>

        <Link
          to="/orders"
          className="nav-link"
        >
          📦 Orders ({orders.length})
        </Link>

        <Link
          to="/cart"
          className="nav-link"
        >
          🛒 Cart ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;