import React from "react";
import RecipesList from "../../recipes/RecipesList";
import styled from "styled-components";

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
`;

const Home = ({ recipes }) => {
  return (
    <>
      <h1 className="home">Our Top Rated Recipes</h1>
      <RecipesContainer>
        <RecipesList recipes={recipes} />
      </RecipesContainer>
    </>
  );
};

export default Home;
