import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "../../containers/Footer";
import "./Login.css";

import { LoginNavbar, Sidebar, UserProfile } from "./loginComponents";
import { Calendar, ShoppingList } from "./loginpages";

import { useStateContext } from "./contexts/ContextProvider";

const Login = () => {
  const { activeMenu } = useStateContext();

  return (
    <div>
      {activeMenu ? (
        <div className="w-550 absolute sidebar dark:bg-secondary-dark-bg bg-white">
          <Sidebar/>
      </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg"> 
          <Sidebar/>
        </div>
      )}
      <div className={activeMenu ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-100 w-full' : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'}>
          <div className="absolute md:static bg-main-bg dark:bg-main-dark-bg">
          {/* className="absolute md:static bg-main-bg dark:bg-main-dark-bg navbar w-full " */}
            <LoginNavbar/>
          </div>
      </div>
      <div>
        <Routes>
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/shoppinglist" element={<ShoppingList/>}/>
          <Route path="/planner" element={<Calendar/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default Login;
