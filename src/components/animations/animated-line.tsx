import styled, { keyframes } from 'styled-components';

const animateLeft = keyframes`
  0% {
    left: 0;
    width: 0;
    background-color: red;
  }
  100% {
    left: 0;
    width: 100%;
    background-color: transparent;
  }
`;

export const AnimatedLine = styled.div`
  position: relative;
  height: 5.38px;
  width: 100%;
  background-color: transparent;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #ec1d24;
    animation: ${animateLeft} 1s ease forwards;
  }
`;
