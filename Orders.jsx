import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import "../styles/Orders.css";
import Footer from "../components/Footer";
function Orders() {
  const { orders } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="orders-page">
        <h1 className="orders-title">
          📦 My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <h2>No Orders Yet</h2>
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="order-card"
            >
              <div className="order-header">
                <h3>
                  Order ID: {order.id}
                </h3>

                <span className="order-status">
                  {order.status}
                </span>
              </div>

              <p>
                <strong>Date:</strong>{" "}
                {order.date}
              </p>

              <h3 className="order-total">
                Total: ₹{order.total}
              </h3>

              <hr />

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="order-item"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="order-image"
                  />

                  <div>
                    <h4>{item.name}</h4>

                    <p>
                      ₹{item.price} ×{" "}
                      {item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Orders;