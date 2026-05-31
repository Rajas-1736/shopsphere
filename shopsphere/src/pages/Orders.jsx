import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";

function Orders() {
  const { orders } =
    useContext(CartContext);

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
        }}
      >
        <h1>My Orders</h1>

        {orders.length === 0 ? (
          <h2>No Orders Yet</h2>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              style={{
                border:
                  "1px solid #ddd",
                padding: "20px",
                marginTop:
                  "20px",
                borderRadius:
                  "10px",
              }}
            >
              <h3>
                Order ID:
                {" "}
                {order.id}
              </h3>

              <p>
                Date:
                {" "}
                {order.date}
              </p>

              <p>
                Status:
                {" "}
                {order.status}
              </p>

              <h3>
                Total:
                ₹{order.total}
              </h3>

              <hr />

              {order.items.map(
                (item) => (
                  <div
                    key={
                      item.id
                    }
                    style={{
                      display:
                        "flex",
                      gap: "20px",
                      marginTop:
                        "15px",
                    }}
                  >
                    <img
                      src={
                        item.image
                      }
                      alt={
                        item.name
                      }
                      width="80"
                    />

                    <div>
                      <h4>
                        {
                          item.name
                        }
                      </h4>

                      <p>
                        ₹
                        {
                          item.price
                        }
                        ×
                        {
                          item.quantity
                        }
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Orders;