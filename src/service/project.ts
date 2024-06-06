import { ProjectDetailResponse, ProjectResponse } from '@/types/service';
import { serviceHeaderWithAuth } from '@/utils/serviceHeaderWithAuth';
import { testclient } from './client';

const getUserProjectList = async (page: number, size: number) => {
  // user Oauth 로직 제거
  //const response = await testclient.get<ProjectResponse>(`/user/projects?page=${page}&size=${size}`, {
  //  ...serviceHeaderWithAuth(),
  const response = await testclient.get<ProjectResponse>(`/user/projects?page=${page}&size=${size}`, {});
  return response.data;
};

const getUserProject = async (projectId: string) => {
  const response = await testclient.get<ProjectDetailResponse>(`/user/project/${projectId}`, {
    ...serviceHeaderWithAuth(),
  });
  return response.data;
};

export { getUserProjectList, getUserProject };
