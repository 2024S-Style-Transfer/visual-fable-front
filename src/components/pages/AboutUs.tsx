'use client';

import { Button, BannerContents, BannerText, Contents, shadowOpts } from '../common/styled';
import { RedHatText } from '../../theme/fontsGroup';
import styled from '@emotion/styled';
import { ColorTheme } from '@/theme/theme';
import { SvgButterflyIcon, SvgModelImages, SvgNums } from '@/svgs';

const AboutUs: React.FC = () => {
  return (
    <>
      <div style={{ height: 80 }}></div>
      <Banner />
      <BorderGradient className={'top'} />
      <AuContentsWrapper>
        <BannerContents className={RedHatText.className}>
          <BannerText className="subtitle">Principle</BannerText>
        </BannerContents>
        <AuCards />
      </AuContentsWrapper>
      <BorderGradient className={'bottom'} />
    </>
  );
};

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
  const text = ['Support long sentences', 'Unlimited generations', 'No watermark', 'Storage space'];
  const handleStart = () => {
    window.location.href = '/';
  };

  return (
    <BannerContents className={RedHatText.className}>
      <AuBannerText></AuBannerText>
      <h3 style={{ marginBottom: 80 }}> 짧은 시간에 당신이 상상한 세계를 생성할 수 있는 visual fable을 만나보세요</h3>
      <Contents>
        <div style={{ width: 40 }}></div>
        {text.map((text) => (
          <AuTextGroup>
            <SvgButterflyIcon />
            <div style={{ width: 8 }}></div>
            <AuText>{text}</AuText>
          </AuTextGroup>
        ))}

        <div style={{ width: 40 }}></div>
      </Contents>
      <Button className="Dr" onClick={handleStart}>
        {' '}
        Start
      </Button>
    </BannerContents>
  );
};

const AuContentsWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 40px 0;
  &::before {
    content: '';
    padding: 40px 0;
    position: absolute;
    width: 200%;
    top: -40px;
    left: -50%;
    height: 100%;
    background-color: #ffd3a2;
    z-index: -1; /* Ensure it stays behind the main content */
  }
`;
const AuCards = () => {
  const idx = [0, 1, 2];
  const cardtexts = [
    'Large Language Model (LLM)을 사용하여 긴 문장을 하나의 문장으로 요약.',
    'OpneAI CLIP 모델을 사용하여 각 이미지와 텍스트 사이 유사도를 계산하여 유사도가 높은 장르로 분류.',
    'DDIM 역변환을 사용하여 선택한 스타일을 바탕으로 이미지 생성.',
  ];
  return (
    <Contents style={{ justifyContent: 'center' }}>
      {idx.map((index) => (
        <AuCard>
          <AuIndexImage>
            <SvgNums idx={index} />
          </AuIndexImage>
          <AuCardImage>
            <SvgModelImages idx={index} />
          </AuCardImage>
          <div style={{ height: 28 }} />
          <AuText>{cardtexts[index]}</AuText>
        </AuCard>
      ))}
    </Contents>
  );
};

const AuCard = styled.div`
  position: relative;
  flex: 0 0 calc(50% - 20px);
  width: 31%;
  height: 420px;
  padding: 42px 4.8%;
  margin: 22px 10px;
  background-color: ${ColorTheme.backColor};
  border-radius: 20px;
  text-align: center;
  ${shadowOpts}
`;

const AuCardImage = styled.div`
  width: 92%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuText = styled.p`
  align-items: center;
  font-size: 1.2rem;
  font-weight: 500;
  float: right;
`;
const AuTextGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
const BorderGradient = styled.div`
  width: 150%;
  height: 80px;
  &.top {
    background-image: linear-gradient(to bottom, ${ColorTheme.backColor}, #ffd3a2);
  }
  &.bottom {
    background-image: linear-gradient(to top, ${ColorTheme.backColor}, #ffd3a2);
  }
`;

const AuIndexImage = styled.div`
  position: absolute;
  display: flex;
  top: -25px;
  left: 44%;
  width: 12%;
  justify-content: center;
  align-items: center;
`;
export default AboutUs;
