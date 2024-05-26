import { ColorTheme } from '@/theme/theme';
import styled from '@emotion/styled';

export const IndexButton = styled.button<{ $status: 'current' | 'empty' | 'filled' }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: #fff;
  font-size: 24px;

  background-color: ${({ $status }) =>
    $status === 'current' ? ColorTheme.secondaryColor : $status === 'filled' ? ColorTheme.primaryColor : '#aaaaaa'};
`;
export const IndexButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  button + button {
    margin-left: 8px;
  }
`;
