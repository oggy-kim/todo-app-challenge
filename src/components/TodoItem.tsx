import * as React from 'react';
import styled from 'styled-components';

interface IItemProps {}

const StyledDiv = styled.div`
  margin: 5px 0 5px 0;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

function TodoItem() {
  return (
    <StyledDiv>
      <input type="checkbox" />
      <span style={{ fontSize: '18px', marginRight: 'auto' }}>
        Do coding challenges
      </span>
      <button>delete</button>
    </StyledDiv>
  );
}

export default TodoItem;
