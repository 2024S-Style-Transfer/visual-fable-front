import React, { useState, useEffect } from 'react';
import useGenerateStore, { STEP } from '@/store/generateStore';
import useGlobalStore from '@/store/globalStore';
import { ExampleItem } from '@/types/service';
import { wait } from '@/utils/time';
import styled from '@emotion/styled';
import { Dialog, DialogActions } from '@mui/material';
import { CARD_DATA } from './CARD_DATA';
import { Button } from '../common/styled';

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
  const [data, setData] = useState(CARD_DATA.slice(0, 6));
  const [itemPage, setItemPage] = useState(0);
  const testFetch = (delay = 1000) => new Promise((res) => setTimeout(res, delay));

  const getMoreItem = async () => {
    setIsLoaded(true);
    //FIXME : 추후 API 요청으로 수정후 setdata로 변경.
    await testFetch();
    setData(data.concat(CARD_DATA.slice(itemIndex, itemIndex + 6)));
    setItemIndex((i) => i + 6);
    setIsLoaded(false);
  };

  const onIntersect: IntersectionObserverCallback = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  //현재 대상 및 option을 props로 전달
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
//
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
