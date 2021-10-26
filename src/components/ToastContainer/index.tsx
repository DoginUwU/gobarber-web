import React from 'react';
import { useTransition } from 'react-spring';
import type { ToastMessage } from '../../@types/toast';
import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({
  messages,
}: ToastContainerProps) => {
  const messagesWithTransitions = useTransition(messages, {
    keys: message => message.id,
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions((props, message) => (
        <Toast key={message.id} style={props} toast={message} />
      ))}
    </Container>
  );
};

export default ToastContainer;
