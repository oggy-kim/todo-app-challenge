import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  flex: 0 0 56px;
`;

function InputForm() {
  return (
    <StyledDiv>
      <form>
        <input type="text" placeholder="add details" />
        <button type="submit">Add</button>
      </form>
    </StyledDiv>
  );
}

export default InputForm;
