import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    align-items: center;
    background: #fff;
    margin: 20px 20px;
    padding: 0px 15px;
    border-radius: 8px;
    color: #666;

    input {
      height: 60px;
      font-size: 22px;
      color: #666;
      font-weight: 700;
      border: 0;
      flex: 1;
      background: transparent;
    }

    svg {
      margin-right: 10px;
    }

    button {
      background: transparent;
      border: 0px;
      height: 100%;
      width: 50px;
      padding-left: 15px;
      position: relative;
      right: -15px;
    }
  }
`;

export const Title = styled.div`
  font-size: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const ListContainer = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 50px;
  margin-top: 20px;
  @media (max-width: 670px) {
    padding: 20px;
  }

  @media (max-width: 400px) {
    padding: 10px;
  }

  button {
    border: 0px;
    text-decoration: none;
    background: transparent;
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
