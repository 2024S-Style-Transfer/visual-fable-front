import { ExampleItem, GenerateImagesResponse } from '@/types/service';
import { client } from './client';
import { v4 as uuidv4 } from 'uuid';

const generateExampleImages = async (text: string) => {
  const response = await client.post<ExampleItem[]>('/images', {
    text,
  });

  return response.data;
};

// FIXME: 스키마 체크 필요
const generateImages = async (exampleImage: ExampleItem, texts: string[]) => {
  const randomProjectId = uuidv4();

  const promptTexts = texts.map((promptText, index) => ({
    index,
    promptText,
  }));

  const response = await client.post<GenerateImagesResponse>('/generate-images', {
    projectId: randomProjectId,
    exampleImage,
    promptTexts,
  });

  return response.data;
};

export { generateExampleImages, generateImages };
