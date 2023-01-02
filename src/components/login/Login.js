import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "../../containers/Footer";
import "./Login.css";

import { LoginNavbar, Sidebar, Profile } from "./loginComponents";
import { Calendar, ShoppingList } from "./loginpages";

import { useStateContext } from "./contexts/ContextProvider";

const Login = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      {activeMenu ? (
        <div className="w-500 absolute sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar/>
      </div>
      ) : (
        <div className="w-0 h-0 dark:bg-secondary-dark-bg"> 
          <Sidebar/>
        </div>
      )}
      <div className={activeMenu ? 
      'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-100 w-full xl:w-48 md:w-48' : 
      'bg-main-bg dark:bg-main-dark-bg w-full top-px min-h-auto sm:w-14 '}>
          <div className="relative md:static bg-main-bg dark:bg-main-dark-bg min-h-auto">
          {/* className="absolute md:static bg-main-bg dark:bg-main-dark-bg navbar w-full " */}
            <LoginNavbar/>
          </div>
      </div>
    </div>
  );
};

export default Login;
