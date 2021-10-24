import { InputHTMLAttributes, FocusEvent } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }: InputProps) => {
  const handleEnableInput = (event: FocusEvent<HTMLInputElement>) => {
    event.target.readOnly = false;
  };

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input readOnly onFocus={handleEnableInput} {...rest} />
    </Container>
  );
};

export default Input;
