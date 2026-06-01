import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";
import Footer from "../components/Footer";
function Cart() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-page">
        <h1 className="cart-title">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <Link to="/products">
              <button className="continue-btn">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item"
              >
                <div className="cart-left">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div>
                    <h2>{item.name}</h2>

                    <h3>₹{item.price}</h3>

                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          decreaseQuantity(
                            item.id
                          )
                        }
                        className="qty-btn"
                      >
                        -
                      </button>

                      <span>
                        Quantity:{" "}
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQuantity(
                            item.id
                          )
                        }
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <h2>
                Total: ₹{total}
              </h2>

              <Link to="/checkout">
                <button className="checkout-btn">
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;