import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logos/logo.jpeg";
import hamburger from "../assets/logos/hamburger.png";
import { paths } from "../utils/data";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('/');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo">
          <Link to='/'> <img src={logo} alt="logo" /></Link>
        </div>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
          <img src={hamburger} alt="hamburger" />
        </button>

        <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
          {paths.map((pathItem, index) => {
            const { text, path } = pathItem;
            return (
              <Link
                key={index}
                to={path}
                className={`${currentPath === path ? "link-item active" : 'link-item'}`}
                onClick={() => setIsNavOpen(false)} // Close nav when a link is clicked
              >
                {text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
