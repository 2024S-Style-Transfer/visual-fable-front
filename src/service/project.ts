import { ProjectResponse } from '@/types/service';
import { serviceHeaderWithAuth } from '@/utils/serviceHeaderWithAuth';
import { client } from './client';

const getUserProjectList = async () => {
  const response = await client.get<ProjectResponse[]>('/user/projects', { ...serviceHeaderWithAuth() });
  return response.data;
};

const getUserProject = async (projectId: string) => {
  const response = await client.get<ProjectResponse>(`/user/project/${projectId}`, { ...serviceHeaderWithAuth() });
  return response.data;
};

export { getUserProjectList, getUserProject };
