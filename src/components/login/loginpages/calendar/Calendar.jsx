import React, { useState, useEffect } from "react";
import Login from "../../Login";
import "../../Login.css";
import { useStateContext } from "../../contexts/ContextProvider";
import CalendarHeader from "./CalendarHeader";
import Month from "./Month";
import { getMonth } from "../../utils/util";
import EventModal from "./EventModal";

const Calendar = ({ recipes }) => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal, activeMenu } = useStateContext();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="grid grid-cols-7 gap-1">
      
      <div className="col-start-1 col-end-2">
        <Login />
      </div>


      <div className= {
        activeMenu
          ? "col-start-2 col-end-8 mx-10"
          : "col-start-1 col-end-8 mx-10"}
          >
      {showEventModal && <EventModal recipes = {recipes}/>}
        <div >

          <div>
            <CalendarHeader />
          </div>
          <div>
            <Month month={currentMonth} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
