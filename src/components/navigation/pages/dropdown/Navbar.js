import React, { useState } from "react";
import { Button } from "../../../reusable/Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Cuisine from "./Cuisine";
import Diet from "./Diet";
import Logo from "../../../../images/logo.svg";

const Navbar = () => {
  const [click, setClick] = useState(false);

  //Sets the dropdown menu of on line 46. If dropdown === true then render the DropDown component. Initial value set to false.
  const [cuisineDropdown, setCuisinedropdown] = useState(false);
  const [dietDropdown, setDietdropdown] = useState(false);

  //Sets the state of the hamburger and cross icons and toggles back and forth
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  //When the viewport is less than 960 then the dropdown will not be vissible
  const onMouseEnterCuisine = () => {
    if (window.innerWidth < 960) {
      setCuisinedropdown (false);
    } else {
      setCuisinedropdown (true);
    }
  };

  const onMouseLeaveCuisine = () => {
    if (window.innerWidth < 960) {
      setCuisinedropdown (false);
    } else {
      setCuisinedropdown (false);
    }
  };

  const onMouseEnterDiet = () => {
    if (window.innerWidth < 960) {
      setDietdropdown (false);
    } else {
      setDietdropdown (true);
    }
  };

  const onMouseLeaveDiet = () => {
    if (window.innerWidth < 960) {
      setDietdropdown (false);
    } else {
      setDietdropdown (false);
    }
  };

  //COMMENTS
  //Line 23 if click === true show one icon, else show other icon

  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} alt="logo" width="150" />
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
            onMouseEnter={onMouseEnterCuisine}
            onMouseLeave={onMouseLeaveCuisine}
          >
            <Link className="nav-links" onClick={closeMobileMenu}>
              Cuisine <i className="fas fa-caret-down" />
            </Link>
            {cuisineDropdown && <Cuisine />}
          </li>

          <li className="nav-item"
            onMouseEnter={onMouseEnterDiet}
            onMouseLeave={onMouseLeaveDiet}>
              <Link className="nav-links" onClick={closeMobileMenu}>
              Dietary <i className="fas fa-caret-down" />
            </Link>
            {dietDropdown && <Diet />}
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
