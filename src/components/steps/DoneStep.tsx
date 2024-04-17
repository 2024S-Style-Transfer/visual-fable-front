'use client';

import React from 'react';
import styled from '@emotion/styled';
import { CommonWrapper, SectionTitle } from '../common/styled';
import useGenerateStore from '@/store/generateStore';

const DoneStep: React.FC = () => {
  const { generatedItems } = useGenerateStore();

  return (
    <DoneStepWrapper>
      <SectionTitle>입력된 텍스트와 생성된 이미지</SectionTitle>
      {generatedItems.map((item) => (
        <GeneratedItemWrapper key={item.id}>
          <PromptText>{item.promptText}</PromptText>
          {/* TODO: 추후 next/image 적용 */}
          <img src={item.generatedImage} alt="generated" />
        </GeneratedItemWrapper>
      ))}
    </DoneStepWrapper>
  );
};

const PromptText = styled.div`
  width: 60%;
  min-height: 200px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: #1c2025;
  background: #fff;
  border: 1px solid #dae2ed;
  box-shadow: 0px 2px 2px #f3f6f9;
`;
const GeneratedItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;

  & > img {
    width: 40%;
  }

  & + & {
    margin-top: 16px;
  }
`;

const DoneStepWrapper = styled(CommonWrapper)`
  overflow-y: auto;
  justify-content: flex-start;
`;

export default DoneStep;
