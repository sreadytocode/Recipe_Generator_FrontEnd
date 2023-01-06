import React, { useEffect } from "react";
import Login from "../Login";
import "../Login.css";
import { useStateContext } from "../contexts/ContextProvider";

const ShoppingList = () => {
  const { favouriteRecipes, shoppingList, setShoppingList } = useStateContext();

  // const [shoppingList, setShoppingList] = useState([]);
  console.log(favouriteRecipes);

  // const quantities = [];
  // favouriteRecipes.map((recipe) => quantities.push(recipe.quantities));

  const quantities = [];
  favouriteRecipes.map((recipe) => quantities.push(...recipe.quantities));
  console.log(quantities);

  const ingredientItems = quantities.map((quantity) => {
    return {
      name: quantity.ingredient.name,
      amount: quantity.amount,
      unit: quantity.unit,
    };
  });
  console.log(ingredientItems);

  const newShoppingList = [...shoppingList];
  newShoppingList.push(...ingredientItems); // added spread operator to get individual objects.
  setShoppingList(newShoppingList);
  console.log(ingredientItems);

  const removeItem = (item) => {
    const newShoppingList = [...shoppingList];
    const itemIndex = newShoppingList.indexOf(item);
    newShoppingList.splice(itemIndex, 1);
    setShoppingList(newShoppingList);
  };

  // const newShoppingList = [...shoppingList, ingredientItems];

  useEffect(() => {
    setShoppingList(newShoppingList);
  }, [newShoppingList, setShoppingList]);

  // console.log(newShoppingList);

  return (
    <div className="grid grid-cols-5 gap-1">
      <div className="col-start-1 col-end-2">
        <Login />
      </div>
      <div className="col-start-2 col-end-6">
        <h1>Shopping List</h1>
        {ingredientItems.map((ingredient, index) => {
          return (
            <div key={index}>
              <p>
                {ingredient.unit} {ingredient.name}
              </p>
              <button
                className="border-solid border-2"
                onClick={() => removeItem(ingredient)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShoppingList;
