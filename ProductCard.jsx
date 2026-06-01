import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/ProductCard.css";

function ProductCard({ product }) {
  const { addToCart, addToWishlist } =
    useContext(CartContext);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
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
          ⭐⭐⭐⭐⭐ <span>({product.rating})</span>
        </p>

        <h2 className="product-price">
          ₹{product.price}
        </h2>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add To Cart
        </button>

        <button
          className="wishlist-btn"
          onClick={() => addToWishlist(product)}
        >
          ❤️ Wishlist
        </button>
      </div>
    </div>
  );
}

export default ProductCard;