export interface ExampleItem {
  id: string;
  data: string;
}
export interface GenerateExampleImagesRequest {
  text: string;
}

export interface GeneratedItem {
  id: string;
  promptText: string;
  generatedImage: string;
}
export interface BasicItem {
  index: number;
  promptText: string;
}
export interface GenerateImagesRequest {
  projectId: string;
  exampleImage: string;
  basicItems: BasicItem[];
}
export interface GenerateImagesResponse {
  id: string;
  generatedItems: GeneratedItem[];
}
