import React from "react";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";

const RecipesList = ({ recipes }) => {
  const recipeComponents = recipes.map((recipe) => {
    return (
      <>
        <Link to={`/recipe/${recipe.id}`}>
          <Recipe key={recipe.id} recipe={recipe} />
        </Link>
      </>
    );
  });

  return <>{recipeComponents}</>;
};

export default RecipesList;
