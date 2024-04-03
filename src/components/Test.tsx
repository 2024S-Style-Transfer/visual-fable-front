'use client';

import React from 'react';
import styled from 'styled-components';

const Test: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <TestWrapper>{children ?? 'Test'}</TestWrapper>;
};

const TestWrapper = styled.div`
  color: blue;
`;

export default Test;
