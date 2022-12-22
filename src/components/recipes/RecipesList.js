import React from "react";
import Recipe from "./Recipe";
import { Link } from "react-router-dom";
import styled from "styled-components";

const RecipeLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const RecipesList = ({ recipes }) => {
  const recipeComponents = recipes.map((recipe) => {
    return (
      <RecipeLink key={recipe.id} to={`/recipe/${recipe.id}`}>
        <Recipe recipe={recipe} />
      </RecipeLink>
    );
  });

  return <>{recipeComponents}</>;
};

export default RecipesList;
