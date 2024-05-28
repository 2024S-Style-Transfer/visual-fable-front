'use client';

import { MOCK_PROJECT_LIST, MOCK_USER_DATA } from '@/mock/data';
import { getUserInfo } from '@/service/user';
import { getUserProjectList } from '@/service/project';
import useGlobalStore from '@/store/globalStore';
import { ProjectResponse, UserResponse } from '@/types/service';
import { wait } from '@/utils/time';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Storage: React.FC = () => {
  const router = useRouter();

  const { isLogin } = useGlobalStore();

  const [userData, setUserData] = useState<UserResponse | null>(null);
  const [projectList, setProjectList] = useState<ProjectResponse[]>([]);

  // FIXME: API 호출 적용 시 데이터 교체 필요
  const loadUserData = async () => {
    // const userInfo = await getUserInfo();
    // setUserData(userInfo);
    await wait(1);
    setUserData(MOCK_USER_DATA);
  };
  const loadProjectList = async () => {
    // const projects = await getUserProjectList();
    // setProjectList(projects);
    await wait(1);
    setProjectList(MOCK_PROJECT_LIST);
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
    loadProjectList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!userData) {
    return;
  }

  return (
    <>
      <Title>My Storage</Title>

      <ProfileWrapper $profileImageUrl={userData.profileImage} />
      <UserName>{userData.name}</UserName>

      <StorageDataWrapper>
        {projectList.map((project) => (
          <StorageItem key={project.projectId} onClick={() => handleClickStorageItem(project.projectId)}>
            <Image src={project.exampleImage} alt="projectExampleImage" width={168} height={168} />
            <ItemText>{project.time}</ItemText>
            <ItemText>{project.summary}</ItemText>
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
    height: auto;
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
const ProfileWrapper = styled.div<{ $profileImageUrl: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 8px;
  background-image: ${({ $profileImageUrl }) => css`url(${$profileImageUrl})`};
  background-size: cover;
`;
const Title = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export default Storage;
