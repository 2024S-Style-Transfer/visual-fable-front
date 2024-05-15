import styled from '@emotion/styled';
import {css} from '@emotion/react';
import { ColorTheme } from '../../theme/theme';
import { Button as MuiButton, TextareaAutosize as MuiTextarea } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material';
import {RedHatText} from './fontsGroup'

const shadowOpts = css`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const SectionTitle = styled.p`
  color: ${ColorTheme.textColor}
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

// 프롬프트 입력
// !!테두리 그라데이션 색이 안먹어서 수정 중입니다
const TextArea = styled(MuiTextarea)`
  resize:none;
  width: 100%;
  padding: 8px 12px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 20px;
  border-color: ${ColorTheme.primaryColor}
  color: ${ColorTheme.placeholderColor};
  background: #fff;
  box-shadow: 0px 2px 2px ${ColorTheme.shadowColor};
  overflow: hidden;
`;

interface ButtonProps extends MuiButtonProps {
  PreDr?: boolean;        //Pregenerate 단계 생성 버튼
  Dr?: boolean;           //기본 생성 버튼
  Cancel?: boolean;       //취소 및 로그아웃 버튼
  Storage?: boolean;      //My storage 이동 버튼
}

const Button = styled(MuiButton)<ButtonProps>`
  width: ${props => (props.PreDr? "10.2%" : "13.1%")};
  height: ${props => (props.PreDr? "100px": "54px")};
  border-radius: 20px;
  background-color : 
    ${props => (props.PreDr || props.Dr ? ColorTheme.primaryColor : ColorTheme.negativeColor)};
`;

const BannerContents = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  font-size: 3.75rem;
  flex-direction: column;
  font-weight: bold;

`
const BannerText = styled.div`
  text-align: center;
  color: ${props => props.className === "highlight" ? ColorTheme.textColor : ColorTheme.textColor};
  background-image: ${props => props.className === "highlight" ? `linear-gradient(to right, ${ColorTheme.primaryColor}, ${ColorTheme.secondaryColor})` : "none"};
  background-clip: ${props => props.className === "highlight" ? "text" : "none"};
  -webkit-background-clip: ${props => props.className === "highlight" ? "text" : "none"};
  -webkit-text-fill-color: ${props => props.className === "highlight" ? "transparent" : "inherit"};
`;

// 균등 정렬 아티클
const Contents= styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

// 네비게이터 아래 섹션(10column) 공통 스타일.
const Section = styled.section`
  width: 76.2%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

// 각 page의 중앙 정렬을 위한 wrapper(공통 스타일 적용)
// TODO: 실제 디자인 작업 후에는 내부 스타일 수정 필요 - (완)
const CommonWrapper = styled.section`
  width: 100%;
  padding: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto; 
`





export {shadowOpts, SectionTitle, TextArea, Button, BannerContents, BannerText, Contents, Section, CommonWrapper};
