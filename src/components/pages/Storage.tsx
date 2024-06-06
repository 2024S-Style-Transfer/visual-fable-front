'use client';

import { getUserProjectList } from '@/service/project';
import { ProjectContent, ProjectResponse } from '@/types/service';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import useGlobalStore from '@/store/globalStore';
import { getBase64ImageUrlWithPrefix } from '@/utils/getBase64ImageUrlWithPrefix';
import { PROJECT_REQ_SIZE } from '@/constants/generate';
import { formatDate } from '@/utils/date';

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

const Storage: React.FC = () => {
  // const { userData } = useGlobalStore();
  const { isGlobalLoading, setIsGlobalLoading } = useGlobalStore();
  const router = useRouter();
  const [projectList, setProjectList] = useState<ProjectContent[]>([]);
  const [projectPage, setProjectPage] = useState(0);
  const [isPageEnd, setIsPageEnd] = useState(false);

  const loadProjectList = useCallback(async () => {
    if (!isGlobalLoading && !isPageEnd) {
      try {
        setIsGlobalLoading(true);
        const projectResponse = await getUserProjectList(projectPage, PROJECT_REQ_SIZE);
        setProjectPage((prevProjectPage) => prevProjectPage + 1);
        
        setProjectList((prevProjectList) => [...prevProjectList, ...projectResponse.content]);
        if (projectResponse.last===true || projectResponse.numberOfElements < PROJECT_REQ_SIZE) {
          setIsPageEnd(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsGlobalLoading(false);
      }
    }
  }, [isGlobalLoading, projectPage, isPageEnd]);

  

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting && !isPageEnd) {
        observer.unobserve(entry.target);
        await loadProjectList();
        observer.observe(entry.target);
      } else if (isPageEnd) {
        observer.disconnect();
      }
    },
    [loadProjectList, isPageEnd]
  );

  const { setTarget } = useIntersectionObserver({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
    onIntersect,
  });

  const handleClickStorageItem = (id: string) => {
    router.push(`/storage/${id}`);
  };
  useEffect(() => {
    // TODO: 로그인 기능 도입 후 주석 해제
    // if (!localStorage.getItem('token')) {
    //   alert('로그인이 필요합니다.');
    //   window.location.href = '/';
    // }

    //loadProjectList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!userData) {
  //   return;
  // }

  return (
    <>
      <Title>Storage</Title>

      {/* TODO: 로그인 기능 도입 후 주석 해제
      <ProfileWrapper $profileImageUrl={userData.profileImage} />
      <UserName>{userData.name}</UserName> */}

      <StorageDataWrapper>
        {projectList.map((project) => (
          <StorageItem key={project.projectId} onClick={() => handleClickStorageItem(project.projectId)}>
              <Image
              src={getBase64ImageUrlWithPrefix(project.generatedItems[0].generatedImage)}
              alt={`projectExampleImage${project.projectId}`}
              width={168}
              height={168}
            />
            <ItemText>{project.time ? formatDate(project.time) : project.time}</ItemText>
            <ItemText>{project.generatedItems[0].promptText}</ItemText>
          </StorageItem>
        ))}
        <div ref ={setTarget}/>
      </StorageDataWrapper>
    </>
  );
};

const ItemText = styled.p`
  text-align: left;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
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
