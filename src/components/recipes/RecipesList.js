import React from "react";
import Recipe from "./Recipe";

const RecipesList = ({ recipes }) => {
  const recipeComponents = recipes.map((recipe) => {
    console.log(recipe);
    return (
      <div key={recipe.id}>
        <Recipe recipe={recipe} />
      </div>
    );
  });

  return <>{recipeComponents}</>;
};

export default RecipesList;
