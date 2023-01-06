import React, {useState} from 'react';
import Login from "../../Login";
import "../../Login.css";
import { useStateContext } from '../../contexts/ContextProvider';
import CalendarHeader from './CalendarHeader';
import Month from './Month';
import { getMonth } from "../../utils/util";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useStateContext();

  return (
    <div className="grid grid-cols-7 gap-1">
      <div className="col-start-1 col-end-2">
        <Login/>
      </div>

      <div className="col-start-2 col-end-7">
        {/* <div>
          <h1>Calendar</h1>
        </div> */}
        <div>
          <CalendarHeader/>
        </div>
        <div>
          <Month month={currentMonth}/> 
        </div>
      </div> 
    </div>
  )
}

export default Calendar