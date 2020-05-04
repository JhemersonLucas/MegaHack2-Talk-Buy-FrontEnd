import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
  height: 100vh;
  width: 100%;
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
  align-items: center;
  padding: 30px 15px;
  border: 0px solid #666;
  position: relative;

  button {
    border: 0;
    border-radius: 8px;
    padding: 10px 20px;
    display: flex;
    place-content: center;

    svg {
      font-size: 20px;
    }
  }

  > a {
    position: absolute;
    left: 20px;
    top: 15px;
    display: flex;
    align-items: center;
    text-decoration: none;
    border: 0;
    color: #343434;
  }
`;

export const SingleProduct = styled.div`
  border: 0px solid #666;
  background: #fff;
  border-radius: 10px;
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 700px;
  width: 100%;
  overflow: hidden;
  position: relative;

  & + div {
    margin-top: 20px;
  }

  h2 {
    color: #666;
    font-weight: 700;
    text-align: left;
    font-size: 24px;
  }

  h3 {
    color: #ccc;
    font-weight: 700;
    text-align: left;
    font-size: 14px;
    float: flex-start;
    align-content: flex-start;
  }

  img {
    width: 70%;
    margin: 20px 30px;
    border-radius: 10px;
    max-width: 300px;
    border: 2px solid #ccc;
  }

  div {
    flex: 1;
    > span {
      color: #343434;
      text-align: center;
      background: #fff;
      padding: 3px 5px;
      border-right: 0px solid #e6e6e6;

      > span {
        font-size: 25px;
        font-weight: 700;
        margin-left: 5px;
      }
    }
  }

  section {
    font-size: 11px;
    color: #666;
    text-align: justify;
    margin-top: 15px;
    margin-right: 20px;
    line-height: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    height: 100%;

    > button {
      background: #d62828;
      color: #fff;
    }
  }
`;

interface ImgProps {
  link: string;
}

export const Img = styled.div<ImgProps>`
  width: 80%;
  max-width: 300px;
  max-height: 300px;
  min-height: 180px;
  margin-top: 10px;
  ${props =>
    props.link &&
    css`
      background: url(${props.link});
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;

interface ButtonProps {
  active: boolean;
}
export const Button = styled.button<ButtonProps>`
  ${props =>
    !props.active &&
    css`
      opacity: 0.3;
      cursor: not-allowed;
    `}
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
