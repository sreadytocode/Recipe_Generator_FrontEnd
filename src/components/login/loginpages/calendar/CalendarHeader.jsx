import dayjs from "dayjs";
import { useStateContext } from "../../contexts/ContextProvider";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import React from 'react';

const CalendarHeader = () => {
    const { monthIndex, setMonthIndex } = useStateContext();

    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
      };
      const handelNextMonth = () => {
        setMonthIndex(monthIndex + 1);
      };
      const handleReset = () => {
        // Retrieve the current month
        setMonthIndex(dayjs().month());
      };

  return (
    <header className="px-4 py-2 flex items-center">
      <h1 className="mr-10 text-xl text-green-500 fond-bold">Edamame Recipe Planner</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdChevronLeft />
        </span>
      </button>
      <button onClick={handelNextMonth}>
        <span className="cursor-pointer text-gray-600 mx-2">
          <MdChevronRight />
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  )
}

export default CalendarHeader