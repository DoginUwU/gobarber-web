import { useField } from '@unform/core';
import {
  FocusEvent,
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  icon: Icon,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const { fieldName, defaultValue, registerField } = useField(name);

  const handleInputFocus = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      event.target.readOnly = false;
      setIsFocused(true);
    },
    [],
  );

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        ref={inputRef}
        defaultValue={defaultValue}
        readOnly
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
