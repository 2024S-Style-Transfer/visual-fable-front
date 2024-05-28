'use client';

import React, { useEffect, useState } from 'react';
import DoneStep from '../steps/DoneStep';
import { GeneratedItem } from '@/types/service';
import { MOCK_GENERATED_ITEMS } from '@/mock/data';
import useGlobalStore from '@/store/globalStore';

type Props = {
  id: string;
};
const StorageDetail: React.FC<Props> = ({ id }) => {
  const { isLogin } = useGlobalStore();

  const [generatedItems, setGeneratedItems] = useState<GeneratedItem[]>([]);

  // FIXME: API 호출로 대체
  const loadGeneratedItems = async () => {
    console.log(id);
    setGeneratedItems(MOCK_GENERATED_ITEMS);
  };

  useEffect(() => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      window.location.href = '/';
    }

    loadGeneratedItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <DoneStep generatedItems={generatedItems} />;
};

export default StorageDetail;
