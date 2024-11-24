import React from 'react';
import styled from 'styled-components';

export interface LabelProps {
  text: string;  // Text for the label
  htmlFor?: string;  // For attribute to link with input
}

// Styled component for the label
const StyledLabel = styled.label`
  font-weight: bold;  // Bold text
  font-size: 14px;  // Font size
  margin-bottom: 5px;  // Margin below the label
  display: block;  // Display block for better spacing
`;

export const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor}>
      {text}
    </label>
  );
};