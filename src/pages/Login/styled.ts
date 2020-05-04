import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
`;

export const Form = styled.form`
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
