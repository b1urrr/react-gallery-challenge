import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h1>React Gallery</h1>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  h1 {
    font-size: 55px;
  }
`;

export default Header;
