import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 700px;
  padding: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;
  place-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      width: 100%;
      background: #232129;
      color: #f4ede8;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;

      & + input {
        margin-top: 8px;
      }
    }

    button {
      width: 100%;
      background: #ff9000;
      border-radius: 10px;
      border: 0;
      padding: 16px;
      color: #312e38;
      font-weight: 500;
      margin-top: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    > a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    gap: 16px;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export { Container, Content, Background };
