import React from "react";
import Login from "../Login";
import { AiFillMinusCircle } from "react-icons/ai";
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

      <h1 className="text-3xl text-center col-start-2 my-4 mt-8 col-end-7">
        Shopping List
      </h1>

      <div className="col-start-2 col-end-7 mx-12">
        <div className="flex gap-3 justify-center align-center pb-4">
          <p>Remove items you already have by clicking on</p>
          <AiFillMinusCircle size={20} style={{ fill: "#009F4F" }} />
        </div>
        <div className="flex gap-3 flex-wrap justify-center ">
          {shoppingList.map((item, index) => {
            return (
              <div
                key={index}
                className="grid-flow-col auto-cols-max flex justify-between bg-light-gray mb-3 p-2 min-w-80 w-80"
              >
                <p>
                  {item.amount} {item.unit} {item.name}
                </p>
                <button onClick={() => removeItem(item)}>
                  <AiFillMinusCircle size={30} style={{ fill: "#009F4F" }} />
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
