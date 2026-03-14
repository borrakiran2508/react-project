import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>E-Mart</h3>
          <p>Your one stop shop for mobiles, computers, fashion and more.</p>
        </div>

        <div className="footer-section">
          <h4>Shop</h4>
          <ul>
            <li>Mobiles</li>
            <li>Computers</li>
            <li>Men</li>
            <li>Kids</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Contact Us</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>Twitter</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 E-Mart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;