# [2024S 종합설계프로젝트1] VisualFable

## About

> 해당 프로젝트는 종합설계프로젝트1에서 진행 중이며, `일관성있는 스토리 이미지 생성 연구`를 활용한 서비스의 Frontend Repo 입니다.

---

## Preview (TBD)

---

## Usage

1. Git Clone

```cmd
$ git clone https://github.com/2024S-Style-Transfer/visual-fable-front.git
```

2. Install package (\* yarn을 추천드립니다.)

```cmd
$ yarn

# or

$ npm install
```

3. Start

```cmd
$ yarn dev

# or

$ npm run dev
```

4. Build & Deploy (TBD)

```cmd
$ yarn build

# or

$ npm run build
```

---

## Path

- `/`: 메인 페이지 (이미지 생성 기능)
- `/about`: 서비스 소개 페이지
- `/storage`: 이전에 생성했던 이미지들 모음 페이지
- `/storage/:id`: 이전에 생성했던 이미지들의 상세 페이지
- `/methods`: 서비스 외부 호출용으로 제공하는 API 목록 페이지

---

## Simple Project Structure

- `/src/components/pages/**`: 각 Page들을 구성하는 파일들
- `/src/app/**`: 각 Page파일들을 routing 해주는 기능
- `/src/theme/**`, `/src/components/common/**`, `/src/components/templates/**`: 디자인 관련 파일들 (GlobalStyle, Reusing Components)
- `/src/service/**`, `/src/types/service.ts`, `/src/mock/**`: 서버 통신과 관련한 파일들 & Mock Data
- `/src/store/globalStore.ts`: 로딩 등 전역으로 저장하는 Data State를 모아두는 state management (Store)
- `/src/components/steps/**`, `/src/store/generateStore.ts`: 이미지 생성 시 사용되는 파일들 (step 별 컴포넌트 모음, 각각의 State를 모아두는 state management)
- `/src/utils/**`: front에서 필요한 custom utils
- `/src/svgs.tsx`: 페이지를 그릴 때 이용되는 svg 모음

---

## Used Tech Stack List

- Next.js(v14) & TypeScript(v5)
- emotion.js (= Styling)
- zustand (= State Management)
- axios (= HTTP Client)
- react-pageflip
- next/image (= Image Optimization)
- @emailjs/browser
- uuid
- prettier (= Code Formatting)
- eslint (= Code Rule)
