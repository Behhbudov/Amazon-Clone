import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../../context/StateProvider";
import { Link, useLocation } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const [{ cart, user }, dispatch] = useStateValue();
  const location = useLocation();

  if (location.pathname === "/login") {
    return null;
  }

  const authHandler = () => {
    if (user && window.confirm("Are you sure you want to sign out?")) {
      signOut(auth);
      dispatch({
        type: "REMOVE_FROM_CART_WITH_SIGNOUT",
      });
    }
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__search_input" type="text" />
        <SearchIcon className="header__search__icon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={authHandler} className="header__option">
            <span className="header__option_lineOne">Hello {user?.email}</span>
            <span className="header__option_lineTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option_lineOne">Returns</span>
          <span className="header__option_lineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option_lineOne">Your</span>
          <span className="header__option_lineTwo">Prime</span>
        </div>
        <Link to="/cart">
          <div className="header__option_cart">
            <ShoppingCartIcon />
            <span className="header__option_lineTwo header__cart_count">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
