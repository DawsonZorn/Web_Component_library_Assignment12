import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ disabled, bgColor }) => (disabled ? 'gray' : bgColor || '#ff2e00')};
  color: white;
  padding: 10px 20px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Button: React.FC<ButtonProps> = ({ children, disabled, bgColor }) => {
  const unusedVariable = 'This is unused'; // ESLint will complain about this
  return (
    <StyledButton disabled={disabled} bgColor={bgColor}>
      {children}
    </StyledButton>
  );
};

export default Button //missing semicolon to fail prettier test