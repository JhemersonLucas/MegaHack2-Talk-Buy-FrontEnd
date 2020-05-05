import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  width: 100%;
  padding: 10px 40px;
  text-align: center;
`;

export const DataContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 0 20px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 50px;
`;

export const Title = styled.div`
  margin-top: 50px;
  font-size: 1.8em;
  line-height: 40px;
  font-weight: 600;
  text-align: center;
`;

export const Data = styled.p`
  color: #000;
  font-size: 1.2em;
  margin-bottom: 15px;

  @media (max-width: 550px) {
    font-size: 1em;
    line-height: 30px;
  }
`;
