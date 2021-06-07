import * as React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import InputForm from './components/InputForm';
import Menu from './components/Menu';
import TodoList from './components/TodoList';

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 600px;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <StyledContainer>
      <h2>#todo</h2>
      <Menu />
      <InputForm />
      <TodoList />
      <Footer />
    </StyledContainer>
  );
}

export default App;
