import styled from 'styled-components';

export const CardDetail = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  padding: 20px;
  margin: 15vh 10vw;
  border-radius: 10px;
  background-color: rgba(0 0 0 / 70%);
  box-shadow: -1px 5px 20px #c4dd52;
`;

export const Image = styled.img`
  width: 270px;
  border: 0;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: -1px 5px 20px #c4dd52;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #c4dd52;
  font-size: 34px;
  line-height: 1.2;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 4px;
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

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
