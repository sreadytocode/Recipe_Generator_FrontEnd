import React from "react";
import Searchbar from "../../Searchbar";

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
      <Searchbar/>
      <RecipesContainer>
        <RecipesList recipes={recipes} />
      </RecipesContainer>
    </div>

  );
};

export default Home;
