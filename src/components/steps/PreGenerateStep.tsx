'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, CommonWrapper, TextArea, SectionTitle } from '../common/styled';
import useGlobalStore from '@/store/globalStore';
import { wait } from '@/utils/time';
import ExampleImageSelectModal from '../modals/ExampleImageSelectModal';
import { ExampleItem } from '@/types/service';
import { MOCK_EXAMPLE_IMAGES } from '@/mock/data';

const PreGenerateStep: React.FC = () => {
  const { setIsGlobalLoading } = useGlobalStore();

  const [exampleText, setExampleText] = useState<string>('');

  const [isExampleImageModalOpen, setIsExampleImageModalOpen] = useState<boolean>(false);
  const [exampleItems, setExampleItems] = useState<ExampleItem[]>([]);

  const handleCreateExampleImages = async () => {
    try {
      setIsGlobalLoading(true);

      // FIXME: API 호출로 변경 필요
      // const data = await generateExampleImages(exampleText);
      // setExampleImages(data);
      await wait(1);
      console.log(exampleText);
      setExampleItems(MOCK_EXAMPLE_IMAGES);
      setIsExampleImageModalOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGlobalLoading(false);
    }
  };

  return (
    <>
      <PreGenerateStepWrapper>
        <SectionTitle>예시 텍스트 입력</SectionTitle>
        <TextArea
          placeholder="예시 이미지를 받을 텍스트를 입력해주새요."
          value={exampleText}
          onChange={(e) => setExampleText(e.target.value)}
        />
        <Button variant="contained" onClick={handleCreateExampleImages}>
          생성
        </Button>
      </PreGenerateStepWrapper>
      {isExampleImageModalOpen && (
        <ExampleImageSelectModal exampleItems={exampleItems} onClose={() => setIsExampleImageModalOpen(false)} />
      )}
    </>
  );
};

const PreGenerateStepWrapper = styled(CommonWrapper)``;

export default PreGenerateStep;
