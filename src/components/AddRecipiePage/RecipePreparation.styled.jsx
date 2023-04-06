import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  font-size: 24px;
  justify-content: space-between;
  font-weight: 600;
  margin-top: 100px;
  color: #3e4462;
`;

export const Textarea = styled.textarea`
  padding: 20px;
  height: 224px;
  width: 100%;
  color: #333333;
  background-color: #f5f5f5;
  border: 0;
  border-radius: 6px;
  margin-top: 32px;
  box-sizing: border-box;
  resize: none;
  ::placeholder {
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
  }
`;
