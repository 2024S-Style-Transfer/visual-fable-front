'use client';

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { CommonWrapper, TextArea, SectionTitle, Button } from '../common/styled';
import useGlobalState from '@/store/globalStore';
import { wait } from '@/utils/time';
import useGenerateStore, { STEP } from '@/store/generateStore';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MOCK_GENERATED_ITEMS } from '@/mock/data';

const GenerateStep: React.FC = () => {
  const { setIsGlobalLoading } = useGlobalState();
  const { fableTexts, setTargetFableText, selectedExampleItem, setStep, setGeneratedItems } = useGenerateStore();

  // 현재 입력하고 있는 텍스트 index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const disabledConfirm = fableTexts.every((text) => text === '');

  const handleChangeIndex = (targetIndex: number) => {
    // 앞으로 넘어가는 경우 빈 텍스트이면 넘어가지 않도록
    if (currentIndex < targetIndex && fableTexts[currentIndex] === '') {
      alert('텍스트를 입력해주세요.');
      return;
    }

    setCurrentIndex(targetIndex);
  };

  const handleCreateTextToImages = async () => {
    const filteredFableTexts = fableTexts.filter((text) => text !== '');

    // 중간에 빈 텍스트가 있는 경우 예외처리
    if (filteredFableTexts.length !== currentIndex && fableTexts[currentIndex] === '') {
      alert('텍스트를 입력해주세요.');
      return;
    }

    try {
      setIsGlobalLoading(true);

      // FIXME: API 호출로 변경 필요
      // const data = await generateImages(selectedExampleItem?.data, filteredFableTexts);
      // setGeneratedItems(data.generatedItems);
      await wait(1);
      console.log(selectedExampleItem?.data, filteredFableTexts);
      setGeneratedItems(MOCK_GENERATED_ITEMS);
      setStep(STEP.DONE);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGlobalLoading(false);
    }
  };

  useEffect(() => {
    const preventClose = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', preventClose);
    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <GenerateStepWrapper>
      <SectionTitle>텍스트 입력</SectionTitle>

      <TextAreaTitle>텍스트 {currentIndex + 1}</TextAreaTitle>
      <TextArea
        placeholder={`${currentIndex + 1}번째 텍스트를 입력해주새요.`}
        value={fableTexts[currentIndex]}
        onChange={(e) => setTargetFableText(currentIndex, e.target.value)}
      />
      <IndexChangeButtonWrapper>
        <IconButton
          aria-label="arrow-back"
          onClick={() => handleChangeIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
          color="primary"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          aria-label="arrow-forward"
          onClick={() => handleChangeIndex(currentIndex + 1)}
          disabled={currentIndex === 9}
          color="primary"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </IndexChangeButtonWrapper>

      <Button onClick={handleCreateTextToImages} disabled={disabledConfirm}>
        생성
      </Button>
    </GenerateStepWrapper>
  );
};

const IndexChangeButtonWrapper = styled.div`
  margin: 12px 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const TextAreaTitle = styled.p`
  font-size: 12px;
  color: blue;
  margin-bottom: 8px;
`;
const GenerateStepWrapper = styled(CommonWrapper)``;

export default GenerateStep;
