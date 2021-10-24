import styled from 'styled-components';
import { shade } from 'polished';

import signUpBackgroundImg from '../../assets/sign-up-background.png';

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
  }

  > a {
    color: #f4ede8;
    display: block;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;
    gap: 16px;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;

const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export { Container, Content, Background };
