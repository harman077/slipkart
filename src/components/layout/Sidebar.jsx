import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice";
import "./Sidebar.css";

const Sidebar = ({ isOpen, closeSidebar }) => {

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  // logout handler
  const handleLogout = () => {
    dispatch(logout());
    closeSidebar();
  };

  // common link click handler
  const handleLinkClick = () => {
    closeSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? "show" : ""}`}>

      <nav className="sidebar-links">

        <Link to="/" onClick={handleLinkClick}>Home</Link>

        <Link to="/women" onClick={handleLinkClick}>Women</Link>

        <Link to="/men" onClick={handleLinkClick}>Men</Link>

        <Link to="/shop" onClick={handleLinkClick}>Shop</Link>

        <Link to="/about" onClick={handleLinkClick}>About</Link>

        <Link to="/contact" onClick={handleLinkClick}>Contact</Link>

        <Link to="/cartpage" onClick={handleLinkClick}>Cart</Link>

        {isLoggedIn ? (
          <button className="logoutBtn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/login" onClick={handleLinkClick}>Login</Link>
        )}

      </nav>

    </div>
  );
};

export default Sidebar;