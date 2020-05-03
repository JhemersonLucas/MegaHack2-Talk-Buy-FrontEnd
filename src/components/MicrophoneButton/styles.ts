import styled from 'styled-components';
import { FaMicrophone } from 'react-icons/fa';

export const Border = styled.div`
  border-radius: 200px;
  margin: 20px auto;
  width: 150px;
  height: 150px;
  padding: 30px;
  cursor: pointer;

  border: double 2px transparent;
  border-image-source: radial-gradient(circle at top right, #fff, #f61a58);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 150px;
  margin: 40px auto;
  width: 180px;
  height: 180px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(FaMicrophone)`
  color: #ff4001;
  font-size: 30px;
`;

export const Button = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
`;
