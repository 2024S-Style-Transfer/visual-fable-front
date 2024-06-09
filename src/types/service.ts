export interface ExampleItem {
  id: string;
  data: string;
}

export interface GenerateExampleImagesRequest {
  text: string;
}

export interface ExampleResponse {
  content: ExampleItem[];
  last: boolean;
}

export interface GeneratedItem {
  index: number;
  promptText: string;
  generatedImage: string;
}
export interface BasicItem {
  index: number;
  promptText: string;
}

export interface GenerateImagesRequest {
  projectId: string;
  id: string; // exampleImageId
  basicItems: BasicItem[];
}
export interface GenerateImagesResponse {
  id: string;
  generatedItems: GeneratedItem[];
}

export interface ProjectResponse {
  content: ProjectContent[];
  last: boolean;
  numberOfElements: number;
}
export interface ProjectContent {
  projectId: string;
  summary: string;
  exampleImage: string;
  generatedItems: GeneratedItem[];
  time: string;
}

export interface ProjectDetail {
  projectId: string;
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
  description: string;
  requestExample: string;
  responseExample: string;
}
export interface ApiMethodCategory {
  name: string;
  methods: ApiMethodItem[];
}
