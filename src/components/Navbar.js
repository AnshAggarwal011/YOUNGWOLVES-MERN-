import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "./ContextReducer";
import Modal from "../Modal";
import Cart from "../screens/Cart";
export default function Navbar(props) {
  const [cartView, setCartView] = useState(false);
  localStorage.setItem("temp", "first");
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    Navigate("/login");
  };
  const loadCart = () => {
    setCartView(true);
  };
  const items = useCart();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <Link className="navbar-brand  fs-2 " to="/">
            <img
              src="https://drive.google.com/uc?id=1F_TW4pwvZa77R2zptZNTfHZBUUZ6ZRYG"
              style={{ maxHeight: "70px", objectFit: "fill" }}
            ></img>
            YOUNGWOLVES
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link fs-4 text-bold active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="nav-item  ">
                  <Link
                    className="nav-link fs-4 text-bold active"
                    aria-current="page"
                    to="/myOrder"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
                <Link className="nav-link text-white  " to="/createuser">
                  Signup
                </Link>
              </div>
            ) : (
              <div>
                <div className="btn  text-success mx-2 " onClick={loadCart}>
                  <Badge color="error" badgeContent={items.length}>
                    <ShoppingCartIcon />
                  </Badge>
                </div>

                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  ""
                )}
                <div
                  className="btn bg-dark text-white mx-2"
                  onClick={handleLogout}
                >
                  {" "}
                  Log Out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
