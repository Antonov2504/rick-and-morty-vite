import styled, { keyframes } from 'styled-components';

const spin = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
}
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0 0 0 / 70%);
  box-shadow: -1px 0px 20px #000000;
`;

export const Loader = styled.div`
  width: 25px;
  height: 30px;
  border: 5px solid #c4dd52;
  border-radius: 50%;
  background-color: transparent;
  animation: ${spin} 2s infinite linear alternate-reverse;
`;
