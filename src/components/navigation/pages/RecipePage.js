import React from "react";
import { useParams } from "react-router-dom";

const RecipePage = ({ recipes }) => {
  const { id } = useParams();

  const recipe = recipes.filter((recipe) => {
    return recipe.id === id;
  });

  return (
    <section>
      <h1>Recipe Page{id}</h1>
      <h2>{recipe}</h2>
    </section>
  );
};

export default RecipePage;
