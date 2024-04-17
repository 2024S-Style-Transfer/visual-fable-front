export interface ExampleItem {
  id: string;
  data: string;
}

export interface GeneratedItem {
  id: string;
  promptText: string;
  generatedImage: string;
}
export interface GenerateImagesResponse {
  id: string;
  generatedItems: GeneratedItem[];
}
