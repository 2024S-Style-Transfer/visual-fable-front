'use client';

import React from 'react';
import styled from '@emotion/styled';

const Test: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <TestWrapper>{children ?? 'Test'}</TestWrapper>;
};

const TestWrapper = styled.div`
  color: blue;
`;

export default Test;
