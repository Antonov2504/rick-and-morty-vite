import ArrowRight from '@src/assets/icons/icon-arrow-right.svg?react';

import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  padding: 1vh 2vw;
  background-color: rgba(0 0 0 / 70%);
  box-shadow: 0px 3px 20px #000000;
`;

export const Side = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #c4dd52;
  font-weight: bold;
  font-size: 42px;
  line-height: 1.1;
`;

export const BackButton = styled.button`
  width: 35px;
  height: 35px;
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const BackIcon = styled(ArrowRight)`
  path {
    fill: #c4dd52;
  }
`;

export const Label = styled.p`
  margin: 0;
  color: #54aa59;
  font-size: 24px;
  line-height: 1.25;
`;

export const Value = styled.p`
  margin: 0;
  color: #6bb0c8;
  font-size: 24px;
  line-height: 1.25;
`;
