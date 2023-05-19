import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then((res) => {}).catch((error) => console.error(error));
  };

  return (
    <div className="header">
      <img src={logo} alt="ema-john-logo" />
      <nav>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        {user && (
          <span style={{ color: "white", marginLeft: "9px" }}>
            Welcome {user.email}{" "}
            <button style={{ backgroundColor: "white" }} onClick={handleLogOut}>
              {" "}
              Log Out
            </button>
          </span>
        )}
      </nav>
    </div>
  );
};

export default Header;
