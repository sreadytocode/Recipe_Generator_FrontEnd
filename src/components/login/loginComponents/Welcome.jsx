import React from "react";
import Login from "../Login";
import "../Login.css";
import Title from "../../reusable/Title";
import {
  AiFillHeart,
  AiOutlineCalendar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

const Welcome = () => {
  const { activeMenu } = useStateContext();
  return (
    <>
      <div className="grid grid-cols-6 gap-1 welcome">
        <div className="col-start-1 col-end-2">
          <Login />
        </div>
        <div
          className={
            activeMenu
              ? "col-start-2 col-end-7 login"
              : "col-start-1 col-end-7 login"
          }
        >
          <Title text={"Welcome to your dashboard"} />
        </div>
      </div>

      <section
        className={
          activeMenu
            ? "flex gap-6 flex-wrap justify-center mt-6 ml-[210px]"
            : "flex gap-6 flex-wrap justify-center mt-6"
        }
      >
        <Link to="/profile">
          <div className="w-48 h-48 border-solid border-green-500 flex flex-col items-center border-2 pt-3">
            <CgProfile size={50} style={{ fill: "#59BD8D" }} />
            <p className="text-center">View Profile</p>
          </div>
        </Link>
        <Link to="/favourite recipes">
          <div className="w-48 h-48 border-solid border-green-500 flex flex-col items-center border-2 pt-3">
            <AiFillHeart size={50} style={{ fill: "#59BD8D" }} />
            <p className="text-center">Favourite Recipes</p>
          </div>
        </Link>
        <Link to="/shopping list">
          <div className="w-48 h-48 border-solid border-green-500 flex flex-col items-center border-2 pt-3">
            <AiOutlineShoppingCart size={50} style={{ fill: "#59BD8D" }} />
            <p className="text-center">Shopping List</p>
          </div>
        </Link>
        <Link to="/meal planner">
          <div className="w-48 h-48 border-solid border-green-500 flex flex-col items-center border-2 pt-3">
            <AiOutlineCalendar size={50} style={{ fill: "#59BD8D" }} />
            <p className="text-center">Meal Planner</p>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Welcome;
