import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hero_img from "../assets/hero_img.png";

import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <p className="hero-tag">
            NEW COLLECTION 2026
          </p>

          <h1>ShopSphere</h1>

          <p className="hero-text">
            Discover Fashion That Defines You
          </p>

          <Link
            to="/products"
            className="shop-btn"
          >
            Shop Now
          </Link>
        </div>

        <div className="hero-right">
          <img
            src={hero_img}
            alt="Fashion Model"
          />
        </div>
      </section>

      <section className="category-section">
        <h2>Shop By Category</h2>

        <div className="category-grid">
          <div className="category-card">
            👔 Men
          </div>

          <div className="category-card">
            👗 Women
          </div>

          <div className="category-card">
            🧒 Kids
          </div>
        </div>
      </section>

      <section className="why-section">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>🚚 Fast Delivery</h3>

            <p>
              Get your favorite products
              delivered quickly.
            </p>
          </div>

          <div className="why-card">
            <h3>💳 Secure Payments</h3>

            <p>
              Safe and trusted payment
              methods.
            </p>
          </div>

          <div className="why-card">
            <h3>⭐ Premium Quality</h3>

            <p>
              Carefully selected quality
              products.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;