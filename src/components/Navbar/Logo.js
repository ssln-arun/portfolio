import React from "react";
import styled from "styled-components";

const Header = styled.header`
  font-family: 'Poppins', sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: white;
  background-color: inherit;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-radius: 8px;
`;

const Bracket = styled.span`
  color: #a259ff;
`;

const Name = styled.span`
  color: white;
`;

const Slash = styled.span`
  color: #a259ff;
`;

const Logo = () => (
  <Header>
    <Bracket>&lt;</Bracket>
    <Name>ARUNAGIRI</Name>
    <Slash>/</Slash>
    <Name> </Name>
    <Bracket>&gt;</Bracket>
  </Header>
);

export default Logo;