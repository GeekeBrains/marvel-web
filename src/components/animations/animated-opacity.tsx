import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AnimatedOpacity = styled.div`
  animation: ${fadeIn} 1s ease-in-out forwards;
`;
