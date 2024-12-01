import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<LabelProps>`
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  background-color: ${({ disabled, bgcolor }) => (disabled ? 'lightgray' : bgcolor || 'blue')};
  padding: 4px 8px;
  border-radius: 5px;
`;

const Label: React.FC<LabelProps> = ({ children, htmlFor, disabled, bgcolor, fontWeight }) => {
  return (
    <StyledLabel htmlFor={htmlFor} disabled={disabled} bgcolor={bgcolor} fontWeight={fontWeight}>
      {children}
    </StyledLabel>
  );
};

export default Label;