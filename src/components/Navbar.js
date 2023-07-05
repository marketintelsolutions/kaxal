import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <div className="link-item active">Home</div>
          <div className="link-item">About Us</div>
          <div className="link-item">Services</div>
          <div className="link-item">News</div>
          <div className="link-item">Contact</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
