import React, {useEffect} from "react";
import { Link, NavLink } from "react-router-dom";
import Title from "../../reusable/Title";
import { useStateContext } from "../../login/contexts/ContextProvider";
import "./Cuisine.css";

const Cuisine = () => {
  const {cuisines, setCuisines, click, setClick } = useStateContext();

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((res) => res.json())
      .then((cuisineData) => setCuisines(cuisineData));
  }, [setCuisines]);

  const handleClick = () => setClick(!click); 

  return (
    <div>
      <ul onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
        {cuisines.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={`/${item.cuisineType}`}
                  className="dropdown-link"
                  onClick={() => {
                    setClick(false);
                  }}
                >
                  {item.cuisineType}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Cuisine;
