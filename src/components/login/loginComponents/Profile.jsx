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
      <div className="col-start-2 col-end-6">
        <div>
          <h1>User Profile</h1>
        </div>
        <div>
          <img src={user.icon} alt="Icon" width="200"/>
        </div>

      </div> 
    </div>
  )
}

export default Profile;