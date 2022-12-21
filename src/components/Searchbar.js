import  React, { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./List";
import "./Searchbar.css"



function Searchbar() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    }; 

  return (
    <div className="main">
    
      <div className="search">
          <TextField 
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List  input={inputText} />
    </div>
  );
}

export default Searchbar;