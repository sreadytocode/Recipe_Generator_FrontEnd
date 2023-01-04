import React from "react";
import "../Login.css";
import Login from "../Login";
import { LoginNavbar, Sidebar } from "../loginComponents";
import { user } from "../loginData/dummy";

const Profile = () => {

  return (
    <div className="grid grid-cols-5 gap-1">
      <div className="col-start-1 col-end-2">
        <Login/>
      </div>
      <div className="col-start-2 col-end-6 mr-60">
        <div className="flex justify-center mt-20 mr-12 mb-10 font-extrabold text-4xl text-gray-500">
          <h1>User Profile</h1>
        </div>
        <div className="rounded-full mb-10 flex justify-center">
          <img src={user.icon} alt="Icon" width="200"/>
        </div>
        <div className="flex justify-center mr-10">
        <div className="border solid box-border h-35 w-80 p-4 border-green-600 border-1 flex justify-center "> 
          <h3>Full name: {user.firstName} {user.lastName}</h3>
        </div>
        <div className="border solid box-border h-35 w-80 p-4 border-green-600 border-1 flex justify-center">
          <h3>Dietary requirements: {user.dietaryreq}</h3>
        </div>
        </div>
      </div> 
    </div>
  )
}

export default Profile;