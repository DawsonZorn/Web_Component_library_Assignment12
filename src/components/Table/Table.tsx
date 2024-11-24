import React from 'react';

import styled from 'styled-components';


// Define TableProps to specify rows and columns
export interface TableProps {
  headers: string[];  // Table headers
  rows: string[][];  // Table rows
}

// Styled components for the table
const StyledTable = styled.table`
  width: 100%;  // Full width
  border-collapse: collapse;  // Collapse borders
`;

const StyledHeader = styled.thead`
  background-color: #f2f2f2;  // Header background color
`;

const StyledRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;  // Zebra striping
  }
`;

const StyledCell = styled.td`
  padding: 10px;  // Cell padding
  border: 1px solid #ddd;  // Cell border
`;

export const Table: React.FC<TableProps> = ({ headers, rows }) => {
  return (
    <StyledTable>
      <StyledHeader>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </StyledHeader>
      <tbody>
        {rows.map((row, rowIndex) => (
          <StyledRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <StyledCell key={cellIndex}>{cell}</StyledCell>
            ))}
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  );
};