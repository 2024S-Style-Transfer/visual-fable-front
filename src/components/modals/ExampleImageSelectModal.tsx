'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useGenerateStore, { STEP } from '@/store/generateStore';
import useGlobalStore from '@/store/globalStore';
import { ExampleItem, ExampleResponse } from '@/types/service';
import styled from '@emotion/styled';
import { Button } from '../common/styled';
import { ColorTheme } from '@/theme/theme';
import { wait } from '@/utils/time';
import { Dialog, DialogActions } from '@mui/material';
import { generateExampleImages } from '@/service/generate';
import { EXAMPLE_REQ_SIZE} from '@/constants/generate';

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

type ExampleImageSlectModalProps = {
  exampleResponse: ExampleResponse;
  exampleText: string;
  onClose: () => void;
};

const ExampleImageSelectModal: React.FC<ExampleImageSlectModalProps> = ({ exampleResponse, exampleText, onClose }) => {
  const { isGlobalLoading, setIsGlobalLoading } = useGlobalStore();
  const { setStep, selectedExampleItem, setSelectedExampleItem } = useGenerateStore();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isPageEnd, setIsPageEnd] = useState<boolean>(false);
  const [itemDataList, setItemDataList] = useState<ExampleItem[]>([]);
  const [itemPage, setItemPage] = useState(0);

  // initial modal page
  useEffect(() => {
      setItemDataList(exampleResponse.content);
      setItemPage(1);
      if (exampleResponse.last == true || exampleResponse.content.length < EXAMPLE_REQ_SIZE) {
        setIsPageEnd(true);
      }
  }, []);

  const getMoreItem = useCallback(async () => {
    if (!isGlobalLoading) {
      try {
        setIsLoaded(true);
        const moreExampleResponse = await generateExampleImages(itemPage, EXAMPLE_REQ_SIZE, exampleText);
        setItemDataList((prevItemDataList) => [...prevItemDataList, ...moreExampleResponse.content]);
        setItemPage((prevItemPage) => prevItemPage + 1);
        if (moreExampleResponse.last == true || moreExampleResponse.content.length < EXAMPLE_REQ_SIZE) {
          setIsPageEnd(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoaded(false);
      }
    }
  }, [isGlobalLoading, itemPage, exampleText]);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting && !isLoaded && !isPageEnd) {
        observer.unobserve(entry.target);
        await getMoreItem();
        observer.observe(entry.target);
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
    try {
      setIsGlobalLoading(true);

      // FIXME: API 호출로 변경 필요
      await wait(3);
      // await api.post('/api/step/1', { exampleImageId: selectedExampleItemId });
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
          {itemDataList.map((e) => (
            <SelectableImage
              key={e.id}
              src={e.data}
              alt={`example ${e.id} Base 64`}
              $isSelected={selectedExampleItem?.id === e.id}
              onClick={() => setSelectedExampleItem(e)}
            />
          ))}
          <div ref={setTarget}></div>
        </ImagesBox>
        <DialogActions>
          <Button className="Cancel" onClick={handleClose}>
            취소
          </Button>
          <Button className="Dr" onClick={handleConfirmExampleItem} disabled={!selectedExampleItem}>
            선택
          </Button>
        </DialogActions>
      </ExampleImageSelectModalWrapper>
    </Dialog>
  );
};

// TODO: 추후 next/image로 변경
const SelectableImage = styled.img<{ $isSelected: boolean }>`
  border: 2px solid ${({ $isSelected }) => ($isSelected ? `${ColorTheme.primaryColor}` : 'transparent')};
  cursor: pointer;
  width: 200px;
  height: 200px;
  margin-bottom: 3.7%;
  background-color: pink;
  border-radius: 10px;
`;
const ImagesBox = styled.div`
  display: flex;
  justyfy-content: space-between;
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
