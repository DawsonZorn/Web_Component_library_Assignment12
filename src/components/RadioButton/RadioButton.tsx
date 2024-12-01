import React, { useState } from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

// Styled components for radio group, labels, and inputs
const StyledRadioButtonGroup = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ disabled }) => (disabled ? 'lightgray' : 'white')};
  padding: 8px;
  border: 1px solid #ebe8e8;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
`;

const RadioButtonLabel = styled.label<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: 6px;
`;

const RadioButtonInput = styled.input`
  margin-right: 6px;
`;

// RadioButton component
const RadioButton: React.FC<RadioButtonProps> = ({ items, disabled }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <StyledRadioButtonGroup  role='group' disabled={disabled}>
      {items.map((item) => (
        <RadioButtonLabel key={item.value} disabled={disabled}>
          <RadioButtonInput
            type="radio"
            id={item.value}
            value={item.value}
            name="radioGroup"
            disabled={disabled}
            checked={selectedValue === item.value}
            onChange={handleChange}
          />
          {item.label}
        </RadioButtonLabel>
      ))}
    </StyledRadioButtonGroup>
  );
};

export default RadioButton;