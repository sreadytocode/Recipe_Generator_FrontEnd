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
              ? "col-start-2 col-end-7 login text-white mt-12"
              : "col-start-1 col-end-7 login text-white "
          }
        >
          <Title text={"Welcome to your dashboard"} />
        </div>
      </div>

      <section
        className={
          activeMenu
            ? "flex gap-12 flex-wrap justify-center mt-12 ml-[210px]"
            : "flex gap-12 flex-wrap justify-center mt-12"
        }
      >
        <Link to="/profile">
          <div className="w-60 h-60 p-6 border-solid border-green-500 flex flex-col items-center justify-center border-2">
            <CgProfile size={50} style={{ fill: "#59BD8D" }} />
            <h3 className="text-center text-xl font-bold mt-2">Profile</h3>
            <p className="mt-2 text-center">
              View and update your profile information
            </p>
          </div>
        </Link>
        <Link to="/favourite recipes">
          <div className="w-60 h-60 p-6 border-solid border-green-500 flex flex-col items-center justify-center border-2 p-4">
            <AiFillHeart size={50} style={{ fill: "#59BD8D" }} />
            <h3 className="text-center text-xl font-bold mt-2">
              Favourite Recipes
            </h3>
            <p className="mt-2 text-center">
              See all the recipes you have saved
            </p>
          </div>
        </Link>
        <Link to="/shopping list">
          <div className="w-60 h-60 p-6 border-solid border-green-500 flex flex-col justify-center items-center border-2 p-4">
            <AiOutlineShoppingCart size={50} style={{ fill: "#59BD8D" }} />
            <h3 className="text-center text-xl font-bold mt-2">
              Shopping List
            </h3>
            <p className="mt-2 text-center">
              View list of ingredients for favourite recipes
            </p>
          </div>
        </Link>
        <Link to="/meal planner">
          <div className="w-60 h-60 p-6 border-solid border-green-500 flex flex-col justify-center items-center border-2 p-4">
            <AiOutlineCalendar size={50} style={{ fill: "#59BD8D" }} />
            <h3 className="text-center text-xl font-bold mt-2">Meal Planner</h3>
            <p className="mt-2 text-center">Save recipes to your calendar</p>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Welcome;
