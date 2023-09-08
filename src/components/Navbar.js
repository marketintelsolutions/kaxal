import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { paths } from "../utils/data";

const Navbar = () => {
  const [currentPath, setCurrentPath] = useState('/')

  const location = useLocation()



  useEffect(() => {
    window.scroll(0, 0)

    setCurrentPath(location.pathname)

  }, [location])

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          {
            paths.map((pathItem) => {
              const { text, path } = pathItem

              return <Link to={path} className={`${currentPath === path ? "link-item active" : 'link-item'}`}>
                {text}
              </Link>
            })
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
