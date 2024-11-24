import React from 'react';
import styled from 'styled-components';

export interface RadioButtonProps {
  label: string;  // Label for the radio button
  name: string;  // Name attribute for grouping
  value: string;  // Value of the radio button
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;  // Change handler
}

// Styled component for the radio button
const StyledRadio = styled.input`
  margin-right: 10px;  // Space between radio and label
`;

const StyledLabel = styled.label`
  font-size: 14px;  // Font size for the label
`;

export const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, onChange }) => {
  return (
    <StyledLabel>
      <StyledRadio type="radio" name={name} value={value} onChange={onChange} />
      {label}
    </StyledLabel>
  );
};
