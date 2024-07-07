import styled, { keyframes } from 'styled-components';
import LogoImage from '@src/assets/images/logo.svg?react';
import PortalImage from '@src/assets/images/portal.png';

const spin = keyframes`
0% {
  transform: rotate(0deg) scale(1);
}

25% {
  transform: rotate(90deg) scale(1.1);
}

50% {
  transform: rotate(180deg) scale(1);
}

75% {
  transform: rotate(270deg) scale(0.9);
}

100% {
  transform: rotate(360deg) scale(1);
}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  padding: 0 20px 15px;
  position: relative;
`;

export const Logo = styled(LogoImage)`
  width: 70%;
  margin-top: 20px;
  z-index: 1;
`;

export const Portal = styled.div`
  width: 65px;
  height: 65px;
  background: url(${PortalImage}) center/contain no-repeat;
  animation: ${spin} 30s infinite linear alternate-reverse;
  position: absolute;
  top: 8vw;
  right: 5vw;
`;
