import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <Link to="/" className="link-item active">
            Home
          </Link>
          <Link to="/about" className="link-item">
            About Us
          </Link>
          <div className="link-item">Services</div>
          <div className="link-item">News</div>
          <Link to="/contact" className="link-item">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
