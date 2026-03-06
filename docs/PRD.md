# PRD: 개인 개발 블로그 (Notion CMS 기반)

## 1. 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 프로젝트명 | 개인 개발 블로그 |
| 목적 | Notion을 CMS로 활용한 개인 기술 블로그 |
| 배포 환경 | Vercel |
| 작성일 | 2026-03-06 |

### 1.1 배경

별도의 CMS 시스템 구축 없이 평소에 사용하는 Notion에서 글을 작성하면 자동으로 블로그에 반영되는 워크플로우가 필요하다. Notion API를 활용하면 Notion 데이터베이스가 곧 CMS 역할을 하며, 콘텐츠 작성과 발행을 Notion UI에서 직접 처리할 수 있다.

### 1.2 목표

- Notion에서 글 작성 후 `Status`를 "발행됨"으로 변경하는 것만으로 블로그에 자동 반영
- 개발자 친화적인 깔끔한 UI/UX 제공
- 빠른 페이지 로딩 (Next.js SSG/ISR 활용)

---

## 2. 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | Next.js 15 (App Router), TypeScript |
| CMS | Notion API (`@notionhq/client`) |
| Styling | Tailwind CSS, shadcn/ui |
| Icons | Lucide React |
| Deployment | Vercel |

---

## 3. Notion 데이터베이스 구조

블로그 글은 Notion 데이터베이스 한 개로 관리한다.

| 필드명 | 타입 | 설명 |
|--------|------|------|
| `Title` | `title` | 글 제목 |
| `Category` | `select` | 카테고리 (예: React, Next.js, TypeScript) |
| `Tags` | `multi_select` | 태그 (복수 선택) |
| `Published` | `date` | 발행일 |
| `Status` | `select` | `초안` / `발행됨` |
| Content | page body | 글 본문 (Notion 페이지 내용) |

> API 연동 시 `Status = 발행됨`인 항목만 노출한다.

---

## 4. 주요 기능

### 4.1 글 목록 조회

- Notion 데이터베이스에서 `Status = 발행됨` 글 목록을 가져온다.
- 기본 정렬: `Published` 내림차순 (최신 글 우선)
- 카드 형태로 표시: 제목, 카테고리, 태그, 발행일

### 4.2 글 상세 페이지

- Notion 페이지 본문(`page content`)을 렌더링한다.
- 지원 블록: 제목(H1~H3), 본문, 코드 블록, 인용, 이미지, 목록

### 4.3 카테고리별 필터링

- 카테고리 선택 시 해당 카테고리 글만 표시
- URL 파라미터(`?category=React`)로 필터 상태 유지

### 4.4 검색 기능

- 제목 및 태그 기준 클라이언트 사이드 검색
- 검색어 입력 시 실시간 필터링

### 4.5 반응형 디자인

- 모바일(320px~) / 태블릿 / 데스크탑 모두 대응
- Tailwind CSS 반응형 유틸리티 사용

---

## 5. 화면 구성

### 5.1 홈 (`/`)

- 최근 발행된 글 목록 (최대 10개)
- 카테고리 필터 탭
- 검색 입력창

```
┌─────────────────────────────────┐
│ Header (로고 + 네비게이션)        │
├─────────────────────────────────┤
│ 카테고리 필터 탭                  │
├─────────────────────────────────┤
│ 검색창                           │
├─────────────────────────────────┤
│ [글 카드] [글 카드] [글 카드]     │
│ [글 카드] [글 카드] [글 카드]     │
└─────────────────────────────────┘
```

### 5.2 글 상세 (`/posts/[slug]`)

- 제목, 카테고리, 태그, 발행일
- Notion 페이지 본문 렌더링
- 이전/다음 글 네비게이션

```
┌─────────────────────────────────┐
│ Header                          │
├─────────────────────────────────┤
│ 제목                             │
│ 카테고리 | 태그 | 발행일          │
├─────────────────────────────────┤
│ 본문 내용                        │
│ ...                             │
├─────────────────────────────────┤
│ [이전 글]           [다음 글]    │
└─────────────────────────────────┘
```

### 5.3 카테고리 (`/categories/[category]`)

- 선택된 카테고리의 글 목록
- 홈과 동일한 카드 레이아웃

---

## 6. 라우트 구조

```
app/
├── layout.tsx              # 루트 레이아웃 (Header 포함)
├── page.tsx                # 홈 — 글 목록 + 필터 + 검색
├── posts/
│   └── [slug]/
│       └── page.tsx        # 글 상세 페이지
└── categories/
    └── [category]/
        └── page.tsx        # 카테고리별 글 목록
```

---

## 7. API 설계

### 7.1 Notion API 래퍼

```
lib/
├── notion.ts       # Notion 클라이언트 초기화
└── posts.ts        # 글 목록/상세 조회 함수
```

| 함수 | 설명 |
|------|------|
| `getPosts(category?)` | 발행된 글 목록 조회 (카테고리 필터 선택적) |
| `getPostBySlug(slug)` | 특정 글 상세 조회 |
| `getPostContent(pageId)` | Notion 페이지 블록(본문) 조회 |
| `getCategories()` | 카테고리 목록 조회 |

### 7.2 환경 변수

```
NOTION_API_KEY=          # Notion Integration 시크릿 키
NOTION_DATABASE_ID=      # 블로그 데이터베이스 ID
```

---

## 8. MVP 범위

MVP에 포함되는 기능:

- [x] Notion API 연동 (`@notionhq/client`)
- [x] 글 목록 페이지 (`/`)
- [x] 글 상세 페이지 (`/posts/[slug]`)
- [x] 카테고리 필터링
- [x] 기본 스타일링 (Tailwind CSS + shadcn/ui)
- [x] 반응형 디자인

MVP에서 제외되는 기능:

- [ ] 댓글 기능
- [ ] RSS 피드
- [ ] 다크 모드 토글
- [ ] 글 조회수 집계

---

## 9. 구현 단계

### Step 1: 환경 설정

- `@notionhq/client` 패키지 설치
- `.env.local`에 `NOTION_API_KEY`, `NOTION_DATABASE_ID` 설정
- Notion Integration 생성 및 데이터베이스 연결

### Step 2: Notion 데이터베이스 구성

- 데이터베이스 필드 스키마 설정 (위 3절 참고)
- 샘플 글 3~5개 작성 및 발행

### Step 3: 글 목록 페이지 구현

- `lib/notion.ts`, `lib/posts.ts` 작성
- 홈 페이지에 글 카드 목록 렌더링
- 카테고리 필터 UI 구현

### Step 4: 글 상세 페이지 구현

- Notion 페이지 블록 파싱 및 렌더링
- `[slug]` 기반 동적 라우팅 설정

### Step 5: 스타일링 및 최적화

- shadcn/ui 컴포넌트 적용
- ISR(Incremental Static Regeneration) 설정으로 성능 최적화
- 반응형 레이아웃 검증

---

## 10. 비기능 요구사항

| 항목 | 목표 |
|------|------|
| 초기 로딩 속도 | LCP 2.5초 이하 |
| 빌드 방식 | ISR (revalidate: 60초) |
| 접근성 | WCAG 2.1 AA 수준 |
| SEO | 페이지별 메타태그(`title`, `description`, `og:*`) 설정 |
