import React from 'react';
import Login from "../Login";
import "../Login.css";

const Welcome = () => {
  return (
    <div className="grid grid-cols-5 gap-1">
      <div className="col-start-1 col-end-2">
        <Login/>
      </div>
      <div className="col-start-2 col-end-6 text-gray-500">
        <h1 className='text-2xl md:text-4xl lg:text-5xl uppercase'>Welcome to your Dashboard!</h1>
      </div> 
    </div>
  )
}

export default Welcome