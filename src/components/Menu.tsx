import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

function Menu() {
  return (
    <StyledDiv>
      <span>All</span>
      <span>Active</span>
      <span>Completed</span>
    </StyledDiv>
  );
}

export default Menu;
