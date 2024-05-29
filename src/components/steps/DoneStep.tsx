'use client';

import React, { useMemo, useState } from 'react';
import styled from '@emotion/styled';
import HTMLFlipBook from 'react-pageflip';
import { IndexButton, IndexButtonWrapper, getIndexButtonStatus } from '../common/IndexButton';
import useGlobalStore from '@/store/globalStore';
import { GeneratedItem } from '@/types/service';
import Image from 'next/image';
import { PageFlipRef } from '@/types/pageflip';

type Props = {
  generatedItems: GeneratedItem[];
};
const DoneStep: React.FC<Props> = ({ generatedItems }) => {
  const { isLogin } = useGlobalStore();

  const flipBookRef = React.useRef<PageFlipRef>(null);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const pages = useMemo(() => {
    const pageArray: React.JSX.Element[] = [];

    generatedItems.forEach((item, index) => {
      const textPage = (
        <PageWrapper key={item.id + 'page'}>
          {item.promptText}
          <PageFooter>{index * 2 + 1}</PageFooter>
        </PageWrapper>
      );
      const imgPage = (
        <PageWrapper key={item.id + 'img'}>
          <Image src={item.generatedImage} alt="generatedImage" width={100} height={100} />
          <PageFooter $isRightmost>{index * 2 + 2}</PageFooter>
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
              isLogin: !!isLogin,
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
        ref={flipBookRef}
        width={550}
        height={733}
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        size="stretch"
        maxShadowOpacity={0.5}
        onFlip={(e) => setPageNumber(e.data)}
        // 여기부터는 default 값만 지정(typescript 오류 제거를 위함.)
        style={{}}
        className="page-flip"
        drawShadow={true}
        flippingTime={100}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        showCover={false}
        mobileScrollSupport={true}
        swipeDistance={30}
        clickEventForward={true}
        useMouseEvents={true}
        renderOnlyPageLengthChange={false}
        startPage={1}
        showPageCorners={true}
        disableFlipByClick={false}
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
    height: auto;
  }
`;
const IndexWrapper = styled(IndexButtonWrapper)`
  width: 100%;
  justify-content: flex-end;

  margin-bottom: 8px;
`;

export default DoneStep;
