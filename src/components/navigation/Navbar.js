import React, { useState } from "react";
import { Button } from "../reusable/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Logo from "../../images/logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  //Sets the dropdown menu of on line 46. If dropdown === true then render the DropDown component. Initial value set to false.
  const [dropdown, setDropdown] = useState(false);

  //Sets the state of the hamburger and cross icons and toggles back and forth
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  //When the viewport is less than 960 then the dropdown will not be vissible
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  //COMMENTS
  //Line 23 if click === true show one icon, else show other icon

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src="../../images/logo.svg" alt="logo" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          {/* Dropdown menu start here */}
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/cuisine" className="nav-links" onClick={closeMobileMenu}>
              Cuisine <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/Login"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
};

export default Navbar;
