import * as React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const StyledDiv = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface ITodoListProps {
  todos: object[];
}

function TodoList({ todos }: ITodoListProps) {
  // localStorage.clear();

  const renderItems = (todos: object[]) => {
    return todos.map(({ id, completed, content }) => {
      return <TodoItem id={id} completed={completed} content={content} />;
    });
  };

  return <StyledDiv>{renderItems(todos)}</StyledDiv>;
}

export default TodoList;
