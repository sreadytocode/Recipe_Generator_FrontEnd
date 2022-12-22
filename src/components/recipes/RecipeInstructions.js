import React from "react";
import styled from "styled-components";

const InstructionsContainer = styled.div`
  width: 60%;
`;

const RecipeInstructions = ({ instructions }) => {
  const instructionList = instructions.map((instruction, index) => (
    <li key={index}>
      <p>{instruction.description}</p>
    </li>
  ));

  return (
    <InstructionsContainer>
      <h1>Instructions</h1>
      <ol>{instructionList}</ol>
    </InstructionsContainer>
  );
};

export default RecipeInstructions;
