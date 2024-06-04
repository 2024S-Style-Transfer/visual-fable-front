import {
  GenerateExampleImagesRequest,
  GenerateImagesRequest,
  GenerateImagesResponse,
  ExampleResponse,
} from '@/types/service';
import { client } from './client';
import { v4 as uuidv4 } from 'uuid';
import { AxiosResponse } from 'axios';
import { serviceHeaderWithAuth } from '@/utils/serviceHeaderWithAuth';

const generateExampleImages = async (page: number, size: number, text: string) => {
  const response = await client.post<ExampleResponse, AxiosResponse<ExampleResponse>, GenerateExampleImagesRequest>(
    `/images?page=${page}&size=${size}`,
    { text },
    { ...serviceHeaderWithAuth() }
  );
  return response.data;
};

const generateImages = async (exampleImageId: string, texts: string[]) => {
  const randomProjectId = uuidv4();

  const basicItems = texts.map((promptText, index) => ({
    index,
    promptText,
  }));

  const response = await client.post<
    GenerateImagesResponse,
    AxiosResponse<GenerateImagesResponse>,
    GenerateImagesRequest
  >(
    '/generate-images',
    {
      projectId: randomProjectId,
      id: exampleImageId,
      basicItems,
    },
    { ...serviceHeaderWithAuth() }
  );

  return response.data;
};

export { generateExampleImages, generateImages };
