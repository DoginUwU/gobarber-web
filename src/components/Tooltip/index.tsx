import { HTMLAttributes } from 'react';
import { Container } from './styles';

interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  ...rest
}: TooltipProps) => {
  return (
    <Container {...rest}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
