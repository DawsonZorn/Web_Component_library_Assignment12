import React from 'react';
import styled from 'styled-components';

export interface TextProps {
  content: string;  // Text content to display
}

// Styled component for the text
const StyledText = styled.p<{ size?: 'small' | 'medium' | 'large' }>`
  font-size: ${({ size }) => (size === 'large' ? '20px' : size === 'small' ? '12px' : '16px')};  // Dynamic font size
  margin: 0;  // Remove default margin
`;

export const Text: React.FC<TextProps> = ({ content }) => {
  return <p>{content}</p>;  // Render the text content in a paragraph
};