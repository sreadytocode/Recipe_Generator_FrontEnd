import React, {useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from '../../../login/contexts/ContextProvider';
import "./Diet.css";

const Diet = () => {
  const { diet, setDiet, click, setClick } = useStateContext(); 

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((res) => res.json())
      .then((dietData) => setDiet(dietData));
  }, [setDiet]);

  const handleClick = () => setClick(!click);

  // Created array 
  const duplicateCheck = [];
// Mapped through cuisine types from fetch request. Already uppercase. Left first letter then sliced from rest of letters changed to lowercase.
// Created the replace to remove underscore from gluten_free to "-"
  diet.map((item, index) => 
    duplicateCheck.push(
      item.dietType.includes("_") ? 
      item.dietType.charAt(0) + item.dietType.replace("_", "-").toLowerCase().slice(1) :
      item.dietType.charAt(0) + (item.dietType.slice(1)).toLowerCase())
    );

  const avoidDuplicates = [...new Set(duplicateCheck)];

    
  return (
    <div>
      <ul onClick={handleClick}
        className={click ? "diet-dropdown-menu clicked" : "diet-dropdown-menu"}> 
       {avoidDuplicates.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={`/${item}`}
                className="diet-dropdown-link"
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
  )
}

export default Diet