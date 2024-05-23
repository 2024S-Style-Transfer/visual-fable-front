import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ColorTheme } from '../../theme/theme';

const shadowOpts = css`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
const SectionTitle = styled.p`
    color: ${ColorTheme.textColor}
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
  `;

// exampleText의 길이에 따라 <TextAreaBorder>, <TextArea> 높이를 동적으로 계산
const calculateHeight = (exampleText: string) => {
  const rowCount = exampleText.split(/\r\n|\r|\n/).length;
  const minHeight = 100; // 최소 높이
  return Math.max(rowCount * 27, minHeight);
};

const TextAreaBorder = styled.div`
  width: 100%;
  padding: 1px 1px;
  border-radius: 20px;
  border: 1px solid transparent;
  box-shadow: 0px 2px 2px ${ColorTheme.shadowColor};
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, ${ColorTheme.primaryColor}, ${ColorTheme.secondaryColor});
  background-origin: border-box;
  background-clip: content-box, border-box;
`;
const TextArea = styled.textarea`
  resize: none;
  width: 99%;
  padding: 8px 12px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: transparent;
  border: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;
interface ButtonProps {
  Dr?: boolean; //기본 생성 버튼
  Cancel?: boolean; //취소 및 로그아웃 버튼
  Storage?: boolean; //My storage 이동 버튼
}

const Button = styled.button<ButtonProps>`
  width: 13.1%;
  height: 100px;
  border-radius: 20px;
  border: 0px;
  font-size: 1.125rem;
  ${shadowOpts}

  &:active {
    cursor: pointer;
  }

  &:hover {
    cursor: pointer;
  }

  &.Dr {
    background-color: ${ColorTheme.primaryColor};
    color: ${ColorTheme.backColor};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${ColorTheme.primaryColor2};
    }

    &:active {
      background-color: ${ColorTheme.primaryColor3};
    }
  }

  &.Cancel {
    background-color: transparent;
    color: ${ColorTheme.negativeColor};

    &:hover {
      background-color: ${ColorTheme.negativeColor};
      color: ${ColorTheme.backColor};
    }

    &:active {
      background-color: ${ColorTheme.negativeColor2};
      color: ${ColorTheme.backColor};
    }
  }

  &.Storage {
    background-color: ${ColorTheme.secondaryColor};
    color: ${ColorTheme.backColor};
    transition: background-color 0.3s;

    &:hover {
      background-color: ${ColorTheme.secondaryColor2};
    }

    &:active {
      background-color: ${ColorTheme.secondaryColor3};
    }
  }
`;

const BannerContents = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  font-size: 3.75rem;
  flex-direction: column;
  font-weight: bold;
`;
const BannerText = styled.div`
  text-align: center;
  color: ${ColorTheme.textColor};
  background-image: none;
  background-clip: none;
  -webkit-background-clip: none;
  -webkit-text-fill-color: inherit;

  &.highlight {
    background-image: linear-gradient(to right, ${ColorTheme.primaryColor}, ${ColorTheme.secondaryColor});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

// 균등 정렬 아티클
const Contents = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

// 네비게이터 아래 섹션(10column) 공통 스타일.
const Section = styled.section`
  width: 76.2%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

// 각 page의 중앙 정렬을 위한 wrapper(공통 스타일 적용)
const CommonWrapper = styled.section`
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

export {
  shadowOpts,
  SectionTitle,
  TextArea,
  TextAreaBorder,
  Button,
  BannerContents,
  BannerText,
  Contents,
  Section,
  CommonWrapper,
  calculateHeight,
};
