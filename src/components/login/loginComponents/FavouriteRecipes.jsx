import React from "react";
import Login from "../Login";
import "../Login.css";
import { useStateContext } from "../contexts/ContextProvider";

const FavouriteRecipes = () => {
  const { favouriteRecipes, shoppingList, setShoppingList } = useStateContext();

  const clickHandler = (recipe) => {
    console.log(recipe.id);
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

    newShoppingList.push(...ingredientItems);

    setShoppingList(newShoppingList);
  };

  console.log(shoppingList);

  return (
    <div className="grid grid-cols-6 gap-3">
      <div className="col-start-1 col-end-2">
        <Login />
      </div>
      <h1 className="text-3xl text-center col-start-2 my-4 mt-8 col-end-7">
        Favourite Recipes
      </h1>
      <div className="col-start-2 col-end-7 mx-12">
        {favouriteRecipes.map((recipe, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <h1>{recipe.name}</h1>
              <img src={recipe.image} alt={recipe.name} width="200" />
              <button
                className="bg-green-light hover:bg-green-dark text-white font-bold py-2 px-4 rounded w-48"
                onClick={() => clickHandler(recipe)}
              >
                + Shopping List
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteRecipes;
