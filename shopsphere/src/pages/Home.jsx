import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import hero from "../assets/hero.png";
import "../styles/Home.css";
function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <section className="hero">
        <div className="hero-left">
          <p className="hero-subtitle">
            OUR BESTSELLERS
          </p>

          <h1>
            Latest Arrivals
            <br />
            Fashion Collection
          </h1>

          <Link to="/products">
            <button className="shop-btn">
              Shop Now →
            </button>
          </Link>
        </div>

        <div className="hero-right">
          <img
            src={hero}
            alt="Hero"
          />
        </div>
      </section>

      {/* Features */}

      <section className="features">
        <div className="feature-box">
          <h3>🚚 Free Shipping</h3>

          <p>
            Free shipping on all
            orders.
          </p>
        </div>

        <div className="feature-box">
          <h3>💳 Secure Payment</h3>

          <p>
            100% secure payment
            methods.
          </p>
        </div>

        <div className="feature-box">
          <h3>🔄 Easy Returns</h3>

          <p>
            7-day return policy.
          </p>
        </div>
      </section>

      {/* CTA */}

      <section className="cta">
        <h2>
          Discover The New Fashion
          Trends
        </h2>

        <p>
          Explore premium clothing
          for Men, Women and Kids.
        </p>

        <Link to="/products">
          <button className="cta-btn">
            Explore Collection
          </button>
        </Link>
      </section>
    </>
  );
}

export default Home;