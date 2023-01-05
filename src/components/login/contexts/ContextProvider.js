import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  userProfile: false,
};

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
    const [cuisines, setCuisines] = useState([]);
    const [diet, setDiet] = useState([]);
    const [click, setClick] = useState(false);
    const [favouriteRecipes, setFavouriteRecipes] = useState([]);
    
    return (
        <StateContext.Provider
        value={{ 
            activeMenu,
            setActiveMenu,
            screenSize, setScreenSize,
            cuisines, setCuisines,
            diet, setDiet,
            click, setClick,
            favouriteRecipes,
            setFavouriteRecipes,
         }}>
            {children}
        </StateContext.Provider>
    )
} 

export const useStateContext = () => useContext(StateContext);
