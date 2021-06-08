import * as React from 'react';
import styled from 'styled-components';

const StyledText = styled.p`
  color: #a9a9a9;
  font-size: 14px;
  flex: 0 0 24px;
`;

function Footer() {
  return (
    <StyledText style={{ color: '#A9A9A9' }}>
      created by <strong>Oggy Kim</strong> - devChallenges.io
    </StyledText>
  );
}

export default Footer;
