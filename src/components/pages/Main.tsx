'use client';

import React from 'react';
import styled from '@emotion/styled';

const Main: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <MainWrapper>{children ?? 'Main'}</MainWrapper>;
};

const MainWrapper = styled.div`
  color: blue;
`;

export default Main;
