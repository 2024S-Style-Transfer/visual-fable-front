/*import { ApiMethodCategory, ExampleItem, GeneratedItem, ProjectResponse, UserResponse } from '@/types/service';

export const MOCK_IMG_DATA =
  'iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAEB0lEQVR4nO3YQU/yShiG4SmlBSwYjEIQCyaSqmHl//8NLNgZSaORAmJQxCC0dihzFs3hEPQkX8KXlid5rl1r9YW5w2RQ63Q6gpBl0n4BtC8mhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J4TAiPCeExITwmhMeE8JgQHhPCY0J42bRfwH88zxNCNBqN+HK5XPZ6ve0HHMexLEsIoZQaj8fT6TSKouPjY9u2s9m93kiKo/d3KAnH4/H7+/vp6enmThAEpmm22+1fH57NZq1WS9f1fr//9PTkOA7i6L8i/Y00DEPXdSeTiWma2/eDIMjn8z+fV0pNJpNarZbP5w3DaDabi8VisVhgjf6L0k+4XC5N07y9vc3lctv3/28dfd9fr9fxtiaEMAzDNM2ddZzNZt1udz6fx5ePj48PDw9KqQRGJy/9jbRcLpfL5Z/34/W6v7+XUhYKhXq9Hq+dlFIIYRjG5knDMMIw3PmbJycng8Hg5uZmNpvN5/Pr62tN0xIYnbz0P4W/iqJISmmapuM47Xb76OjIdd0gCIQQ6/VaCLHdQ9O0n58w27bX67XnecPhsFarFQqFxEYn7EAT6rp+d3fXbDaz2Ww2m724uMjlcm9vb+LfFdxeOKVUJrP7RnRdt2374+Mjl8tVq9UkRyfsQBP+ZJpmvI/FR4/VarX5kZRye3Pb8H1fCBGGYRRFCY9O0oEm/Pr66na739/f8aVSanPEyOfzmUxmc4iQUoZhuDlibPi+//r6Wq/XdV2Pv/YlNjphB5rQsqxCoeB5XhiGq9VqMBhEUVSpVIQQmUzm7OxsNBr5vi+l7Pf7lmXtrKNS6vn5uVgsVqvVRqPx+fk5nU6TGZ289E+kv9I07erqajQa9Xq9+BzvOM7m/yDn5+dKKdd1hRClUuny8nLn119eXqSUrVZLCFEsFiuVynA4LJVKf7Lp7Tk6eVqn00n7NdBeDnQjpT/HhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEB4TwmNCeEwIjwnhMSE8JoTHhPCYEN4/cnznZiQb6hsAAAAASUVORK5CYII=';

export const MOCK_EXAMPLE_IMAGES: ExampleItem[] = [
  {
    id: '1',
    data: MOCK_IMG_DATA,
  },
  {
    id: '2',
    data: MOCK_IMG_DATA,
  },
  {
    id: '3',
    data: MOCK_IMG_DATA,
  },
  {
    id: '4',
    data: MOCK_IMG_DATA,
  },
  {
    id: '5',
    data: MOCK_IMG_DATA,
  },
  {
    id: '6',
    data: MOCK_IMG_DATA,
  },
  {
    id: '7',
    data: MOCK_IMG_DATA,
  },
  {
    id: '8',
    data: MOCK_IMG_DATA,
  },
  {
    id: '9',
    data: MOCK_IMG_DATA,
  },
  {
    id: '10',
    data: MOCK_IMG_DATA,
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
    name: 'Generate Image',
    methods: [
      {
        httpMethod: 'POST',
        url: '/api/images',
        description: '프롬프트를 토대로 예시 이미지 생성을 요청하고, 결과를 페이지네이션하여 반환합니다.',
        requestExample: `POST /api/images?page=0&size=10
Content-Type: application/json
  
  {
    "text": "example text"
  }`,
        responseExample: `{
    "content": [
      {
        "imageUrl": "https://example.com/generatedImage1.jpg",
        "description": "Generated image 1"
      }
    ],
    "pageable": {
      "sort": {
        "empty": true,
        "unsorted": true,
        "sorted": false
      },
      "offset": 0,
      "pageNumber": 0,
      "pageSize": 10,
      "paged": true,
      "unpaged": false
    },
    "totalPages": 1,
    "totalElements": 1,
    "last": true,
    "size": 10,
    "number": 0,
    "sort": {
      "empty": true,
      "unsorted": true,
      "sorted": false
    },
    "numberOfElements": 1,
    "first": true,
    "empty": false
  }`,
      },
      {
        httpMethod: 'POST',
        url: '/api/generate-images',
        description: '생성된 예시 이미지와 함께 프롬프트 요청에 따라 이미지를 생성하고, 결과를 반환합니다.',
        requestExample: `POST /api/generate-images
Content-Type: application/json

{
  "projectId": "12345",
  "id": "exampleId",
  "basicItems": [
    {
      "index": 0,
      "promptText": "example prompt 1"
    },
    {
      "index": 1,
      "promptText": "example prompt 2"
    }
  ]
}`,
        responseExample: `{
  "id": "exampleId",
  "generatedItems": [
    {
      "id": "1",
      "promptText": "example prompt 1",
      "generatedImage": "https://example.com/generatedImage1.jpg"
    },
    {
      "id": "2",
      "promptText": "example prompt 2",
      "generatedImage": "https://example.com/generatedImage2.jpg"
    }
  ]
}`,
      },
    ],
  },
  {
    name: 'Projects',
    methods: [
      {
        httpMethod: 'GET',
        url: '/api/projects',
        description: '프로젝트 목록을 요청하고, 생성된 이미지 목록을 반환합니다.',
        requestExample: `GET /api/projects
Content-Type: application/json`,
        responseExample: `{
  "projects": [
    {
      "projectId": "12345",
      "summary": "example summary",
      "exampleImage": "https://example.com/exampleImage.jpg",
      "generatedItems": [
        {
          "id": "1",
          "promptText": "example prompt",
          "generatedImage": "https://example.com/generatedImage.jpg"
        }
      ],
      "time": "2024.05.13"
    }
  ]
}`,
      },
      {
        httpMethod: 'POST',
        url: '/api/projects',
        description: '프로젝트를 생성하고, 생성된 이미지 목록을 반환합니다.',
        requestExample: `POST /api/projects
Content-Type: application/json
  
  {
    "summary": "example summary",
    "exampleImage": "https://example.com/exampleImage.jpg",
    "generatedItems": [
      {
        "id": "1",
        "promptText": "example prompt",
        "generatedImage": "https://example.com/generatedImage.jpg"
      }
    ],
    "time": "2024.05.13"
  }`,
        responseExample: `{
    "projectId": "12345",
    "summary": "example summary",
    "exampleImage": "https://example.com/exampleImage.jpg",
    "generatedItems": [
      {
        "id": "1",
        "promptText": "example prompt",
        "generatedImage": "https://example.com/generatedImage.jpg"
      }
    ],
    "time": "2024.05.13"
  }`,
      },
    ],
  },
  {
    name: 'User',
    methods: [
      {
        httpMethod: 'GET',
        url: '/api/user',
        description: '사용자 정보를 요청하고, 사용자 정보를 반환합니다.',
        requestExample: `GET /api/user
Content-Type: application/json`,

        responseExample: `{
  "id": "1",
  "email": "abc@acb.com",
  "name": "example name",
  "profileImage": "https://example.com/profileImage.jpg"
}`,
      },
      {
        httpMethod: 'POST',
        url: '/api/user',
        description: '사용자 정보를 생성하고, 사용자 정보를 반환합니다.',
        requestExample: `POST /api/user
Content-Type: application/json
  
  {
    "email": "abc@acb.com",
    "name": "example name",
    "profileImage": "https://example.com/profileImage.jpg"
  }`,
        responseExample: `{
    "id": "1", 
    "email": "abc@acb.com",
    "name": "example name",
    "profileImage": "https://example.com/profileImage.jpg"
  }`,
      },
    ],
  },
];*/
