import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../contexts/ContextProvider';
import dayjs from 'dayjs';

const Day = (props) => {
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } = useStateContext();
  const { day, rowIdx } = props;
  const [dayEvents, setDayEvents] = useState([]);

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-green-600 text-white rounded-full w-7"
      : "";
  };

  
// For some reason won't work with useState from useStateContext
  useEffect(() => {
    
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"))
    
    // console.log(events);
    setDayEvents(events);

  }, [savedEvents, day, setDayEvents]);


  // console.log(dayEvents);

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {/* Display day of the week on the first line */}
        {rowIdx === 0 && <p className="text-sm mt-1">{day.format("ddd")}</p>}
        <p className={`text-sm p-1 my-1 text-center" ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer flex justify-center"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-neutral-200 w-40 p-3 text-gray-600 text-sm rounded mb-2.5 truncate flex justify-column`}
          >
            <b>B:</b>{evt.breakfast} /
            <b>L:</b>{evt.lunch} /
            <b>D:</b> {evt.dinner}
          </div>

          
        ))}
      </div>
    </div>
  )
}

export default Day