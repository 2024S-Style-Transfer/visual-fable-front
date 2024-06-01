'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useGenerateStore, { STEP } from '@/store/generateStore';
import useGlobalStore from '@/store/globalStore';
import { ExampleItem, ExampleResponse } from '@/types/service';
import styled from '@emotion/styled';
import { Button } from '../common/styled';
import { ColorTheme } from '@/theme/theme';
import { Dialog, DialogActions } from '@mui/material';
import { generateExampleImages } from '@/service/generate';
import { EXAMPLE_REQ_SIZE } from '@/constants/generate';
import Image from 'next/image';

interface useIntersectionObserverProps {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  onIntersect: IntersectionObserverCallback;
}

const useIntersectionObserver = ({ root, rootMargin, threshold, onIntersect }: useIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
    if (!target) return;
    const observer: IntersectionObserver = new IntersectionObserver(onIntersect, { root, rootMargin, threshold });
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [onIntersect, root, rootMargin, target, threshold]);

  return { setTarget };
};

type ExampleImageSelectModalProps = {
  exampleResponse: ExampleResponse;
  exampleText: string;
  onClose: () => void;
};
const ExampleImageSelectModal: React.FC<ExampleImageSelectModalProps> = ({ exampleResponse, exampleText, onClose }) => {
  const { isGlobalLoading, setIsGlobalLoading } = useGlobalStore();
  const [localSelectedExampleItem, setLocalSelectedExampleItem] = useState<ExampleItem | null>(null);
  const { setStep, setSelectedExampleItem } = useGenerateStore();
  const [itemDataList, setItemDataList] = useState<ExampleItem[]>(exampleResponse.content);
  const [itemPage, setItemPage] = useState(1);
  const [isPageEnd, setIsPageEnd] = useState(exampleResponse.last || exampleResponse.content.length < EXAMPLE_REQ_SIZE);

  const getMoreItem = useCallback(async () => {
    if (!isGlobalLoading) {
      try {
        setIsGlobalLoading(true);

        const moreExampleResponse = await generateExampleImages(itemPage, EXAMPLE_REQ_SIZE, exampleText);
        setItemDataList((prevItemDataList) => [...prevItemDataList, ...moreExampleResponse.content]);
        setItemPage((prevItemPage) => prevItemPage + 1);

        if (moreExampleResponse.last == true || moreExampleResponse.content.length < EXAMPLE_REQ_SIZE) {
          setIsPageEnd(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsGlobalLoading(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGlobalLoading, itemPage, exampleText]);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting && !isPageEnd) {
        observer.unobserve(entry.target);
        await getMoreItem();
        observer.observe(entry.target);
      } else if (isPageEnd) {
        observer.disconnect();
      }
    },
    [getMoreItem, isPageEnd]
  );

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
    onIntersect,
  });

  const handleClose = () => {
    setSelectedExampleItem(null);
    onClose();
  };

  const handleConfirmExampleItem = async () => {
    if (!localSelectedExampleItem) {
      alert('예시 이미지를 선택해주세요.');
      return;
    }

    try {
      setIsGlobalLoading(true);
      setSelectedExampleItem(localSelectedExampleItem);
      setStep(STEP.GENERATE);
    } catch (error) {
      console.error(error);
    } finally {
      setIsGlobalLoading(false);
    }
  };

  return (
    <Dialog open>
      <ExampleImageSelectModalWrapper>
        <Title>예시 이미지 선택</Title>
        <ImagesBox>
          {itemDataList.map((item) => (
            <SelectableImage
              key={item.id}
              width={200}
              height={200}
              src={item.url}
              alt={`example ${item.id} Base 64`}
              $isSelected={localSelectedExampleItem?.id === item.id}
              onClick={() => setLocalSelectedExampleItem(item)}
            />
          ))}
          <div ref={setTarget} />
        </ImagesBox>
        <DialogActions>
          <Button className="Cancel" onClick={handleClose}>
            취소
          </Button>
          <Button className="Dr" onClick={handleConfirmExampleItem} disabled={!localSelectedExampleItem}>
            선택
          </Button>
        </DialogActions>
      </ExampleImageSelectModalWrapper>
    </Dialog>
  );
};

const SelectableImage = styled(Image)<{ $isSelected: boolean }>`
  border: 2px solid ${({ $isSelected }) => ($isSelected ? `${ColorTheme.primaryColor}` : 'transparent')};
  cursor: pointer;
  margin-bottom: 3.7%;
  background-color: pink;
  border-radius: 10px;
`;
const ImagesBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 3.1%;
  height: 40%;
  max-height: 480px;
  overflow-y: auto;
  display: flex;
  text-align: center;
`;

const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 3.1%;
`;
const ExampleImageSelectModalWrapper = styled.section`
  background-color: #fff;
  height: 89.1%;
  margin: 4.2% 3.1% 4.2% 15%;
  overflow: hidden;
`;

export default ExampleImageSelectModal;
