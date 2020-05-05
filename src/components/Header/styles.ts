import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-items: center;
  place-content: center;
  background: transparent;
  height: 70px;
`;

export const Content = styled.header`
  flex: 1;
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15px;

  img {
    max-height: 40px;
  }

  #logo {
    max-height: 60px;
    position: relative;
    top: 6px;
    left: -15px;
  }

  > div {
    > button {
      > svg {
        margin-right: 15px;
      }
    }
  }
`;
