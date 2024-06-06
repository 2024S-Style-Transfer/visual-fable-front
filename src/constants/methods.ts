import { ApiMethodCategory, HTTP_METHOD } from '@/types/service';

export const PUBLIC_API_METHODS: ApiMethodCategory[] = [
  {
    name: 'Generate Image',
    methods: [
      {
        httpMethod: HTTP_METHOD.POST,
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
      "id": "https://example.com/generatedImage1.jpg",
      "data": "Generated image 1"
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
        httpMethod: HTTP_METHOD.POST,
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
      "promptText": "Generate an image of a sunset",
      "generatedImage": "generated image string"
    }
  ]
}`,
        responseExample: `{
  "projectId": "12345",
  "generatedItems": [
    {
      "index": 0,
      "promptText": "Generate an image of a sunset",
      "generatedImage": "generated image string"
    }
  ],
  "time": "2024-06-03T12:00:00"
}`,
      },
    ],
  },
];
