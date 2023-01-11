import React from "react";
import Day from "./Day";

const Month = (props) => {
  const { month } = props;

  return (
    <div className="flex-1 grid 2xl:grid-col-7 xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-auto-rows">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Month;
