import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.tfoot`
  background-color: #797979;
`;

const TableFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default TableFooter;