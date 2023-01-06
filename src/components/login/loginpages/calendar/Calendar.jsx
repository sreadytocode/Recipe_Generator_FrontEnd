import React from 'react';
import Login from "../../Login";
import "../../Login.css";
import { useStateContext } from '../../contexts/ContextProvider';
import CalendarHeader from './CalendarHeader';

const Calendar = () => {
  const { monthIndex, showEventModal } = useStateContext();

  return (
    <div className="grid grid-cols-5 gap-1">
      <div className="col-start-1 col-end-2">
        <Login/>
      </div>
      <div className="col-start-2 col-end-6">
        <h1>Calendar</h1>
        <CalendarHeader/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit explicabo, saepe ullam assumenda, doloremque rerum accusamus sapiente eaque quas autem natus adipisci deleniti odit eos suscipit error, ipsam officia fugit?</p>
      </div> 
    </div>
  )
}

export default Calendar