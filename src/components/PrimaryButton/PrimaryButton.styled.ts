import styled from 'styled-components';

export const Button = styled.button`
  min-width: 120px;
  padding: 10px;
  background-color: #54aa59;
  border-radius: 10px;
  border: 0;
  color: #c4dd52;
  font-size: 20px;
  line-height: 1.25;
  transition: 0.3s ease-in-out;
  transition-property: color, background-color, box-shadow;
  box-shadow: -1px 5px 20px #54aa59;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #c4dd52;
    color: #54aa59;
    box-shadow: -1px 5px 20px #c4dd52;
  }

  &:disabled {
    background-color: #cccccc;
    color: #c0c0c0;
    cursor: not-allowed;
    pointer-events: none;
    box-shadow: none;
  }
`;
