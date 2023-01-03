import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { MdOutlineCancel } from 'react-icons/md';
import { links } from "../loginData/dummy";
import  { useStateContext } from "../contexts/ContextProvider";
import {Profile } from "../loginComponents";
import { Route, Routes } from 'react-router-dom';

const Sidebar = () => {
  
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 1150){
      setActiveMenu(false);
    }
  }
// Links css when clicked or not clicked in sidebar
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-green-600  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className="ml-4 h-auto md:overflow-hidden overflow-auto md:hover:overflow-auto pb-11 h-full xl:min-h-full">
      {activeMenu && (
        <>
          <div className="ml-16 mt-1 flex text-xl font-extrabold">
            <Link to="/login" onClick={handleCloseSideBar}>
              <span>Menu</span>
            </Link>
              <TooltipComponent content="Menu" position='BottomCenter'>
                <button type='button' onClick={() => { setActiveMenu((prevActiveMenu) => !prevActiveMenu)}} 
                className="text-xl rounded-full p-3 hover:bg-light-gray
                mt-4 block md:hidden">
                  <MdOutlineCancel/>
                </button>
              </TooltipComponent>
          </div>
          <div className='mt-10'>
            {/* Maps through dummy data for sidebar so will show link names, icons etc */}
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize ">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;