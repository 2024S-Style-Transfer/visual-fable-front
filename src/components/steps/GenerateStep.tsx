'use client';

import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { TextArea, Button, TextAreaBorder } from '../common/styled';
import useGlobalState from '@/store/globalStore';
import useGenerateStore, { STEP } from '@/store/generateStore';
import { MAX_GENERATE_TEXT_LENGTH } from '@/constants/generate';
import { IndexButton, IndexButtonWrapper, getIndexButtonStatus } from '../common/IndexButton';
import { generateImages } from '@/service/generate';

const GenerateStep: React.FC = () => {
  const { setIsGlobalLoading, isLogin } = useGlobalState();
  const { fableTexts, setTargetFableText, selectedExampleItem, setStep, setGeneratedItems, clearStore } =
    useGenerateStore();

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

  const handleCancel = () => {
    clearStore();
  };

  const handleCreateTextToImages = async () => {
    if (!selectedExampleItem) {
      return;
    }

    const filteredFableTexts = fableTexts.filter((text) => text !== '');

    // 중간에 빈 텍스트가 있는 경우 예외처리
    if (filteredFableTexts.length !== currentIndex && fableTexts[currentIndex] === '') {
      alert('텍스트를 입력해주세요.');
      return;
    }

    try {
      setIsGlobalLoading(true);

      const data = await generateImages(selectedExampleItem.id, filteredFableTexts);
      setGeneratedItems(data.generatedItems);
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
    <TextAreaWrapper>
      <TextAreaHeaderWrapper>
        <TextAreaTitle>프롬프트</TextAreaTitle>

        <IndexButtonWrapper>
          {fableTexts.map((text, index) => (
            <IndexButton
              key={index}
              $status={getIndexButtonStatus({ targetText: text, targetIndex: index, currentIndex, isLogin: isLogin! })}
              onClick={() => handleChangeIndex(index)}
            >
              {index + 1}
            </IndexButton>
          ))}
        </IndexButtonWrapper>
      </TextAreaHeaderWrapper>

      <TextAreaBorder>
        <GenerateTextArea
          placeholder="Enter the text to be generated."
          value={fableTexts[currentIndex]}
          onChange={(e) => setTargetFableText(currentIndex, e.target.value)}
        />
      </TextAreaBorder>
      <CounterWrapper>
        <CounterText>
          {fableTexts[currentIndex].length} / {MAX_GENERATE_TEXT_LENGTH}
        </CounterText>
      </CounterWrapper>

      <FooterButtonWrapper>
        <Button className="Cancel" onClick={handleCancel}>
          취소
        </Button>
        <Button className="Dr" onClick={handleCreateTextToImages} disabled={disabledConfirm}>
          생성
        </Button>
      </FooterButtonWrapper>
    </TextAreaWrapper>
  );
};

const FooterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${Button} + ${Button} {
    margin-left: 12px;
  }
`;
const CounterText = styled.p`
  font-size: 28px;
  color: #aaaaaa;
  margin-right: 24px;
`;
const CounterWrapper = styled.div`
  margin: 12px 0 24px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const GenerateTextArea = styled(TextArea)`
  min-height: 387px;
  max-height: 387px;
`;
const TextAreaTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
`;
const TextAreaHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 28px;
`;
const TextAreaWrapper = styled.div`
  width: 100%;
  padding: 32px 24px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0px #0000001a;
`;

export default GenerateStep;
