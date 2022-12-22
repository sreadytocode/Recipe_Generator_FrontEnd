import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import RecipeRating from "../../reusable/RecipeRating";
import RecipeInstructions from "../../recipes/RecipeInstructions";
import RecipeQuantities from "../../recipes/RecipeQuantities";
// import RecipeIngredients from "../../recipes/RecipeIngredients";

//Container for all recipe information
const RecipeSection = styled.section`
  width: 80%;
  margin: 6rem auto 0;
`;

const RecipeInfoPanel = styled.div`
  display: flex;
`;

const RecipeImage = styled.img`
  width: 60%;
  margin-right: 2rem;
  align-self: flex-start;
  border-bottom: 6px solid #009f4f;
`;

const RecipeCaloriesCircle = styled.div`
  margin: 0 0 1rem 1rem;
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

const ImageInstructionsContainer = styled.div`
  display: flex;
`;

const RecipePage = ({ recipes }) => {
  //Use params gets the individual id from the url
  let { id } = useParams();
  //Use params returns a string so we need to change the id into a Number
  id = Number(id);
  //The param number is compared to the recipe.id using find method.
  const recipe = recipes.find((recipe) => recipe.id === id);

  return (
    <RecipeSection>
      <RecipeInfoPanel>
        <div>
          <h1>{recipe.name}</h1>
          <RecipeRating recipeRating={recipe.rating} />
          <div>
            <p>
              Cuisine: <b>{recipe.cuisineType}</b>
            </p>
            <p>
              <b>Ideal to have for {recipe.mealType}</b>
            </p>
          </div>
        </div>
        <RecipeCaloriesCircle>
          <p>Servings</p>
          <NumberOfServings>{recipe.serving}</NumberOfServings>
        </RecipeCaloriesCircle>
      </RecipeInfoPanel>

      <ImageInstructionsContainer>
        <RecipeImage src={recipe.image} alt="recipe" />
        <RecipeQuantities quantities={recipe.quantities}></RecipeQuantities>
      </ImageInstructionsContainer>

      <RecipeDescription>{recipe.description}</RecipeDescription>

      <RecipeInstructions instructions={recipe.instructions} />
    </RecipeSection>
  );
};

export default RecipePage;
