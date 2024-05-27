import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ColorTheme } from '@/theme/theme';

const GlobalLoading: React.FC = () => (
  <BackDrop>
    <Loader />
  </BackDrop>
);

const rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: ${ColorTheme.primaryColor};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalLoading, Loader };
