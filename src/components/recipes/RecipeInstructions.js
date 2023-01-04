import React from "react";
import styled from "styled-components";

const InstructionsContainer = styled.div`
  width: 60%;
`;

const InstructionsTitle = styled.h1`
  border-bottom: 3px solid #009f4f;
  padding-bottom: 0.5rem;
  margin: 0.75rem 0;
  width: 30%;
`;

const ListItems = styled.li`
  margin-bottom: 0.75rem;
`;
const RecipeInstructions = ({ instructions }) => {
  const instructionList = instructions.map((instruction, index) => (
    <ListItems key={index}>
      <p>{instruction.description}</p>
    </ListItems>
  ));

  return (
    <InstructionsContainer className="mb-12">
      <InstructionsTitle>Instructions</InstructionsTitle>
      <ol>{instructionList}</ol>
    </InstructionsContainer>
  );
};

export default RecipeInstructions;
