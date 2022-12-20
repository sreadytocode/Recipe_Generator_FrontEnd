import React from "react";
import Recipe from "./Recipe";
import styled from "styled-components";

const RecipesList = ({ recipes }) => {
  const recipeComponents = recipes.map((recipe) => {
    return (
      <div key={recipe.id}>
        <Recipe recipe={recipe} />
      </div>
    );
  });

  return <>{recipeComponents}</>;
};

export default RecipesList;
