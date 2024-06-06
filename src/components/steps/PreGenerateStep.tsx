'use client';

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  Button,
  TextArea,
  TextAreaBorder,
  BannerContents,
  BannerText,
  Contents,
  calculateHeight,
} from '../common/styled';
import { Card, CardContents, CardImage, CardText, CardTitle } from '../common/cards';
import { RedHatText } from '../../theme/fontsGroup';
import useGlobalStore from '@/store/globalStore';
import ExampleImageSelectModal from '../modals/ExampleImageSelectModal';
import Login from '../common/Login';
import { SvgUserIcon } from '@/svgs';
import { useRouter } from 'next/navigation';
import { SvgBookIcon } from '@/svgs';
import { generateExampleImages } from '@/service/generate';
import { ExampleResponse } from '@/types/service';
import { EXAMPLE_REQ_SIZE } from '@/constants/generate';

const PreGenerateStep: React.FC = () => {
  const { setIsGlobalLoading } = useGlobalStore();

  const [exampleText, setExampleText] = useState<string>('');
  const [textAreaHeight, setTextAreaHeight] = useState<number>(100);

  const [isExampleImageModalOpen, setIsExampleImageModalOpen] = useState<boolean>(false);
  const [exampleResponseData, setExampleResponseData] = useState<ExampleResponse>({} as ExampleResponse);

  // exampleText의 길이에 따라 높이를 동적으로 계산
  useEffect(() => {
    setTextAreaHeight(calculateHeight(exampleText));
  }, [exampleText]);

  const handleCreateExampleImages = async () => {
    try {
      setIsGlobalLoading(true);
      const exampleResponseData = await generateExampleImages(0, EXAMPLE_REQ_SIZE, exampleText);
      setExampleResponseData(exampleResponseData);
      setIsExampleImageModalOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGlobalLoading(false);
    }
  };

  return (
    <>
      <Banner />
      <InputArea style={{ marginBottom: `${textAreaHeight - 20}px` }}>
        <PreDrTextAreaBorder style={{ height: `${textAreaHeight}px` }}>
          <PreDrTextArea
            placeholder="예시 이미지를 받을 텍스트를 입력해주세요."
            value={exampleText}
            onChange={(e) => setExampleText(e.target.value)}
          />
        </PreDrTextAreaBorder>

        <PreDrButton className="Dr" style={{ height: `${textAreaHeight}px` }} onClick={handleCreateExampleImages}>
          Draw
        </PreDrButton>
      </InputArea>
      <Cards />
      {isExampleImageModalOpen && (
        <ExampleImageSelectModal
          exampleText={exampleText}
          exampleResponse={exampleResponseData}
          onClose={() => setIsExampleImageModalOpen(false)}
        />
      )}
    </>
  );
};

const Banner = () => {
  return (
    <BannerContents className={RedHatText.className}>
      <BannerText>Create your</BannerText>

      <BannerText className="highlight">own Fable images</BannerText>
    </BannerContents>
  );
};

const Cards = () => {
  const router = useRouter();

  const { isLogin, setIsLogin, userData, setUserData } = useGlobalStore();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogin(false);
    setUserData(null);
  };

  const handleLinkToStorage = () => {
    router.push('/storage');
  };

  return (
    <Contents>
      <Card>
        <CardContents>
          <CardTitle>About visual Fable</CardTitle>
          <CardText>원하는 스타일로 자신의 동화 이미지를 만드세요.</CardText>
        </CardContents>
        <CardImage>
          <SvgBookIcon />
        </CardImage>
      </Card>
      <UserCard>
        {typeof isLogin === 'boolean' &&
          (isLogin ? (
            <>
              <UserCardContents>
                <UserHelloText>
                  경북대학교 <span> 님 환영합니다!</span>
                </UserHelloText>
                {/* TODO: 로그인 기능 도입 후 주석 해제
                <UserHelloText>
                  {userData?.name} <span> 님 환영합니다!</span>
                </UserHelloText>
                <UserButtonWrapper>
                  <Button className="Cancel" onClick={handleLogout}>
                    Logout
                  </Button>
                  <Button className="Storage" onClick={handleLinkToStorage}>
                    My storage
                  </Button>
                </UserButtonWrapper> */}
              </UserCardContents>

              <SvgUserIcon />
            </>
          ) : (
            <>
              <CardContents>
                <CardTitle>Premium benefits</CardTitle>
                <CardText>로그인한 유저는 더 많은 혜택을 누릴 수 있습니다.</CardText>
              </CardContents>

              <Login />
            </>
          ))}
      </UserCard>
    </Contents>
  );
};
const UserCardContents = styled(CardContents)`
  width: 100%;
  max-width: 304px;
`;
const UserButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  gap: 16px;

  & > button {
    width: 100%;
    max-width: 144px;
    height: 54px;
  }
`;
const UserHelloText = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 28px;

  & > span {
    font-size: 18px;
    font-weight: 500;
  }
`;
const UserCard = styled(Card)`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

// 프롬프트 전체 구역
const InputArea = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  position: relative;
`;

const PreDrTextAreaBorder = styled(TextAreaBorder)`
  position: absolute;
  left: 0;
  top: 0;
  width: 89.8%;
  z-index: 1;
`;
const PreDrTextArea = styled(TextArea)`
  width: 100%;
  height: 99%;
`;

const PreDrButton = styled(Button)`
  width: 100%;
  position: absolute;
  text-align: right;
  padding-right: 1.8%;
  font-size: 1.75rem;
  font-weight: bold;
`;

export default PreGenerateStep;
