import React from "react";
import Login from "../Login";
import "../Login.css";
import { useStateContext } from "../contexts/ContextProvider";

const FavouriteRecipes = () => {
  const { favouriteRecipes, shoppingList, setShoppingList } = useStateContext();

  const clickHandler = (recipe) => {
    const ingredientItems =
      recipe &&
      recipe.quantities.map((quantity) => {
        return {
          name: quantity.ingredient.name,
          amount: quantity.amount,
          unit: quantity.unit,
        };
      });
    const newShoppingList = [...shoppingList];
    newShoppingList.push(...ingredientItems); // added spread operator to get individual objects.
    setShoppingList(newShoppingList);
  };

  console.log(shoppingList);

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
              <button
                className="bg-green-light hover:bg-green-dark text-white font-bold py-2 px-4 rounded"
                onClick={() => clickHandler(recipe)}
              >
                Add to Shopping List +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteRecipes;
