import * as React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const StyledDiv = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function TodoList() {
  return (
    <StyledDiv>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </StyledDiv>
  );
}

export default TodoList;
