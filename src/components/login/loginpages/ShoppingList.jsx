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
    <div className="grid grid-cols-6 gap-3">
      <div className="col-start-1 col-end-2">
        <Login />
      </div>
      <h1 className="text-3xl text-center col-start-2 my-4 col-end-7">
        Shopping List
      </h1>
      <div className="col-start-2 col-end-7 mx-4">
        <div className="grid grid-cols-3 gap-3 grid-rows-auto">
          {shoppingList.map((item, index) => {
            return (
              <div
                key={index}
                className="grid-flow-col auto-cols-max flex justify-between  bg-light-gray mb-3 p-2 min-w-xs w-80"
              >
                <p>
                  {item.amount} {item.unit} {item.name}
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
    </div>
  );
};

export default ShoppingList;
