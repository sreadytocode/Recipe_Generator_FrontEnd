// import React, { useState, useEffect } from "react";
// import Cuisine from "./pages/Cuisine";
// import Diet from "./pages/Diet";
// import { Link, NavLink } from "react-router-dom";
// import { useStateContext } from "../login/contexts/ContextProvider";

// import "./Dropdown.css";

// const Dropdown = () => {
//   const [click, setClick] = useState(false);
//   const {cuisines, setCuisines } = useStateContext();

//   useEffect(() => {
//     fetch("http://localhost:8080/recipes")
//       .then((res) => res.json())
//       .then((cuisineData) => setCuisines(cuisineData));
//   }, [setCuisines]);

//   const handleClick = () => setClick(!click);

 
//   return (
//     <>
//       <ul
//         onClick={handleClick}
//         className={click ? "dropdown-menu clicked" : "dropdown-menu"}
//       >
//         {cuisines.map((item, index) => {
//             return (
//               <li key={index}>
//                 <NavLink
//                   to={`/${item.cuisineType}`}
//                   onClick={() => {
//                     setClick(false);
//                   }}
//                 >
//                   {item.cuisineType}
//                 </NavLink>
//               </li>
//             );
//           })}

//       </ul>
//     </>
//   );
// };

// export default Dropdown;
