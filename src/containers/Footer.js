import React from "react";
import styled from "styled-components";

const BottomFooter = styled.div`
  background-color: #009f4f;
  color: white;
  padding: 2rem;
  margin-top: 2rem;
  font-size: 1.5rem;
  text-align: center;
  position: absolute;
  top: 100%;
  width: 100%;
`;

const Footer = () => {
  return (
    <BottomFooter >
      <p>Copyright &copy; Edamame Inc. 2023</p>
    </BottomFooter>
  );
};

export default Footer;
