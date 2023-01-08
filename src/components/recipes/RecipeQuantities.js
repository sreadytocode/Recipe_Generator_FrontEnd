import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  list-style-type: none;
  margin-bottom: 0.25rem;
  width: 100%;
`;

const IngredientsList = styled.ul`
  width: 100%;
`;

const IngredientsTitle = styled.h1`
  border-bottom: 3px solid #009f4f;
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;
`;

const RecipeQuantities = ({ quantities }) => {
  const quantityList = quantities.map((quantity, index) => (
    <ListItem key={index}>
      <p>

        {quantity.amount} {quantity.unit} {quantity.ingredient.name}
      </p>
    </ListItem>
  ));

  return (
    <div>
      <IngredientsTitle>Ingredients</IngredientsTitle>
      <IngredientsList>{quantityList}</IngredientsList>
    </div>
  );
};

export default RecipeQuantities;
