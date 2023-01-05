import React, {useEffect} from "react";
import { useStateContext } from '../../login/contexts/ContextProvider';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import RecipeRating from '../../reusable/RecipeRating';
import Title from "../../reusable/Title";

const RecipeCard = styled.div`
  width: 20rem;
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
  height: 11rem;
  display: flex;
`;
const RecipeInfoContainer = styled.div`
  background-color: #d9d9d9;
  align-items: center;
  display: flex;
  gap: 2rem;
  padding: 0.75rem;
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Vegan = () => {
  const {diet, setDiet } = useStateContext();

    useEffect(() => {
      fetch("http://localhost:8080/recipes")
        .then((res) => res.json())
        .then((dietData) => setDiet(dietData));
    }, [setDiet]);
  
    if (! diet) return "Sorry will have recipes soon!";
  
    const veganDiet = diet.map((recipe, index) => {
      if (recipe.dietType === "VEGAN") {
        return (
        <Link  key={recipe.id} to={`/recipe/${recipe.id}`}>
          <RecipeCard key={index}>
            <RecipeTitleContainer>
              <RecipeTitle>{recipe.name}</RecipeTitle>
            </RecipeTitleContainer>
  
          <RecipeImage src={recipe.image} alt="recipe" />
          <RecipeInfoContainer>
            <RatingContainer>
              <p>Rating:</p>
              <RecipeRating recipeRating={recipe.rating} />
            </RatingContainer>
  
            <p>Servings: {recipe.serving}</p>
          </RecipeInfoContainer>
        </RecipeCard>
      </Link>
        )
    } else {
      return null;
    }
    });

 return (
      <div >
        <div className='vegan text-black'>
          <Title text={"Vegan"} />
        </div>
        <div className='inline flex gap-5 justify-center justify-evenly mt-20 align'>
          {veganDiet}
        </div>
      </div>
    )
};

export default Vegan;
