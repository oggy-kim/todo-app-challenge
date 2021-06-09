import * as React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const StyledDiv = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledButton = styled.div`
  background-color: #eb5757;
  border-radius: 4px;
  color: white;
  width: 124px;
  height: 40px;
  border: none;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  align-self: flex-end;
  margin-top: 27px;

  &:hover {
    cursor: pointer;
  }
`;

interface ITodoListProps {
  todos: todoType[];
  selectedMenu: selectedMenuType;
  handleChange: (
    id: 'all' | number,
    completed: boolean,
    deleteFlag: boolean,
  ) => void;
}

function TodoList({ todos, selectedMenu, handleChange }: ITodoListProps) {
  React.useEffect(() => {
    renderItems(todos, selectedMenu);
  }, [todos]);

  const onHandleItemChange: ITodoListProps['handleChange'] = (
    id,
    completed,
    deleteFlag = false,
  ) => {
    handleChange(id, completed, deleteFlag);
  };

  const renderItems = (todos: todoType[], selectedMenu: selectedMenuType) => {
    switch (selectedMenu) {
      case 'All':
        return todos.map(({ id, completed, content }) => {
          return (
            <TodoItem
              key={id}
              handleChange={onHandleItemChange}
              id={id}
              completed={completed}
              content={content}
            />
          );
        });
      case 'Active':
        return todos
          .filter(({ completed }) => completed !== true)
          .map(({ id, completed, content }) => {
            return (
              <TodoItem
                key={id}
                handleChange={onHandleItemChange}
                id={id}
                completed={completed}
                content={content}
              />
            );
          });
      case 'Completed':
        return todos
          .filter(({ completed }) => completed === true)
          .map(({ id, completed, content }) => {
            return (
              <TodoItem
                key={id}
                handleChange={onHandleItemChange}
                id={id}
                completed={completed}
                content={content}
                deleteIcon={true}
              />
            );
          });
    }
  };

  const DeleteButton = () => {
    return (
      <StyledButton
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          onHandleItemChange('all', true, true)
        }
      >
        <DeleteOutlineIcon style={{ fontSize: 'small' }} />
        <span style={{ marginLeft: '3px' }}>delete all</span>
      </StyledButton>
    );
  };

  return (
    <StyledDiv>
      {renderItems(todos, selectedMenu)}
      {selectedMenu === 'Completed' && <DeleteButton />}
    </StyledDiv>
  );
}

export default TodoList;
