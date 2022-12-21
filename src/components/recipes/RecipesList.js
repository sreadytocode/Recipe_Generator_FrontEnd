import React from "react";
import Recipe from "./Recipe";
import styled from "styled-components";

const RecipesList = ({ recipes }) => {
  const recipeComponents = recipes.map((recipe) => {
    return <Recipe key={recipe.id} recipe={recipe} />;
  });

  return <>{recipeComponents}</>;
};

export default RecipesList;
