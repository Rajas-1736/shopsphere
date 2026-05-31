import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import "../styles/Wishlist.css";

function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    addToCart,
  } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="wishlist-container">
        <h1>My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <h2>No products added</h2>
        ) : (
          wishlistItems.map((item) => (
            <div
              key={item.id}
              className="wishlist-item"
            >
              <div className="wishlist-left">
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h2>{item.name}</h2>

                  <h3>
                    ₹{item.price}
                  </h3>
                </div>
              </div>

              <div className="wishlist-actions">
                <button
                  className="cart-btn"
                  onClick={() =>
                    addToCart(item)
                  }
                >
                  Add To Cart
                </button>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromWishlist(
                      item.id
                    )
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Wishlist;