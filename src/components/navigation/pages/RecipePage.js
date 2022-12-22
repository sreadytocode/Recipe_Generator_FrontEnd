import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RecipeRating from "../../reusable/RecipeRating";
import RecipeIngredients from "../../recipes/RecipeIngredients";

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

const NumberOfServings = styled.p`
  font-size: 2rem;
  font-weight: 600;
  color: #009f4f;
`;

const RecipeDescription = styled.div`
  margin-top: 2rem;
  width: 60%;
`;

const RecipePage = ({ recipes, ingredients }) => {
  let { id } = useParams();
  id = Number(id);

  const recipe = recipes.find((recipe) => recipe.id === id);
  console.log(recipe);

  return (
    <RecipeSection>
      <h1>{recipe.name}</h1>
      <RecipeRating recipeRating={recipe.rating} />
      <p>
        {recipe.cuisineType} {recipe.mealType.toLowerCase()}
      </p>
      <RecipeImage src={recipe.image} alt="recipe" />

      <RecipeDescription>{recipe.description}</RecipeDescription>

      <RecipeIngredients ingredients={ingredients} />

      <RecipeCaloriesCircle>
        <h4>Servings</h4>
        <NumberOfServings>{recipe.serving}</NumberOfServings>
      </RecipeCaloriesCircle>
    </RecipeSection>
  );
};

export default RecipePage;
