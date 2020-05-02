import styled from 'styled-components';

export const Container = styled.main`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(#ff3e03, #f61a58);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20vh;
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
`;
