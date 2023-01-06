import React from "react";
import Login from "../Login";
import "../Login.css";
import { useStateContext } from "../contexts/ContextProvider";

const FavouriteRecipes = () => {
  const { favouriteRecipes } = useStateContext();

  return (
    <div className="grid grid-cols-5 gap-1">
      <div className="col-start-1 col-end-2">
        <Login />
      </div>
      <div className="col-start-2 col-end-6">
        <h1>Favourite Recipes</h1>
        {favouriteRecipes.map((recipe, index) => {
          return (
            <div key={index}>
              <h1>{recipe.name}</h1>
              <img src={recipe.image} alt={recipe.name} width="200" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteRecipes;
