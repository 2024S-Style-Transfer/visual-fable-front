import {
  ExampleItem,
  GenerateExampleImagesRequest,
  GenerateImagesRequest,
  GenerateImagesResponse,
} from '@/types/service';
import { client } from './client';
import { v4 as uuidv4 } from 'uuid';
import { AxiosResponse } from 'axios';
import { serviceHeaderWithAuth } from '@/utils/serviceHeaderWithAuth';

const generateExampleImages = async (text: string) => {
  const response = await client.post<ExampleItem[], AxiosResponse<ExampleItem[]>, GenerateExampleImagesRequest>(
    '/images',
    { text },
    { ...serviceHeaderWithAuth() }
  );

  return response.data;
};

const generateImages = async (exampleImageData: string, texts: string[]) => {
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
      exampleImage: exampleImageData,
      basicItems,
    },
    { ...serviceHeaderWithAuth() }
  );

  return response.data;
};

export { generateExampleImages, generateImages };
