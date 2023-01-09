import React from "react";
import styled from "styled-components";

const PageTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
`;

const Title = ({ text }) => {
  return (
    <div
      className="backdrop-blur-3xl px-8 text-center 
    leading-12"
    >
      <PageTitle>{text}</PageTitle>
    </div>
  );
};

export default Title;
