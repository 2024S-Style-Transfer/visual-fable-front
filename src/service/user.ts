import {
  AuthenticateUserWithGoogleRequest,
  AuthenticateUserWithGoogleResponse,
  ProjectInterface,
  UserResponse,
} from '@/types/service';
import { client } from './client';
import { AxiosResponse } from 'axios';
import { serviceHeaderWithAuth } from '@/utils/serviceHeaderWithAuth';

const authenticateUserWithGoogle = async (credential: string) => {
  const response = await client.post<
    AuthenticateUserWithGoogleResponse,
    AxiosResponse<AuthenticateUserWithGoogleResponse>,
    AuthenticateUserWithGoogleRequest
  >('/auth/google', { code: credential });

  return response.data;
};

const getUserInfo = async () => {
  const response = await client.get<UserResponse>('/user/info', { ...serviceHeaderWithAuth() });
  return response.data;
};

const getUserProjects = async () => {
  const response = await client.get<ProjectInterface[]>('/user/projects', { ...serviceHeaderWithAuth() });
  return response.data;
};

export { authenticateUserWithGoogle, getUserInfo, getUserProjects };
