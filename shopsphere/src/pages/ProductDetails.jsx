import { useParams } from "react-router-dom";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import { CartContext } from "../context/CartContext";
import { products } from "../data";
import "../styles/ProductDetails.css";
function ProductDetails() {
  const { id } = useParams();

  const { addToCart, addToWishlist } =
    useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const relatedProducts =
    products
      .filter(
        (item) =>
          item.category ===
            product.category &&
          item.id !== product.id
      )
      .slice(0, 4);

  return (
    <>
      <Navbar />

      <div className="product-details">
        <div className="product-image-section">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>

          <p className="rating">
            ⭐⭐⭐⭐☆ (4.5)
          </p>

          <h2>₹{product.price}</h2>

          <p>
            Premium quality product
            designed for style,
            comfort and everyday
            wear.
          </p>

          <div className="buttons">
            <button
              onClick={() =>
                addToCart(product)
              }
            >
              Add To Cart
            </button>

            <button
              onClick={() =>
                addToWishlist(
                  product
                )
              }
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      <section className="related">
        <h2>Related Products</h2>

        <div className="related-grid">
          {relatedProducts.map(
            (item) => (
              <div
                key={item.id}
                className="related-card"
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <h3>
                  {item.name}
                </h3>

                <p>
                  ₹{item.price}
                </p>

                <button
                  onClick={() =>
                    addToCart(item)
                  }
                >
                  Add To Cart
                </button>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default ProductDetails;