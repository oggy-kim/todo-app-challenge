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

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const existingItems = localStorage.getItem('todos');
    const todos = existingItems ? JSON.parse(existingItems) : [];
    setTodos(todos);
  }, []);

  const onHandleSubmit = (newTodo: TodoType) => {
    const existingItems = localStorage.getItem('todos');
    const todos = existingItems ? JSON.parse(existingItems) : [];
    todos.push(newTodo);
    setTodos(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  return (
    <StyledContainer>
      <StyledH2>#todo</StyledH2>
      <Menu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <InputForm handleSubmit={onHandleSubmit} />
      <TodoList todos={todos} />
      <Footer />
    </StyledContainer>
  );
}

export default App;
