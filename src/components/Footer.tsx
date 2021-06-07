import * as React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  color: #a9a9a9;
  flex: 0 0 20px;
`;

function Footer() {
  return (
    <StyledText style={{ color: '#A9A9A9' }}>
      created by <strong>Oggy Kim</strong> - devChallenges.io
    </StyledText>
  );
}

export default Footer;
