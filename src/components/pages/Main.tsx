'use client';

import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import PreGenerateStep from '../steps/PreGenerateStep';
import GenerateStep from '../steps/GenerateStep';
import DoneStep from '../steps/DoneStep';
import useGlobalStore from '@/store/globalStore';
import { GlobalLoading } from '../common/Loading';
import useGenerateStore, { STEP } from '@/store/generateStore';

const Main: React.FC = () => {
  const { isGlobalLoading } = useGlobalStore();
  const { step, clearStore } = useGenerateStore();

  useEffect(() => {
    return clearStore;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <MainWrapper>
        {step === STEP.PRE_GENERATE && <PreGenerateStep />}
        {step === STEP.GENERATE && <GenerateStep />}
        {step === STEP.DONE && <DoneStep />}
      </MainWrapper>
      {isGlobalLoading && <GlobalLoading />}
    </>
  );
};

const MainWrapper = styled.section``;

export default Main;
