import styled from 'styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  background: linear-gradient(#ff3e03, #f61a58);
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 0px 15px;
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
`;

export const SubtitleContainer = styled.div`
  margin-top: 30px;
  font-size: 2em;
  font-weight: 100;
  max-width: 80vw;
  text-align: center;
`;
