import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 18px;
  height: 56px;
  width: 100%;
  margin-bottom: 30px;
`;

const StyledForm = styled.form`
  display: flex;
  width: 100%;
`;

const StyledInput = styled.input`
  border-radius: 12px;
  flex-basis: 0;
  border: 1px solid #bdbdbd;
  flex-grow: 1;
  padding: 10px;
  font-size: 14px;
`;

const StyledButton = styled.button`
  background: #2f80ed;
  margin-left: 25px;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border: none;
  border-radius: 12px;
  font-size: 14px;
  color: #fff;
  width: 109px;
  height: 56px;

  ${(props) =>
    props.disabled &&
    css`
      background-color: gray;
      pointer-events: none;
    `}
  &:hover {
    cursor: pointer;
  }
`;

interface IFormProps {
  handleSubmit: (newTodo: todoType) => void;
}

function InputForm({ handleSubmit }: IFormProps) {
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newTodo: todoType = {
      id: Date.now(),
      completed: false,
      content: inputValue,
    };
    handleSubmit(newTodo);
    setInputValue('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setInputValue(e.target.value);
  };

  return (
    <StyledDiv>
      <StyledForm>
        <StyledInput
          type="text"
          placeholder="add details"
          onChange={(e) => handleChange(e)}
          value={inputValue}
        />
        <StyledButton
          onClick={(e) => handleClick(e)}
          disabled={!inputValue.length}
        >
          Add
        </StyledButton>
      </StyledForm>
    </StyledDiv>
  );
}

export default InputForm;
