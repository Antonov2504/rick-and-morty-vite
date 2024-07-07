import styled from 'styled-components';
import { Box } from '@mantine/core';

export const Container = styled(Box)`
  flex: 1;
  overflow: auto;
  position: relative;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 15px;
  padding: 2vw;
`;

export const Loading = styled.p`
  width: 100%;
  padding: 15px;
  margin: 0;
  text-align: center;
  background-color: rgba(0 0 0 / 70%);
  box-shadow: -1px 0px 20px #000000;
  color: #c4dd52;
  font-size: 42px;
  line-height: 1.2;
`;

export const Error = styled(Loading)`
  color: #e43b19;
`;
