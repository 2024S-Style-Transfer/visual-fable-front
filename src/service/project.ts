import { ProjectDetail, ProjectResponse } from '@/types/service';
import { serviceHeaderWithAuth } from '@/utils/serviceHeaderWithAuth';
import { client } from './client';

const getUserProjectList = async (page: number, size: number) => {
  // user Oauth 로직 제거
  //const response = await testclient.get<ProjectResponse>(`/user/projects?page=${page}&size=${size}`, {
  //  ...serviceHeaderWithAuth(),
  const response = await client.get<ProjectResponse>(`/user/projects?page=${page}&size=${size}`, {});
  return response.data;
};

const getUserProject = async (projectId: string) => {
  const response = await client.get<ProjectDetail>(`/user/project/${projectId}`, { ...serviceHeaderWithAuth() });
  return response.data;
};

export { getUserProjectList, getUserProject };
