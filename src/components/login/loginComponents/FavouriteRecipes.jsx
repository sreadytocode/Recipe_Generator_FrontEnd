import React from "react";
import Login from "../Login";
import "../Login.css";
import { IoAddCircle } from "react-icons/io5";
import { useStateContext } from "../contexts/ContextProvider";

const FavouriteRecipes = () => {
  const { favouriteRecipes, shoppingList, setShoppingList } = useStateContext();

  const clickHandler = (recipe) => {
    const ingredientItems =
      recipe &&
      recipe.quantities.map((quantity) => {
        return {
          id: quantity.id,
          name: quantity.ingredient.name,
          amount: quantity.amount,
          unit: quantity.unit,
        };
      });

    const newShoppingList = [...shoppingList];

    newShoppingList.push(...ingredientItems);
    console.log(newShoppingList);
    const removeDuplicateItems = [...new Set(newShoppingList)];
    setShoppingList(removeDuplicateItems);
  };

  return (
    <div className="grid grid-cols-6 gap-3">
      <div className="col-start-1 col-end-2">
        <Login />
      </div>
      <h1 className="text-3xl text-center col-start-2 my-4 mt-8 col-end-7">
        Favourite Recipes
      </h1>
      <div className="col-start-2 col-end-7 mx-12 flex gap-6 flex-wrap justify-center">
        {favouriteRecipes.map((recipe, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center shadow-lg w-60 pb-4"
            >
              <h2 className="text-center w-[70%] font-bold">{recipe.name}</h2>
              <img
                className="my-4"
                src={recipe.image}
                alt={recipe.name}
                width="200"
              />
              <button
                className="bg-green-light hover:bg-green-dark text-white font-bold py-2 px-4 rounded w-48"
                onClick={() => clickHandler(recipe)}
              >
                <div className="flex items-center justify-center">
                  <IoAddCircle className="mr-2" /> <p>Shopping List</p>
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavouriteRecipes;
