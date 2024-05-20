'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button, CommonWrapper, TextArea, BannerContents, BannerText, Contents, Section } from '../common/styled';
import { Card, CardContents, CardImage, CardText, CardTitle } from '../common/cards';
import Navigator from '../common/Navigator';
import { RedHatText } from '../../theme/fontsGroup';
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
        <Navigator />
        <Section>
          <Banner />
          <InputArea>
            <PreDrTextArea
              placeholder="예시 이미지를 받을 텍스트를 입력해주세요."
              value={exampleText}
              onChange={(e) => setExampleText(e.target.value)}
            />

            <PreDrButton PreDr variant="contained" onClick={handleCreateExampleImages}>
              생성
            </PreDrButton>
          </InputArea>
          <Cards />
        </Section>
      </PreGenerateStepWrapper>
      {isExampleImageModalOpen && (
        <ExampleImageSelectModal exampleItems={exampleItems} onClose={() => setIsExampleImageModalOpen(false)} />
      )}
    </>
  );
};

const PreGenerateStepWrapper = styled(CommonWrapper)``;

const Banner = () => {
  return (
    <>
      <BannerContents className={RedHatText.className}>
        <BannerText>Create your</BannerText>
        <BannerText className="highlight">own Fable images</BannerText>
      </BannerContents>
    </>
  );
};

const Cards = () => {
  return (
    <Contents>
      <Card>
        <CardContents>
          <CardTitle>About visual Fable</CardTitle>
          <CardText>원하는 스타일로 자신의 동화 이미지를 만드세요.</CardText>
        </CardContents>
        <CardImage></CardImage>
      </Card>
      <Card>
        <CardContents>
          <CardTitle>Premium benefits</CardTitle>
          <CardText>로그인한 유저는 더 많은 혜택을 누릴 수 있습니다.</CardText>
        </CardContents>
        <CardImage>Continue with google</CardImage>
      </Card>
    </Contents>
  );
};

// 프롬프트 전체 구역
const InputArea = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  margin-bottom: 120px;
`;

//!! 버튼 배치 조정 예정
const PreDrButton = styled(Button)`
  float: right;
`;

const PreDrTextArea = styled(TextArea)`
  float: left;
  width: 89.8%;
  min-height: 100px;
`;

export default PreGenerateStep;
