import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";

import { Avatar, Badge, Space } from "antd";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const categories = useCategory();
  const [cartItemsCount, setCartItemsCount] = useState(0); // State to hold the cart items count
  // Function to calculate and update the cart items count
  const updateCartItemsCount = () => {
    setCartItemsCount(cart.length);
  };

  // Update cart items count on component mount and whenever cart changes
  useEffect(() => {
    updateCartItemsCount();
  }, [cart]);
  const handleLogOut = () => {
    setAuth({
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logged out successfully");
  };
  // console.log("my role is ", auth?.user?.role);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand">
            <PiShoppingBagOpenFill size={45} style={{ marginRight: "8px" }} />
            ECOMMERCE APP
          </Link>

          <SearchInput />
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={"/categories"}
                data-bs-toggle="dropdown"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/categories"}>
                    All Categories
                  </Link>
                </li>
                {categories?.map((c) => (
                  <li key={c._id}>
                    <Link className="dropdown-item" to={`/category/${c.slug}`}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {auth.user ? (
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {auth?.user?.name}
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="dropdown-item"
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={handleLogOut} className="dropdown-item">
                      Logout
                    </button>
                  </li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/register" className="nav-link">
                    REGISTER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    LOGIN
                  </NavLink>
                </li>
              </>
            )}
            <li className="nav-item">
              <NavLink
                to="/cart"
                className="nav-link"
                style={{ color: "black" }}
              >
                <Badge count={cartItemsCount} size="small" offset={[8, -5]}>
                  <FaCartArrowDown
                    style={{
                      height: "25px",
                      width: "25px",
                      color: "#368ACB  ",
                    }}
                  />
                </Badge>
                CART
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
