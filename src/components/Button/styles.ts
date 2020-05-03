import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #3e8914;
  height: 56px;
  border-radius: 10px;
  border: 0px;
  padding: 0 16px;
  width: 100%;
  color: #fff;
  font-weight: 500;
  margin-top: 16px;
  font-size: 17px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.1, '#3da35d')};
  }

  svg {
    float: right;
  }
`;
