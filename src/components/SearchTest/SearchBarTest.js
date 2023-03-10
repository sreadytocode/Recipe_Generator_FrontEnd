import React, { useState } from "react";
import styled from "styled-components";
import { TextField, Button } from "@mui/material";
// npm install @mui/material @emotion/react @emotion/styled

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b8fcda;
  height: 6rem;
`;

// const SearchField = styled.h2`
//   display: flex;
//   align-items: center;
//   width: 70%;
//   height: 3rem;
//   border-radius: 0.5rem;
//   margin: 0 auto;
//   background-color: #ffffff;
//   color: aaaaaa;
//   padding: 1rem;
//   border: 1px solid black;
// `;

const SearchBarTest = ({ setRecipes }) => {
  const [inputText, setInputText] = useState("");

  const inputHandler = async () => {
    if (inputText) {
      fetch("http://localhost:8080/recipes")
        .then((res) => res.json())
        .then(async (listData) => {
          const searchedRecipes = listData.filter(
            (recipe) =>
              recipe.name.toLowerCase().includes(inputText) ||
              recipe.cuisineType.toLowerCase().includes(inputText) ||
              recipe.mealType.toLowerCase().includes(inputText) ||
              recipe.dietType.toLowerCase().includes(inputText)
          );

          setInputText("");
          setRecipes(searchedRecipes);
        });
    }
  };

  return (
    <SearchBarContainer>
      {/* <SearchField> */}
      <TextField
        sx={{
          input: {
            fontWeight: "700",
            border: "none",
            borderRadius: "5px",
          },
          width: { lg: "500px", xs: "400px", xl: "1100px" },
          backgroundColor: "#fff",
          borderRadius: "4px",
        }}
        height="76px"
        value={inputText}
        onChange={(e) => setInputText(e.target.value.toLowerCase())}
        placeholder="Search For Recipes"
        type="text"
      />
      <Button
        sx={{
          bgcolor: "#009F4F",
          "&hover": { backgroundColor: "black" },
          color: "#fff",
          textTransform: "none",
          width: { lg: "100px", xs: "80px", xl: "100px" },
          fontSize: { lg: "20px", xs: "14px" },
          height: "56px",
          position: "relative",
          right: 1,
          marginLeft: 2,
          // right: '0',
        }}
        onClick={inputHandler}
      >
        Search
      </Button>
      {/* </SearchField>   */}
    </SearchBarContainer>
  );
};

export default SearchBarTest;
