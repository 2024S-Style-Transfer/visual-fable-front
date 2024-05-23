/* api 테스트 중
import React, { useState, useEffect, useRef, useCallback } from 'react';
import useGenerateStore, { STEP } from '@/store/generateStore';
import useGlobalStore from '@/store/globalStore';
import { ExampleItem } from '@/types/service';
import styled from '@emotion/styled';
import { Button, Dialog, DialogActions } from '@mui/material';
import api from './api'; // API 클라이언트 임포트

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

type Props = {
  exampleItems: ExampleItem[];
  onClose: () => void;
};

const ExampleImageSelectModal: React.FC<Props> = ({ exampleItems, onClose }) => {
  const { setIsGlobalLoading } = useGlobalStore();
  const { setStep, selectedExampleItem, setSelectedExampleItem } = useGenerateStore();

  const [isLoaded, setIsLoaded] = useState(false);
  const [itemIndex, setItemIndex] = useState(6);
  const [data, setData] = useState<ExampleItem[]>([]);
  const [itemPage, setItemPage] = useState(0);

  const fetchData = async (text: string, page: number, size: number) => {
    setIsGlobalLoading(true);
    try {
      const response = await api.post('/exampleImages', { text, page, size });
      return response.data.content;
    } catch (error) {
      console.error(error);
      return [];
    } finally {
      setIsGlobalLoading(false);
    }
  };

  useEffect(() => {
    const initialFetch = async () => {
      const initialData = await fetchData('', 0, 6);
      setData(initialData);
      setItemIndex(6);
      setItemPage(1);
    };
    initialFetch();
  }, []);

  const getMoreItem = async () => {
    setIsLoaded(true);
    const moreData = await fetchData('', itemPage, 6);
    setData((prevData) => [...prevData, ...moreData]);
    setItemIndex((prevIndex) => prevIndex + 6);
    setItemPage((prevPage) => prevPage + 1);
    setIsLoaded(false);
  };

  const onIntersect: IntersectionObserverCallback = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

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
      await wait(3);
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
          {data.map((e, index) => (
            <SelectableImage
              key={e.id}
              src={e.data}
              alt={`example ${e.id}`}
              $isSelected={selectedExampleItem?.id === e.id}
              onClick={() => setSelectedExampleItem(e)}
            />
          ))}
          <div ref={setTarget}></div>
        </ImagesBox>
        <DialogActions>
          <Button onClick={handleClose}>취소</Button>
          <Button onClick={handleConfirmExampleItem} variant="contained" disabled={!selectedExampleItem}>
            선택
          </Button>
        </DialogActions>
      </ExampleImageSelectModalWrapper>
    </Dialog>
  );
};

const SelectableImage = styled.img<{ $isSelected: boolean }>`
  border: 2px solid ${({ $isSelected }) => ($isSelected ? 'blue' : 'transparent')};
  cursor: pointer;
  width: 200px;
  height: 200px;
  margin-left: 10%;
  margin-bottom: 3.7%;
  background-color: pink;
`;

const ImagesBox = styled.div`
  display: flex;
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
  margin: 3.1%;
  overflow: hidden;
`;

export default ExampleImageSelectModal;
*/