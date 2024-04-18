import { ExampleItem, GenerateImagesResponse } from '@/types/service';
import { client } from './client';

const generateExampleImages = async (text: string) => {
  const response = await client.post<ExampleItem[]>('/images', {
    text,
  });

  return response.data;
};

// FIXME: 스키마 체크 필요
const generateImages = async (exampleItem: ExampleItem, texts: string[]) => {
  const response = await client.post<GenerateImagesResponse>('/generate-images', {
    exampleItem,
    texts,
  });

  return response.data;
};

export { generateExampleImages, generateImages };
