import React from "react";
import Title from "../../reusable/Title";
import Login from "../Login";
import "../Login.css";

const Welcome = () => {
  return (
    <div className="grid grid-cols-5 gap-1 welcome">
      <div className="col-start-1 col-end-2">
        <Login />
      </div>
      <div className="col-start-2 col-end-6 font-bold text-red-700 drop-shadow-2xl mt-20 ">
        <h1 className="flex justify-center mr-60 text-2xl md:text-4xl lg:text-5xl uppercase">
          Welcome to your Dashboard!
        </h1>
      </div>
    </div>
  );
};

export default Welcome;
