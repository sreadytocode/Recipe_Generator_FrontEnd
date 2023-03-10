import { JsonAdaptor } from "@syncfusion/ej2/data";
import React, { useState } from "react";
import { MdDeleteForever, MdClose } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";

const EventModal = ({ recipes }) => {
  const { daySelected, setShowEventModal, dispatchCalEvent, selectedEvent } =
    useStateContext();
  const [breakfast, setBreakfast] = useState(
    selectedEvent ? selectedEvent.breakfast : ""
  );
  const [lunch, setLunch] = useState(selectedEvent ? selectedEvent.lunch : "");
  const [dinner, setDinner] = useState(
    selectedEvent ? selectedEvent.dinner : ""
  );

  const handleSubmit = (e) => {
    // cancel default method
    e.preventDefault();
    const calendarEvent = {
      breakfast: breakfast,
      lunch: lunch,
      dinner: dinner,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl min-w-[200px]">
        <header className="px-4 py-2 flex justify-end">
          <div className="text-gray-400">
            {selectedEvent && (
              <button
                className="w-10 bg-red-500 mr-1 h-[40px]"
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
              >
                <MdDeleteForever className="w-9" style={{ fill: "#FFFFFF" }} />
              </button>
            )}
            <button
              onClick={() => setShowEventModal(false)}
              className="w-10 bg-green-500 h-[40px]"
            >
              <MdClose className="w-9" style={{ fill: "#FFFFFF" }} />
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7 flex">
            <div>
              <h1 className="font-semibold text-xl">Enter your recipe</h1>
            </div>
            <div className="breakfast">
              <p>
                <b>Breakfast</b>
              </p>
              <select
                className="w-[100%]"
                defaultValue=""
                onChange={(e) => setBreakfast(e.target.value)}
              >
                <option value="" disabled>
                  Choose a recipe
                </option>
                {recipes.map((recipe) => {
                  if (recipe.mealType === "BREAKFAST") {
                    return (
                      <option key={recipe.id} value={recipe.id}>
                        {recipe.name}
                      </option>
                    );
                  } else {
                    return null;
                  }
                })}
              </select>
           
            </div>
            <div className="lunch">
              <p>
                <b>Lunch</b>
              </p>
           
              <select
                defaultValue=""
                onChange={(e) => setLunch(e.target.value)}
              >
                <option value="" disabled>
                  Choose a recipe
                </option>
                {recipes.map((recipe) => {
                  if (recipe.mealType === "LUNCH") {
                    return (
                      <option key={recipe.id} value={recipe.id}>
                        {recipe.name}
                      </option>
                    );
                  } else {
                    return null;
                  }
                })}
              </select>
            </div>
            <div className="dinner">
              <p>
                <b>Dinner</b>
              </p>
            
              <select
                className="w-[100%]"
                defaultValue=""
                onChange={(e) => setDinner(e.target.value)}
              >
                <option value="" disabled>
                  Choose a recipe
                </option>
                {recipes.map((recipe) => {
                  if (recipe.mealType === "DINNER") {
                    return (
                      <option key={recipe.id} value={recipe.id}>
                        {recipe.name}
                      </option>
                    );
                  } else {
                    return null;
                  }
                })}
              </select>
            </div>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-800 px-6 py-2 rounded text-white flex"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
