import React from "react";

const Title = ({ text }) => {
  return (
    <div
      className="backdrop-blur-3xl p-4 text-center 
    leading-12 sm:p-3"
    >
      <h1 className="lg:text-6xl font-bold m:text-5xl">{text}</h1>
    </div>
  );
};

export default Title;
