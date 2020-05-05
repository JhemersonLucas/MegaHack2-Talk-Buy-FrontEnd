import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 50%;
  margin-top: 50px;
  max-width: 700px;
  text-align: center;
  padding: 0 20px;
`;

export const Title = styled.span`
  font-size: 2.2em;
  color: #fff;
  line-height: 50px;
  font-weight: 500;

  @media (max-width: 550px) {
    font-size: 1.5em;
    line-height: 40px;
  }
`;

export const ButtonsContainer = styled.div`
  background-color: #fff;
  padding: 40px 20px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ButtonLink = styled(Link)`
  border: 2px #bbb solid;
  background-color: transparent;
  padding: 30px;
  text-decoration: none;
  color: #666;
  border-radius: 20px;
  font-size: 1.5em;

  &:first-child {
    margin-bottom: 20px;
  }

  &:hover {
    color: #000;
    border-color: #000;
  }

  transition: color 0.5s, border-color 0.5s;
`;
