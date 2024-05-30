'use client';

import { Button, BannerContents, BannerText, Contents } from '../common/styled';
import { Card, CardContents, CardText, CardImage } from '../common/cards';
import { RedHatText } from '../../theme/fontsGroup';
import styled from '@emotion/styled';
import { ColorTheme } from '@/theme/theme';
import { SvgStarIcon } from '@/svgs';

const AboutUs: React.FC = () => {
  return (
    <>
      <Banner />

      <h1> 작동 원리 </h1>
      <AuCard>
        <CardContents>
          <CardText>1. Large Language Model (LLM)을 사용하여 긴 문장을 하나의 문장으로 요약.</CardText>
        </CardContents>
        <CardImage></CardImage>
      </AuCard>
      <div style={{ width: 40 }}></div>
      <AuCard>
        <CardContents>
          <CardText>
            2. OpneAI CLIP 모델을 사용하여 각 이미지와 텍스트 사이 유사도를 계산하여 유사도가 높은 장르로 분류.
          </CardText>
        </CardContents>
        <CardImage></CardImage>
      </AuCard>
      <div style={{ width: 40 }}></div>
      <AuCard>
        <CardContents>
          <CardText>3. DDIM 역변환을 사용하여 선택한 스타일을 바탕으로 이미지 생성.</CardText>
        </CardContents>
        <CardImage></CardImage>
      </AuCard>
    </>
  );
};
const AuBannerContents = styled(BannerContents)`
  text-align: left;
`;
const AuBannerText = styled(BannerText)`
  min-width: 11px;
  white-space: nowrap;
  color: transparent;
  margin: 0;
  &:before {
    display: inline-block;
    content: 'Visual Fable';
    color: black;
    background-image: linear-gradient(to right, ${ColorTheme.primaryColor}, ${ColorTheme.secondaryColor});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    overflow: hidden;
    border-right: 1px solid black;
    animation: typing 3s steps(12);
  }

  @keyframes typing {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
`;
const Banner = () => {
  return (
    <BannerContents className={RedHatText.className}>
      <AuBannerText></AuBannerText>
      <AuH3> 짧은 시간에 당신이 상상한 세계를 생성할 수 있는 visual fable을 만나보세요</AuH3>
      <Contents>
        <div style={{ width: 40 }}></div>
        <AuSpanGroup>
          <SvgStarIcon />
          <AuSpan>Support long sentences</AuSpan>
        </AuSpanGroup>
        <AuSpanGroup>
          <SvgStarIcon />
          <AuSpan>Unlimited generations</AuSpan>
        </AuSpanGroup>
        <AuSpanGroup>
          <SvgStarIcon />
          <AuSpan>No watermark</AuSpan>
        </AuSpanGroup>
        <AuSpanGroup>
          <SvgStarIcon />
          <AuSpan>Storage space</AuSpan>
        </AuSpanGroup>
        <div style={{ width: 40 }}></div>
      </Contents>
      <Button className="Dr"> Start</Button>
    </BannerContents>
  );
};

const AuCard = styled(Card)`
  width: 100%;
`;

const AuH3 = styled.h3`
  margin-bottom: 80px;
`;
const AuSpan = styled.p`
  margin-bottom: 80px;
  font-size: 1.2rem;
  font-weight: 500;
  float: right;
  margin: 0;
`;
const AuSpanGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export default AboutUs;
