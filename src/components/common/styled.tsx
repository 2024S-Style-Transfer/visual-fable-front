import styled from '@emotion/styled';
import { Button as MuiButton, TextareaAutosize as MuiTextarea } from '@mui/material';

const SectionTitle = styled.p`
  color: #1c2025;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const TextArea = styled(MuiTextarea)`
  width: 100%;
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

  &:hover {
    border-color: #3399ff;
  }

  &:focus {
    border-color: #3399ff;
    box-shadow: 0 0 0 3px #b6daff;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`;

const Button = styled(MuiButton)``;

// 각 page의 중앙 정렬을 위한 wrapper(공통 스타일 적용)
// TODO: 실제 디자인 작업 후에는 내부 스타일 수정 필요
const CommonWrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { SectionTitle, TextArea, Button, CommonWrapper };
