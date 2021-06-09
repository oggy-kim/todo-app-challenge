import * as React from 'react';
import styled from 'styled-components';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const StyledDiv = styled.div`
  margin: 5px 0 5px 0;
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

interface ITodoItemProps {
  // ! typescript에서 id~content를 하나로 합질 수 없는지 보기
  id: todoType['id'];
  completed: todoType['completed'];
  content: todoType['content'];
  deleteIcon?: boolean;
  handleChange: (
    id: 'all' | number,
    completed: boolean,
    deleteFlag: boolean,
  ) => void;
}

function TodoItem({
  id,
  completed,
  content,
  deleteIcon = false,
  handleChange,
}: ITodoItemProps) {
  const onHandleItemChange: ITodoItemProps['handleChange'] = (
    id,
    completed,
    deleteFlag,
  ) => {
    handleChange(id, completed, deleteFlag);
  };

  return (
    <StyledDiv>
      <input
        type="checkbox"
        onChange={(e) => onHandleItemChange(id, completed, false)}
        checked={completed}
      />
      <span
        style={{
          fontSize: '18px',
          marginRight: 'auto',
          textDecoration: completed ? 'line-through' : 'none',
          color: completed ? 'gray' : '',
        }}
      >
        {content}
      </span>
      <DeleteOutlineIcon
        onClick={(e) => onHandleItemChange(id, completed, true)}
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
