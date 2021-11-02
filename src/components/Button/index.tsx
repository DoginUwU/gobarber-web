import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  loading,
  disabled,
  ...rest
}: ButtonProps) => {
  return (
    <Container type="button" {...rest} disabled={disabled || loading}>
      {loading ? 'Carregando...' : children}
    </Container>
  );
};

export default Button;
