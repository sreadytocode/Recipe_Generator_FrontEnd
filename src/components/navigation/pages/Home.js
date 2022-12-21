import React from "react";
import RecipesList from "../../recipes/RecipesList";
import styled from "styled-components";
import Title from "../../reusable/Title";

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
`;

const Home = ({ recipes }) => {
  return (
    <div>
      <Title text = {"Our Top Rated Recipes"} />
      <RecipesContainer>
        <RecipesList recipes={recipes} />
      </RecipesContainer>
    </div>
  );
};

export default Home;
