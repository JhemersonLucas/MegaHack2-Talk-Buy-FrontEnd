import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  max-width: 700px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15vh;
  color: white;
  font-size: 2.5em;
  font-weight: 300;
  text-align: center;
  padding: 20px;

  @media (max-width: 670px) {
    font-size: 2em;
  }

  @media (max-width: 400px) {
    font-size: 1.5em;
  }
`;

export const SubtitleContainer = styled.div`
  font-size: 2em;
  font-weight: 100;
  margin: 30px 50px;
  text-align: center;

  @media (max-width: 670px) {
    font-size: 1.6em;
  }

  @media (max-width: 400px) {
    font-size: 1.2em;
  }
`;

export const SearchContainer = styled.div`
  font-style: italic;
  margin-top: 40px;
  font-size: 1.5em;
`;

export const NoResult = styled.span`
  margin-top: 30px;
  font-size: 1.5em;
  font-weight: 100;
  max-width: 80vw;
  text-align: center;
`;
