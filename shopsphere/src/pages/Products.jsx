import { useState } from "react";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data";
import { CartContext } from "../context/CartContext";

function Products() {
  const { addToCart } =
    useContext(CartContext);

  const [search, setSearch] =
    useState("");

  const filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
        }}
      >
        <h1>All Products</h1>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "30px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {filteredProducts.map(
            (product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={
                  addToCart
                }
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Products;
