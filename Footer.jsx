import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-logo">
        ShopSphere
      </h2>

      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/wishlist">Wishlist</a>
        <a href="/orders">Orders</a>
        <a href="/cart">Cart</a>
      </div>

      <p className="footer-text">
        © 2026 ShopSphere. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;