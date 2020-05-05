import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const toastTypes = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  display: flex;
  place-content: center;
  justify-items: center;
  align-items: center;
`;

export const Content = styled(animated.div)`
  max-width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
  color: #ff3e03;
  display: flex;
  align-items: center;
  background: #fff;
  filter: blur(0.6);

  > svg {
    color: #ff3e03;
    margin-right: 10px;
  }

  strong {
    flex: 1;
  }

  button {
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
    position: relative;
    right: -15px;
  }
`;
