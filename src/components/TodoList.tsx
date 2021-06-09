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
  todos: object[];
  selectedMenu: selectedMenuType;
}

function TodoList({ todos, selectedMenu, handleChange }) {
  // localStorage.clear();

  React.useEffect(() => {
    renderItems(todos, selectedMenu);
  }, [todos]);

  const handleItem = (id, completed, deleteFlag = false) => {
    handleChange(id, completed, deleteFlag);
  };

  const renderItems = (todos: object[], selectedMenu: selectedMenuType) => {
    switch (selectedMenu) {
      case 'All':
        return todos.map(({ id, completed, content }) => {
          return (
            <TodoItem
              key={id}
              handleItem={handleItem}
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
                handleItem={handleItem}
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
                handleItem={handleItem}
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
      <StyledButton onClick={handleDelete}>
        <DeleteOutlineIcon style={{ fontSize: 'small' }} />
        <span style={{ marginLeft: '5px' }}>delete all</span>
      </StyledButton>
    );
  };

  const handleDelete = () => {
    console.log('여기?');
    handleChange('all', true, true);
  };

  return (
    <StyledDiv>
      {renderItems(todos, selectedMenu)}
      {selectedMenu === 'Completed' && <DeleteButton />}
    </StyledDiv>
  );
}

export default TodoList;
