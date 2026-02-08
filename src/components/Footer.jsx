import { BiCart } from "react-icons/bi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <h1 className="logo"><BiCart />&nbsp;TakShop</h1>
          <p>
            Your trusted online store for quality products, fast delivery,
            and secure checkout.
          </p>
        </div>

        <div>
          <h2>Shop</h2>
          <ul>
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Beauty</li>
            <li>Home & Living</li>
            <li>Sports</li>
          </ul>
        </div>

        <div>
          <h2>Support</h2>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div>
          <h2>Follow Us</h2>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} TakShop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
