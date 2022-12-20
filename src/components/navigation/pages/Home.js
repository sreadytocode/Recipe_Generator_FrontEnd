import React from "react";
import RecipesList from "../../recipes/RecipesList";

const Home = ({ recipes }) => {
  return (
    <>
      <h1 className="home">Home</h1>
      <RecipesList recipes={recipes} />
    </>
  );
};

export default Home;
