import React, {useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import Title from "../../../reusable/Title";
import { useStateContext } from "../../../login/contexts/ContextProvider";
import "./Cuisine.css";

const Cuisine = () => {
  const {cuisines, setCuisines, click, setClick } = useStateContext();

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((res) => res.json())
      .then((cuisineData) => setCuisines(cuisineData));
  }, [setCuisines]);

  const handleClick = (evt) => {
    evt.prevent.default();
    setClick(!click)
  }; 

// Created array 
  const duplicateCheck = [];
// Mapped through cuisine types from fetch request. Already uppercase. Left first letter then sliced from rest of letters changed to lowercase.
  cuisines.map((item, index) => 
    duplicateCheck.push(
      
      item.cuisineType.charAt(0) + (item.cuisineType.slice(1)).toLowerCase()
    
    )
  );

// Avoid duplicates
  const avoidDuplicates = [...new Set(duplicateCheck)];
 

  return (
    <div>
      <ul onClick={handleClick}
        className={click ? "cuisinedropdown-menu clicked" : "cuisinedropdown-menu"}>
        {/* Mapped through array where has saved cuisine types and using navlink made new links */}
        {avoidDuplicates.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={`/${item}`}
                  className="cuisinedropdown-link"
                  onClick={() => {
                    setClick(false);
                  }}
                >
                 {item}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cuisine;
