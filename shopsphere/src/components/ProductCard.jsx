import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const {
    addToCart,
    addToWishlist,
  } = useContext(CartContext);

  const stars =
    "⭐".repeat(
      Math.floor(product.rating || 4)
    ) +
    "☆".repeat(
      5 -
        Math.floor(
          product.rating || 4
        )
    );

  return (
    <div className="product-card">
      <Link
        to={`/product/${product.id}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </Link>

      <div className="product-content">
        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="product-rating">
          {stars} (
          {product.rating || 4})
        </p>

        <h2 className="product-price">
          ₹{product.price}
        </h2>

        <div className="product-buttons">
          <button
            onClick={() =>
              addToCart(product)
            }
            className="add-cart-btn"
          >
            🛒 Add To Cart
          </button>

          <button
            onClick={() =>
              addToWishlist(
                product
              )
            }
            className="wishlist-btn"
          >
            ❤️ Wishlist
          </button>

          <Link
            to={`/product/${product.id}`}
            style={{
              textDecoration:
                "none",
            }}
          >
            <button
              className="view-product-btn"
            >
              👁 View Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;