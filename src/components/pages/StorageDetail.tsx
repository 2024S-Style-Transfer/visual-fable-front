'use client';

import React, { useEffect, useState } from 'react';
import DoneStep from '../steps/DoneStep';
import { getUserProject } from '@/service/project';
import { GeneratedItem } from '@/types/service';
import { MOCK_GENERATED_ITEMS } from '@/mock/data';
import { wait } from '@/utils/time';

type Props = {
  id: string;
};
const StorageDetail: React.FC<Props> = ({ id }) => {
  const [generatedItems, setGeneratedItems] = useState<GeneratedItem[]>([]);

  // FIXME: API 호출로 대체
  const loadGeneratedItems = async () => {
    // const data = await getUserProject(id);
    // setGeneratedItems(data.generatedItems);
    await wait(1);
    setGeneratedItems(MOCK_GENERATED_ITEMS);
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('로그인이 필요합니다.');
      window.location.href = '/';
    }

    loadGeneratedItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <DoneStep generatedItems={generatedItems} />;
};

export default StorageDetail;
