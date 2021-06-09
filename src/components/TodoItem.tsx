import * as React from 'react';
import styled from 'styled-components';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const StyledDiv = styled.div`
  margin: 5px 0 5px 0;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

function TodoItem({ id, completed, content, deleteIcon = false, handleItem }) {
  const handleChange = () => {
    console.log(id, completed);
    handleItem(id, completed);
  };

  const handleClick = () => {
    handleItem(id, completed, true);
  };

  return (
    <StyledDiv>
      <input type="checkbox" onChange={handleChange} checked={completed} />
      <span
        style={{
          fontSize: '18px',
          marginRight: 'auto',
          textDecoration: completed && 'line-through',
          color: completed && 'gray',
        }}
      >
        {content}
      </span>
      <DeleteOutlineIcon
        onClick={handleClick}
        style={{
          visibility: deleteIcon ? 'visible' : 'hidden',
          cursor: 'pointer',
          color: '#BDBDBD',
        }}
      />
    </StyledDiv>
  );
}

export default TodoItem;
