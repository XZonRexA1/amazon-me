import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="ema-john-logo" />
      <nav>
        <a href="/order">Order</a>
        <a href="/order-review">Order Review</a>
        <a href="/mange-inventory">Mange Inventory</a>
        <a href="/login">Login</a>
      </nav>
    </div>
  );
};

export default Header;
