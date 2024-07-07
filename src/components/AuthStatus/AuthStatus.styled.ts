import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;

export const Text = styled.p`
  margin: 0 0 20px;
  color: #6bb0c8;
  font-size: 24px;
  line-height: 1.25;
`;

export const TextLink = styled(Link)`
  padding-bottom: 3px;
  border-bottom: 1px solid #c4dd52;
  color: #c4dd52;
  text-decoration: none;
  cursor: pointer;
`;
