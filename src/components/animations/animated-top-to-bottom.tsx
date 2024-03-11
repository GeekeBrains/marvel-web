import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const AnimatedTopToBottom = styled.div`
  width: 100%;
  animation: ${appearFromTop} 1s ease-in-out forwards;
  margin-bottom: 30px;
  flex: 1;
`;
