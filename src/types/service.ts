export interface ExampleItem {
  id: string;
  url: string;
  description: string;
}

export interface GenerateExampleImagesRequest {
  text: string;
}

export interface ExampleResponse{
  content: ExampleItem[];
  last: boolean;
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

export interface ProjectResponse {
  projectId: string;
  summary: string;
  exampleImage: string;
  generatedItems: GeneratedItem[];
  time: string;
}

export interface AuthenticateUserWithGoogleRequest {
  code: string;
}
export interface AuthenticateUserWithGoogleResponse {
  accessToken: string;
}

export interface UserResponse {
  id: string;
  email: string;
  name: string;
  profileImage: string;
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

