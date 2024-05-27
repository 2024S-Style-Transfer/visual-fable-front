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

export interface ProjectInterface {
  projectId: string;
  exampleImage: string;
  name: string;
  description: string;
  generatedItems: GeneratedItem[];
  createdAt: string;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  projects: ProjectInterface[];
}

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const;
export interface ApiMethodItem {
  httpMethod: keyof typeof HTTP_METHOD;
  url: string;
  example: string;
}

export interface ApiMethodCategory {
  name: string;
  methods: ApiMethodItem[];
}
