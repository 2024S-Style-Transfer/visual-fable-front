'use client';

import React, { useEffect } from 'react';
import PreGenerateStep from '../steps/PreGenerateStep';
import GenerateStep from '../steps/GenerateStep';
import DoneStep from '../steps/DoneStep';
import useGenerateStore, { STEP } from '@/store/generateStore';

const Main: React.FC = () => {
  const { step, clearStore, generatedItems } = useGenerateStore();

  useEffect(() => {
    return clearStore;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {step === STEP.PRE_GENERATE && <PreGenerateStep />}
      {step === STEP.GENERATE && <GenerateStep />}
      {step === STEP.DONE && <DoneStep generatedItems={generatedItems} />}
    </>
  );
};

export default Main;
