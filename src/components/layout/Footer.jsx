import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">SlipKart</h2>
          <p>
            Discover stylish products crafted for everyday life.
            Quality, comfort, and design — all in one place.
          </p>
        </div>

        {/* Shop Links */}
        <div className="footer-section">
          <h3>Shop</h3>
          <ul>
            <li><Link to="/shop">All Products</Link></li>
            <li><Link to="/women">Women</Link></li>
            <li><Link to="/men">Men</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@slipkart.com</p>
          <p>Phone: +91 98883 69563</p>

          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SlipKart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;