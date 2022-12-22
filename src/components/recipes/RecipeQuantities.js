import React from "react";

const RecipeQuantities = ({ quantities }) => {
  const quantityList = quantities.map((quantity, index) => (
    <li key={index}>
      <p>
        {quantity.amount} {quantity.unit} {quantity.ingredient.name}
      </p>
    </li>
  ));

  return (
    <>
      <h1>Ingredients</h1>
      <ul>{quantityList}</ul>
    </>
  );
};

export default RecipeQuantities;
