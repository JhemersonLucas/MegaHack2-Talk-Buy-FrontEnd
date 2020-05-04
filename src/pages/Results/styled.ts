import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 70%;
`;

export const Title = styled.div`
  font-size: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const ListContainer = styled.div`
  background-color: #fff;
  display: flex;
  height: 100%;
  flex-direction: column;
  max-width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 50px;
  margin-top: 50px;
  @media (max-width: 670px) {
    padding: 20px;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const EmptyList = styled.span`
  color: #000;
  font-weight: 600;
  font-size: 1.5em;
  align-self: center;
  font-align: center;
  margin-top: 50px;
`;

export const BackButton = styled(Link)`
  margin: 50px;
  background-color: #fff;
  color: #666;
  padding: 20px;
  border: 2px solid #ccc;
  font-size: 1.5em;
  text-align: center;
  text-decoration: none;
`;
