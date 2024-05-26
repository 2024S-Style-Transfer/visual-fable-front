'use client';

import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import useGenerateStore from '@/store/generateStore';
import HTMLFlipBook from 'react-pageflip';
import { IndexButton, IndexButtonWrapper, getIndexButtonStatus } from '../common/IndexButton';
import useGlobalStore from '@/store/globalStore';

const DoneStep: React.FC = () => {
  const { isLogin } = useGlobalStore();
  const { generatedItems } = useGenerateStore();

  const flipBookRef = React.useRef(null);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const pages = useMemo(() => {
    const pageArray: React.JSX.Element[] = [];

    generatedItems.forEach((item, index) => {
      const textPage = (
        <PageWrapper key={item.id + 'page'}>
          {item.promptText}
          <PageFooter>{index + 1}</PageFooter>
        </PageWrapper>
      );
      const imgPage = (
        <PageWrapper key={item.id + 'img'}>
          <img src={item.generatedImage} alt="generated" />
          <PageFooter $isRightmost>{index + 2}</PageFooter>
        </PageWrapper>
      );

      pageArray.push(...[textPage, imgPage]);
    });

    return pageArray;
  }, [generatedItems]);

  return (
    <>
      <IndexWrapper>
        {generatedItems.map(({ promptText }, index) => (
          <IndexButton
            key={index}
            $status={getIndexButtonStatus({
              targetText: promptText,
              targetIndex: index,
              currentIndex: pageNumber / 2,
              isLogin: isLogin,
            })}
            onClick={() => {
              if (!flipBookRef.current) {
                return;
              }

              flipBookRef.current?.pageFlip?.()?.turnToPage(index * 2);
            }}
          >
            {index + 1}
          </IndexButton>
        ))}
      </IndexWrapper>

      <HTMLFlipBook
        ref={(component) => (flipBookRef.current = component)}
        width={550}
        height={733}
        size="stretch"
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        onFlip={(e) => setPageNumber(e.data)}
      >
        {pages}
      </HTMLFlipBook>
    </>
  );
};

const PageFooter = styled.div<{ $isRightmost?: boolean }>`
  position: absolute;
  bottom: 0;
  height: 30px;
  border-top: 1px solid #f4e8d7;
  font-size: 80%;
  color: #998466;

  ${({ $isRightmost }) => ($isRightmost ? 'right: 20px;' : 'left: 20px;')}
`;
const PageWrapper = styled.div`
  padding: 20px;
  background-color: #fdfaf7;
  color: #785e3a;
  border: 1px solid #c2b5a3;
  overflow: hidden;
  position: relative;
  transform-style: preserve-3d;
  border-right: 0;
  box-shadow: inset -7px 0 30px -7px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
  }
`;
const IndexWrapper = styled(IndexButtonWrapper)`
  width: 100%;
  justify-content: flex-end;

  margin-bottom: 8px;
`;

export default DoneStep;
