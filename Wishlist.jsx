import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import "../styles/Wishlist.css";
import Footer from "../components/Footer";
function Wishlist() {
  const {
    wishlistItems,
    removeFromWishlist,
    addToCart,
  } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="wishlist-page">
        <h1 className="wishlist-title">
          ❤️ My Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="empty-wishlist">
            <h2>No products added</h2>
          </div>
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
                  className="wishlist-image"
                />

                <div>
                  <h2>{item.name}</h2>
                  <h3>₹{item.price}</h3>
                </div>
              </div>

              <div className="wishlist-actions">
                <button
                  onClick={() =>
                    addToCart(item)
                  }
                  className="wishlist-cart-btn"
                >
                  🛒 Add To Cart
                </button>

                <button
                  onClick={() =>
                    removeFromWishlist(
                      item.id
                    )
                  }
                  className="wishlist-remove-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Wishlist;