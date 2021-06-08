import * as React from 'react';
import styled from 'styled-components';

interface IItemProps {}

const StyledDiv = styled.div`
  margin: 5px 0 5px 0;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

function TodoItem({ id, completed, content }: TodoType) {
  return (
    <StyledDiv>
      <input type="checkbox" checked={completed} />
      <span style={{ fontSize: '18px', marginRight: 'auto' }}>{content}</span>
      <button>delete</button>
    </StyledDiv>
  );
}

export default TodoItem;
