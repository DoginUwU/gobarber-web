import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  background: #232129;
  color: #666360;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

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
