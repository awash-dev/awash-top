import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <a href="/">
          <img src="/logo.png" className="nav-img" alt="logo"/>
        </a>
      </div>
      <div className="nav-middle">
        <a href="/" className="midle">Home</a>
        <a href="#news" className="midle">new's</a>
        <a href="#contact" className="midle">help center</a>
      </div>
      <div className="nav-button">
        <button className="button-nav">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
