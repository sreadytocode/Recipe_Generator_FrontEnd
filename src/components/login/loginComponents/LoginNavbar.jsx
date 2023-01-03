import React, {useEffect} from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineMenu } from 'react-icons/ai';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="absolute text-xl rounded-full p-2 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const LoginNavbar = () => {
  
  const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

  // Use effect so that when in mobile view sidebar doesn't show as will take up whole page
  useEffect(() => {
      const handleResize = () => setScreenSize (window.innerWidth);

      window.addEventListener('resize', handleResize)

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1100){
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div>
      <NavButton className="relative" customFunc={() => setActiveMenu((prevActiveMenu)=>
        !prevActiveMenu)} color="green" icon={<AiOutlineMenu/>}/> 
    </div>
    
  )
}

export default LoginNavbar