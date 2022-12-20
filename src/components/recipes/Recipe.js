import React from "react";
import styled from "styled-components";

//Box to conatain all recipe information
const RecipeCard = styled.div`
  width: 20rem;
  justify-content: center;
  position: relative;
`;

const RecipeTitleContainer = styled.div`
  position: absolute;
  background-color: #ffffff;
  padding: 0.5rem;
  bottom: 5rem;
  width: 8rem;
  opacity: 0.8;
`;

const RecipeTitle = styled.h3`
  position: relative;
  z-index: 1;
`;

//Set the width of the image to take up 100% of it's container
const RecipeImage = styled.img`
  width: 100%;
`;
const RecipeInfoContainer = styled.div`
  background-color: #d9d9d9;
  display: flex;
  gap: 2rem;
  padding: 0.75rem;
`;

const Recipe = ({ recipe }) => {
  return (
    <RecipeCard>
      <RecipeTitleContainer>
        <RecipeTitle>{recipe.name}</RecipeTitle>
      </RecipeTitleContainer>
      <RecipeImage
        src={require("../../dummyData/recipe_images/" + recipe.image)}
        alt="recipe"
      />
      <RecipeInfoContainer>
        <p>Rating: {recipe.rating}</p>
        <p>Calories: {recipe.calories}</p>
      </RecipeInfoContainer>
    </RecipeCard>
  );
};

export default Recipe;
