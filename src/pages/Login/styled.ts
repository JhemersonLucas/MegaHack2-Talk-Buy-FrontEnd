import styled from 'styled-components';

export const Container = styled.div``;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Input = styled.input`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  border: none;
  margin-bottom: 20px;

  &:focus {
    outline: none;
  }
`;
