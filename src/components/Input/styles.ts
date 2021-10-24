import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  background: #232129;
  border-radius: 10px;
  padding: 16px;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;
  }

  svg {
    margin-right: 16px;
  }
`;

export { Container };
