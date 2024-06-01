import { ApiMethodCategory, ExampleItem, GeneratedItem, ProjectResponse, UserResponse } from '@/types/service';

export const MOCK_IMG_DATA =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAEB0lEQVR4nO3YQU/yShiG4SmlBSwYjEIQCyaSqmHl//8NLNgZSaORAmJQxCC0dihzFs3hEPQkX8KXlid5rl1r9YW5w2RQ63Q6gpBl0n4BtC8mhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J42bRfwH88zxNCNBqN+HK5XPZ6ve0HHMexLEsIoZQaj8fT6TSKouPjY9u2s9m93kiKo/d3KAnH4/H7+/vp6enmThAEpmm22+1fH57NZq1WS9f1fr//9PTkOA7i6L8i/Y00DEPXdSeTiWma2/eDIMjn8z+fV0pNJpNarZbP5w3DaDabi8VisVhgjf6L0k+4XC5N07y9vc3lctv3/28dfd9fr9fxtiaEMAzDNM2ddZzNZt1udz6fx5ePj48PDw9KqQRGJy/9jbRcLpfL5Z/34/W6v7+XUhYKhXq9Hq+dlFIIYRjG5knDMMIw3PmbJycng8Hg5uZmNpvN5/Pr62tN0xIYnbz0P4W/iqJISmmapuM47Xb76OjIdd0gCIQQ6/VaCLHdQ9O0n58w27bX67XnecPhsFarFQqFxEYn7EAT6rp+d3fXbDaz2Ww2m724uMjlcm9vb+LfFdxeOKVUJrP7RnRdt2374+Mjl8tVq9UkRyfsQBP+ZJpmvI/FR4/VarX5kZRye3Pb8H1fCBGGYRRFCY9O0oEm/Pr66na739/f8aVSanPEyOfzmUxmc4iQUoZhuDlibPi+//r6Wq/XdV2Pv/YlNjphB5rQsqxCoeB5XhiGq9VqMBhEUVSpVIQQmUzm7OxsNBr5vi+l7Pf7lmXtrKNS6vn5uVgsVqvVRqPx+fk5nU6TGZ289E+kv9I07erqajQa9Xq9+BzvOM7m/yDn5+dKKdd1hRClUuny8nLn119eXqSUrVZLCFEsFiuVynA4LJVKf7Lp7Tk6eVqn00n7NdBeDnQjpT/HhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEN4/cnznZiQb6hsAAAAASUVORK5CYII=';

export const MOCK_EXAMPLE_IMAGES: ExampleItem[] = [
  {
    id: '1',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
  {
    id: '2',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
  {
    id: '3',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
  {
    id: '4',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
  {
    id: '5',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
  {
    id: '6',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
  {
    id: '7',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
  {
    id: '8',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
  {
    id: '9',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
  {
    id: '10',
    url: MOCK_IMG_DATA,
    description: 'description1',
  },
];

export const MOCK_GENERATED_ITEMS: GeneratedItem[] = [
  {
    id: '1',
    promptText: 'promptText1',
    generatedImage: MOCK_IMG_DATA,
  },
  {
    id: '2',
    promptText: 'promptText2',
    generatedImage: MOCK_IMG_DATA,
  },
  {
    id: '3',
    promptText: 'promptText3',
    generatedImage: MOCK_IMG_DATA,
  },
  {
    id: '4',
    promptText: 'promptText4',
    generatedImage: MOCK_IMG_DATA,
  },
  {
    id: '5',
    promptText: 'promptText5',
    generatedImage: MOCK_IMG_DATA,
  },
  {
    id: '6',
    promptText: 'promptText6',
    generatedImage: MOCK_IMG_DATA,
  },
  {
    id: '7',
    promptText: 'promptText7',
    generatedImage: MOCK_IMG_DATA,
  },
  {
    id: '8',
    promptText: 'promptText8',
    generatedImage: MOCK_IMG_DATA,
  },
  {
    id: '9',
    promptText: 'promptText9',
    generatedImage: MOCK_IMG_DATA,
  },
  {
    id: '10',
    promptText: 'promptText10',
    generatedImage: MOCK_IMG_DATA,
  },
];

export const MOCK_USER_DATA: UserResponse = {
  id: '1',
  email: 'abc@gmail.com',
  name: 'abc',
  profileImage: MOCK_IMG_DATA,
};

export const MOCK_PROJECT_LIST: ProjectResponse[] = [
  {
    projectId: '1',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project1',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
  {
    projectId: '2',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project2',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
  {
    projectId: '3',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project3',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
  {
    projectId: '4',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project4',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
  {
    projectId: '5',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project5',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
  {
    projectId: '6',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project6',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
  {
    projectId: '7',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project7',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
  {
    projectId: '8',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project8',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
  {
    projectId: '9',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project9',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
  {
    projectId: '10',
    exampleImage: MOCK_IMG_DATA,
    summary: 'project10',
    generatedItems: MOCK_GENERATED_ITEMS,
    time: '2024.05.13',
  },
];

export const MOCK_API_METHODS: ApiMethodCategory[] = [
  {
    name: 'User',
    methods: [
      {
        httpMethod: 'GET',
        url: '/user',
        example: `{   
  "projectId": "12345",  
  "exampleImage": "Base64인코딩된이미지데이터1", 
  "basicItems": [ 
    { 
      "index": "item1",
       "promptText": "이미지 설명 예시 1" 
    }, 
    {
       "index": "item2", 
      "promptText": "이미지 설명 예시 2"
     }
   ]
   "text": "string"
 }`,
      },
      {
        httpMethod: 'POST',
        url: '/user',
        example: 'Create user',
      },
      {
        httpMethod: 'PUT',
        url: '/user',
        example: 'Update user information',
      },
      {
        httpMethod: 'DELETE',
        url: '/user',
        example: 'Delete user',
      },
    ],
  },
  {
    name: 'Project',
    methods: [
      {
        httpMethod: 'GET',
        url: '/project',
        example: 'Get project information',
      },
      {
        httpMethod: 'POST',
        url: '/project',
        example: 'Create project',
      },
      {
        httpMethod: 'PUT',
        url: '/project',
        example: 'Update project information',
      },
      {
        httpMethod: 'DELETE',
        url: '/project',
        example: 'Delete project',
      },
    ],
  },
  {
    name: 'Image',
    methods: [
      {
        httpMethod: 'GET',
        url: '/image',
        example: 'Get image information',
      },
      {
        httpMethod: 'POST',
        url: '/image',
        example: 'Create image',
      },
      {
        httpMethod: 'PUT',
        url: '/image',
        example: 'Update image information',
      },
      {
        httpMethod: 'DELETE',
        url: '/image',
        example: 'Delete image',
      },
    ],
  },
];
