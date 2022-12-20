import React from "react";

const Recipe = ({ recipe }) => {
  return (
    <div>
      <img
        src={require("../../dummyData/recipe_images/" + recipe.image)}
        alt="recipe"
      />
      <h3>{recipe.name}</h3>
      <p>Rating: {recipe.rating}</p>
      <p>Calories: {recipe.calories}</p>
    </div>
  );
};

export default Recipe;
