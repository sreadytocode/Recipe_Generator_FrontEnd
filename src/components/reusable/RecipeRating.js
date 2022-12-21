import React, { useState } from "react";
import styled from "styled-components";

const StarRatingContainer = styled.div``;

const RecipeRating = ({ recipeRating }) => {
  //   const stars = new Array(recipeRating);
  //   console.log(stars);
  const [rating, setRating] = useState(0);

  return (
    <StarRatingContainer>
      {[...Array(recipeRating)].map((star, index) => {
        return <span key={index}>&#9733;</span>;
      })}
    </StarRatingContainer>
  );
};

export default RecipeRating;
