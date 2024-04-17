import React from 'react';
import useGenerateStore, { STEP } from '@/store/generateStore';
import useGlobalStore from '@/store/globalStore';
import { ExampleItem } from '@/types/service';
import { wait } from '@/utils/time';
import styled from '@emotion/styled';
import { Button, Dialog, DialogActions } from '@mui/material';

type Props = {
  exampleItems: ExampleItem[];
  onClose: () => void;
};

const ExampleImageSelectModal: React.FC<Props> = ({ exampleItems, onClose }) => {
  const { setIsGlobalLoading } = useGlobalStore();
  const { setStep, selectedExampleItem, setSelectedExampleItem } = useGenerateStore();

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
          {exampleItems.map((item) => (
            <SelectableImage
              key={item.id}
              src={item.data}
              alt="example"
              $isSelected={selectedExampleItem?.id === item.id}
              onClick={() => setSelectedExampleItem(item)}
            />
          ))}
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

// TODO: 추후 next/image로 변경
const SelectableImage = styled.img<{ $isSelected: boolean }>`
  border: 2px solid ${({ $isSelected }) => ($isSelected ? 'blue' : 'transparent')};
  cursor: pointer;
`;
const ImagesBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
  height: 480px;
  max-height: 480px;
  overflow-y: auto;
`;
const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;
const ExampleImageSelectModalWrapper = styled.section`
  background-color: #fff;
  padding: 40px;
  width: 400px;
`;

export default ExampleImageSelectModal;
