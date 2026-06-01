import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data";
import "../styles/Products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] =
    useState("low");

  const [men, setMen] =
    useState(false);

  const [women, setWomen] =
    useState(false);

  const [kids, setKids] =
    useState(false);

  let filteredProducts =
    products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (men || women || kids) {
    filteredProducts =
      filteredProducts.filter(
        (product) =>
          (men &&
            product.category ===
              "Men") ||
          (women &&
            product.category ===
              "Women") ||
          (kids &&
            product.category ===
              "Kids")
      );
  }

  if (sortType === "low") {
    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );
  } else {
    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );
  }

  return (
    <>
      <Navbar />

      <div className="products-page">
        {/* Sidebar */}

        <div className="filters-sidebar">
          <h2>Filters</h2>

          <div className="filter-group">
            <h3>Category</h3>

            <label>
              <input
                type="checkbox"
                checked={men}
                onChange={() =>
                  setMen(!men)
                }
              />
              Men
            </label>

            <label>
              <input
                type="checkbox"
                checked={women}
                onChange={() =>
                  setWomen(!women)
                }
              />
              Women
            </label>

            <label>
              <input
                type="checkbox"
                checked={kids}
                onChange={() =>
                  setKids(!kids)
                }
              />
              Kids
            </label>
          </div>
        </div>

        {/* Products */}

        <div className="products-section">
          <div className="products-header">
            <h1>
              All Collections (
              {
                filteredProducts.length
              }
              )
            </h1>

            <div className="controls">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                className="search-box"
              />

              <select
                value={sortType}
                onChange={(e) =>
                  setSortType(
                    e.target.value
                  )
                }
                className="sort-box"
              >
                <option value="low">
                  Price Low →
                  High
                </option>

                <option value="high">
                  Price High →
                  Low
                </option>
              </select>
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map(
              (product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;