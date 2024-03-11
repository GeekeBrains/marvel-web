import styled from 'styled-components';

export const AnimatedHoverableComponent = styled.div`
  position: relative;
  background-color: #000000;
  overflow: hidden;
  transition: background-color 0.5s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #ec1d24;
    transition: height 0.5s ease;
  }

  &:hover::before {
    height: 100%;
  }
`;
