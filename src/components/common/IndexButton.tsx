import { SvgLockIcon } from '@/svgs';
import { ColorTheme } from '@/theme/theme';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

export type IndexButtonProps = { $status: 'current' | 'empty' | 'filled' | 'locked' };
export const getIndexButtonStatus = ({
  targetText,
  targetIndex,
  currentIndex,
  isLogin,
}: {
  targetText: string;
  targetIndex: number;
  currentIndex: number;
  isLogin: boolean;
}) => {
  if (!isLogin && targetIndex > 0) {
    return 'locked';
  }
  if (targetIndex === currentIndex) {
    return 'current';
  }
  if (targetText === '') {
    return 'empty';
  }

  return 'filled';
};

export const IndexButton: React.FC<React.PropsWithChildren<IndexButtonProps & HTMLAttributes<HTMLButtonElement>>> = ({
  children,
  $status,
  ...rest
}) => {
  return (
    <IndexButtonBase $status={$status} {...rest} disabled={$status === 'locked'}>
      {$status === 'locked' && (
        <LockIconWrapper>
          <SvgLockIcon />
        </LockIconWrapper>
      )}
      {children}
    </IndexButtonBase>
  );
};
const IndexButtonBase = styled.button<IndexButtonProps>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: #fff;
  font-size: 24px;

  background-color: ${({ $status }) =>
    $status === 'current' ? ColorTheme.secondaryColor : $status === 'filled' ? ColorTheme.primaryColor : '#aaaaaa'};

  &:disabled {
    cursor: not-allowed;
  }
`;
const LockIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 31px;
  height: 31px;
`;

export const IndexButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  button + button {
    margin-left: 8px;
  }
`;
