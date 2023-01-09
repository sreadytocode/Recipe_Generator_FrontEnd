import React from "react";
import Login from "../Login";
import "../Login.css";
import Title from "../../reusable/Title";

const Welcome = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-1 welcome">
        <div className="col-start-1 col-end-2">
          <Login />
        </div>
        <div className="col-start-2 col-end-6 font-bold text-red-700 drop-shadow-2xl mt-20 ">
          <Title text={"Welcome to your dashboard"} />
        </div>
      </div>
      <section className="mx-20 flex gap-6 flex-wrap justify-center mt-6">
        <div className="w-48 h-48 border-solid border-black border-2">
          <p className="text-center">Favourite Recipes</p>
        </div>
        <div className="w-48 h-48 border-solid border-black border-2">
          <p className="text-center">Shopping List</p>
        </div>
        <div className="w-48 h-48 border-solid border-black border-2">
          <p className="text-center">Meal Planner</p>
        </div>
      </section>
    </>
  );
};

export default Welcome;
