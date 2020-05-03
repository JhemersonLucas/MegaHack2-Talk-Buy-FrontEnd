import React, { ButtonHTMLAttributes } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
    <FiChevronRight />
  </Container>
);
export default Button;
