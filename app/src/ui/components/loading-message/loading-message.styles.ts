import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  } 
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingImageStyle = styled.img`
  width: 4em;
  animation: ${rotateAnimation} 2s infinite linear;
`;
