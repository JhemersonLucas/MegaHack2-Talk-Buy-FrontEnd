import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  padding: 30px;
`;

export const Content = styled.div`
  background: blue;
  margin-left: 20px;
  flex: 1;
  border-radius: 8px;
  background: #fff;
  border: 2px solid #e6e6e6;
  position: relative;
  padding-bottom: 30px;
`;

export const FormContent = styled.div`
  background: #4682b4;
  width: 100%;
  max-width: 450px;
  border-radius: 8px;
  max-height: 600px;

  form {
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;

    h2 {
      margin-bottom: 0px;
      text-align: center;
    }

    span {
      color: #fff;
      font-weight: 700;
      margin-bottom: 5px;
      margin-left: 5px;
      margin-top: 15px;

      i {
        font-weight: 200;
        font-size: 13px;
      }
    }

    button {
      width: 100%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-items: center;
      place-content: center;
      background: #04d361;
      border-radius: 5px;
      border: 0;
      margin-top: 20px;
      color: #fff;
      transition: background-color 0.2s;
      font-weight: bold;

      &:hover {
        background: ${shade(0.2, '#04d361')};
      }

      svg {
        margin-right: 16px;
      }
    }
  }
`;

export const Tools = styled.div`
  width: calc(100% - 50px);
`;

export const Tool = styled.div`
  margin: 10px 20px;
  background: #f3f3f3;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  overflow: hidden;

  button {
    transform: translateX(-80px);
    transition: transform 0.2s;
    padding: 10px;
    border-radius: 50%;
    background: #b22222;
    color: #fff;
    border: 0;

    svg {
      color: #fff;
    }
  }

  &:hover div,
  &:hover button {
    transform: translateX(0px);
  }

  & + a {
    margin-top: 16px;
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

  > div {
    transform: translateX(-50px);
    transition: transform 0.2s;
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
      margin-bottom: 15px;
    }

    span {
      height: 10px;
      padding: 2px 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 13px;
      color: #fff;
      background: #4682b4;
      & + span {
        margin-left: 5px;
      }
    }
  }

  svg {
    margin-left: auto;
    color: #cbcbd6;
  }

  a {
    color: #cbcbd6;
    display: flex;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin: 40px 40px 20px 40px;
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const CountTools = styled.div`
  position: absolute;
  top: 50px;
  right: 40px;
  color: #666;
`;
