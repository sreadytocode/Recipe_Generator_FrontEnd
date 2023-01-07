import React from "react";
import RecipesList from "../../recipes/RecipesList";
import styled from "styled-components";
import Title from "../../reusable/Title";
import SearchBarTest from "../../SearchTest/SearchBarTest";

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-top: 3rem;
`;

const Home = ({ recipes, setRecipes }) => {
  return (
    <>
      <SearchBarTest recipes = {recipes} setRecipes = {setRecipes}/>
      <div className="home">
        <Title text={"Our Top Rated Recipes"} />
      </div>
      <RecipesContainer>
        <RecipesList recipes={recipes} />
      </RecipesContainer>
    </>
  );
};

export default Home;
