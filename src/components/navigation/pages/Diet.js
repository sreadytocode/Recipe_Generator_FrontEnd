import React, {useEffect} from 'react';
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from '../../login/contexts/ContextProvider';
import "./Diet.css";

const Diet = () => {
  const { diet, setDiet, click, setClick } = useStateContext(); 

  useEffect(() => {
    fetch("http://localhost:8080/recipes")
      .then((res) => res.json())
      .then((dietData) => setDiet(dietData));
  }, [setDiet]);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <ul onClick={handleClick}
        className={click ? "diet-dropdown-menu clicked" : "diet-dropdown-menu"}>
       {diet.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={`/${item.dietType}`}
                className="diet-dropdown-link"
                onClick={() => {
                  setClick(false);
                }}
              >
                {item.dietType}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Diet