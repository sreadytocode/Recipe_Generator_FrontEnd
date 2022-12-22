import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RecipeRating from "../../reusable/RecipeRating";

//Container for all recipe information
const RecipeSection = styled.section`
  width: 80%;
  margin: 6rem auto 0;
`;

const RecipeImage = styled.img`
  margin-top: 2rem;
  width: 60%;
  border-bottom: 6px solid #009f4f;
`;

const RecipeCaloriesCircle = styled.div`
  margin-top: 2rem;
  border: 3px solid #009f4f;
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NumberOfCalories = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #009f4f;
`;

const RecipeDescription = styled.div`
  margin-top: 2rem;
  width: 60%;
`;

const RecipePage = ({ recipes }) => {
  let { id } = useParams();
  id = Number(id);

  const recipe = recipes.find((recipe) => recipe.id === id);

  return (
    <RecipeSection>
      <h1>{recipe.name}</h1>
      <RecipeRating recipeRating={recipe.rating} />
      <RecipeImage
        src={require("../../../dummyData/recipe_images/" + recipe.image)}
        alt="recipe"
      />
      <RecipeDescription>{recipe.description}</RecipeDescription>
      <RecipeCaloriesCircle>
        <h4>Calories</h4>
        <NumberOfCalories>{recipe.calories}</NumberOfCalories>
      </RecipeCaloriesCircle>
    </RecipeSection>
  );
};

export default RecipePage;
