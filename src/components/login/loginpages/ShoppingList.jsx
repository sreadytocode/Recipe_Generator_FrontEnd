import React, { useEffect } from "react";
import Login from "../Login";
import "../Login.css";
import { useStateContext } from "../contexts/ContextProvider";

const ShoppingList = () => {
  const { shoppingList, setShoppingList } = useStateContext();

  const removeItem = (ingredient) => {
    const newShoppingList = [...shoppingList];
    const ingredientIndex = newShoppingList.indexOf(ingredient);
    newShoppingList.splice(ingredientIndex, 1);
    setShoppingList(newShoppingList);
  };

  return (
    <div className="grid grid-cols-5 gap-1">
      <div className="col-start-1 col-end-2">
        <Login />
      </div>
      <div className="col-start-2 col-end-6">
        <h1>Shopping List</h1>
        {shoppingList.map((item, index) => {
          return (
            <div key={index}>
              <p>
                {item.unit} {item.name}
              </p>
              <button
                className="border-solid border-2"
                onClick={() => removeItem(item)}
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
