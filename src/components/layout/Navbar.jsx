import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";

import "./Navbar.css";
import Searchbar from "../reusable-Components/Searchbar";
import { logout } from "../../redux/authSlice";
import Sidebar from "./Sidebar";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="navbar1">

        {/* LOGO */}
        <div className="nav-left">
          <Link to="/">SlipKart</Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="nav-center">

          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/women">Women</NavLink></li>
          <li><NavLink to="/men">Men</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>

        </ul>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          {isLoggedIn ? (
            <button className="loginbtn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="loginbtn">
              Login
            </NavLink>
          )}

          <div className="cart-wrapper">
            <NavLink to="/cartpage" className="cart-icon">
              🛒
            </NavLink>

            <span className="cartCount-badge">
              {cartItems.length}
            </span>
          </div>

        </div>

        {/* HAMBURGER */}
      <div
  className="hamburger"
  onClick={() => setIsOpen(prev => !prev)}
>
  <RxHamburgerMenu size={28} />
</div>

      </nav>

      {/* SIDEBAR */}
      <Sidebar
        isOpen={isOpen}
        closeSidebar={() => setIsOpen(false)}
      />

      {/* SEARCH BAR */}
      <Searchbar />
    </>
  );
};

export default Navbar;