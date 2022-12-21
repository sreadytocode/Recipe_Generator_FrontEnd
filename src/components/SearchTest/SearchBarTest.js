import React from "react";
import styled from "styled-components";

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b8fcda;
  height: 6rem;
`;

const SearchField = styled.h2`
  display: flex;
  align-items: center;
  width: 70%;
  height: 3rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  background-color: #ffffff;
  color: aaaaaa;
  padding: 1rem;
  border: 1px solid black;
`;

const SearchBarTest = () => {
  return (
    <SearchBarContainer>
      <SearchField>Search</SearchField>
    </SearchBarContainer>
  );
};

export default SearchBarTest;
