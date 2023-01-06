import React, { createContext, useContext, useState, useReducer, useEffect } from "react";
import dayjs from "dayjs";

const StateContext = createContext();

// /////////////////////////////////////////////////////////////
// Code for calendar scroll to next comment for states
const saveEventsReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
};

const initEvents = () => {
  const storageEvents = localStorage.getItem("savedEvents");
  console.log(storageEvents);
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
};

// ////////////////////////////////////////////////////////////////////
// Add all your states for context provider here
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [cuisines, setCuisines] = useState([]);
  const [diet, setDiet] = useState([]);
  const [click, setClick] = useState(false);
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [savedEvents, dispatchCalEvent] = useReducer(
    saveEventsReducer,
    [],
    initEvents
  );

  // ////////////////////////////////////////////////////////////////
  // useEffects for calendar
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  // ///////////////////////////////////////////////////////////
// Put states defined/need here
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        cuisines,
        setCuisines,
        diet,
        setDiet,
        click,
        setClick,
        favouriteRecipes,
        setFavouriteRecipes,
        shoppingList,
        setShoppingList,
        monthIndex,
        setMonthIndex,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        selectedEvent,
        setSelectedEvent,
        dispatchCalEvent,
        savedEvents,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
