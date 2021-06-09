import * as React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import InputForm from './components/InputForm';
import Menu from './components/Menu';
import TodoList from './components/TodoList';

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 608px;
  flex-direction: column;
  align-items: center;
`;

const StyledH2 = styled.h2`
  font-size: 36px;
  margin-bottom: 58px;
`;

function App() {
  const [selectedMenu, setSelectedMenu] = React.useState<
    'All' | 'Active' | 'Completed'
  >('All');

  const [todos, setTodos] = React.useState<TodoType[]>([]);

  React.useEffect(() => {
    const existingItems = localStorage.getItem('todos');
    const todos = existingItems ? JSON.parse(existingItems) : [];
    setTodos(todos);
  }, []);

  React.useEffect(() => {
    renderTodoList();
  }, [todos]);

  const onHandleSubmit = (newTodo: TodoType) => {
    const changedTodos = todos.concat(newTodo);
    setTodos(changedTodos);
    localStorage.setItem('todos', JSON.stringify(changedTodos));
  };

  const onHandleChange = (id, completed, deleteFlag) => {
    let changedTodos;
    if (id === 'all') {
      changedTodos = todos.filter((todo) => {
        return todo.completed !== true;
      });
      setTodos(changedTodos);
    } else if (deleteFlag) {
      changedTodos = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(changedTodos);
    } else {
      changedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !completed };
        }
        return { ...todo };
      });
      setTodos(changedTodos);
    }

    localStorage.setItem('todos', JSON.stringify(changedTodos));
  };

  const renderTodoList = () => {
    return (
      <>
        <TodoList
          handleChange={onHandleChange}
          todos={todos}
          selectedMenu={selectedMenu}
        />
      </>
    );
  };

  return (
    <StyledContainer>
      <StyledH2>#todo</StyledH2>
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <InputForm handleSubmit={onHandleSubmit} />
      {renderTodoList()}
      <Footer />
    </StyledContainer>
  );
}

export default App;
