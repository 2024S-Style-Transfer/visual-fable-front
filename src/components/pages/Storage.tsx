'use client';

import { MOCK_USER_DATA } from '@/mock/data';
import useGlobalStore from '@/store/globalStore';
import { UserResponse } from '@/types/service';
import styled from '@emotion/styled';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Storage: React.FC = () => {
  const router = useRouter();

  const { isLogin } = useGlobalStore();

  const [userData, setUserData] = useState<UserResponse | null>(null);

  // FIXME: API 호출 적용 시 데이터 교체 필요
  const loadUserData = async () => {
    setUserData(MOCK_USER_DATA);
  };

  const handleClickStorageItem = (id: string) => {
    router.push(`/storage/${id}`);
  };

  useEffect(() => {
    if (!isLogin) {
      alert('로그인이 필요합니다.');
      window.location.href = '/';
    }

    loadUserData();
  }, []);
  return (
    <>
      <Title>My Storage</Title>

      <ProfileWrapper />
      <UserName>{userData?.name}</UserName>

      <StorageDataWrapper>
        {userData?.projects.map((project) => (
          <StorageItem key={project.projectId} onClick={() => handleClickStorageItem(project.projectId)}>
            <img src={project.exampleImage} alt="item1" />
            <ItemText>{project.createdAt}</ItemText>
            <ItemText>{project.description}</ItemText>
          </StorageItem>
        ))}
      </StorageDataWrapper>
    </>
  );
};

const ItemText = styled.p`
  text-align: left;
  font-size: 18px;
`;
const StorageItem = styled.button`
  padding: 16px;
  border-radius: 20px;
  box-shadow: 0px 2px 2px 0px #00000040;
  width: 200px;
  height: 339px;

  & > img {
    width: 100%;
    border-radius: 8px;
  }

  & > :not(:first-child) {
    margin-top: 12px;
  }
`;
const StorageDataWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 24px;
  margin-top: 20px;
`;
const UserName = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
// FIXME: 이미지 props로 받아 적용 (background-image or 이름 첫 글자)
const ProfileWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #f0f0f0;
`;
const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export default Storage;
