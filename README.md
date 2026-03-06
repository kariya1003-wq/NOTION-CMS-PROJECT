# 개인 개발 블로그

Notion을 CMS로 활용한 개인 기술 블로그입니다. Notion 데이터베이스에서 글을 작성하고 발행 상태를 변경하면 블로그에 자동으로 반영됩니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router) + TypeScript
- **CMS**: Notion API (`@notionhq/client`)
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 주요 기능

- Notion 데이터베이스에서 블로그 글 목록 조회
- 개별 글 상세 페이지 렌더링
- 카테고리별 필터링
- 클라이언트 사이드 검색
- 반응형 디자인

## 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 아래 값을 설정합니다.

```env
NOTION_API_KEY=your_notion_integration_secret
NOTION_DATABASE_ID=your_notion_database_id
```

Notion Integration 생성 방법은 [Notion API 공식 문서](https://developers.notion.com/docs/getting-started)를 참고하세요.

### 3. Notion 데이터베이스 구조

| 필드명 | 타입 | 설명 |
|--------|------|------|
| Title | title | 글 제목 |
| Category | select | 카테고리 |
| Tags | multi_select | 태그 |
| Published | date | 발행일 |
| Status | select | `초안` / `발행됨` |

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인합니다.

## 명령어

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run start    # 빌드된 앱 실행
npm run lint     # ESLint 코드 검사
```

## 프로젝트 구조

```
app/
├── layout.tsx              # 루트 레이아웃
├── page.tsx                # 홈 — 최근 글 목록
├── posts/[slug]/page.tsx   # 글 상세 페이지
└── categories/[category]/  # 카테고리별 목록
lib/
├── notion.ts               # Notion 클라이언트
└── posts.ts                # 글 조회 함수
components/
├── layout/                 # Header 등 공통 레이아웃
└── ui/                     # shadcn/ui 컴포넌트
docs/
└── PRD.md                  # 프로젝트 요구사항 문서
```

## 배포

Vercel에 배포할 때 환경 변수(`NOTION_API_KEY`, `NOTION_DATABASE_ID`)를 프로젝트 설정에 추가해야 합니다.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
