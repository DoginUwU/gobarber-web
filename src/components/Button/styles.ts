import { shade } from 'polished';
import styled from 'styled-components';

const Container = styled.button`
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
`;

export { Container };
