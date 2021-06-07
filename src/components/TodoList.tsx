import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

function TodoList() {
  return (
    <StyledDiv>
      <span>Do coding challenges</span>
      <span>Do coding challenges</span>
      <span>Do coding challenges</span>
    </StyledDiv>
  );
}

export default TodoList;
