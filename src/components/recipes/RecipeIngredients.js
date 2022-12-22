import React from "react";

const RecipeIngredients = ({ ingredients }) => {
  const ingredientComponents =
    ingredients &&
    ingredients.map((ingredient, index) => {
      return (
        <div key={index}>
          <p>{ingredient.name}</p>
        </div>
      );
    });

  return <>{ingredientComponents}</>;
};

export default RecipeIngredients;
