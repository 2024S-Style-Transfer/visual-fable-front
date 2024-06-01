'use client';

import React from 'react';
import useGlobalStore from '@/store/globalStore';
import { GlobalLoading } from '../common/Loading';
import { CommonWrapper, Section } from '../common/styled';
import Navigator from '../common/Navigator';
import Footer from '../common/Footer';

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isGlobalLoading } = useGlobalStore();

  return (
    <>
      <CommonWrapper>
        <Navigator />

        <Section>{children}</Section>
        
      </CommonWrapper>
      <Footer/>
      
      {isGlobalLoading && <GlobalLoading />}
    </>
  );
};

export default DefaultLayout;
