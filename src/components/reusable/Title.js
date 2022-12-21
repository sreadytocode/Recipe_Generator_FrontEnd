import React from "react";
import styled from "styled-components";

const PageTitle = styled.h1`
  font-size: 4rem;
`;

const Title = ({ text }) => {
  return (
    <>
      <PageTitle>{text}</PageTitle>
    </>
  );
};

export default Title;
