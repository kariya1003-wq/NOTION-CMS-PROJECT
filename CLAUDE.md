# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 빌드된 앱 실행
npm run lint     # ESLint 코드 검사
```

shadcn/ui 컴포넌트 추가:
```bash
npx shadcn@latest add <component-name>
```

## 아키텍처

### 라우트 구조 (Next.js App Router)

```
app/
├── layout.tsx          # 루트 레이아웃 — Header를 모든 페이지에 주입
├── page.tsx            # 홈 (/)
└── examples/
    ├── page.tsx        # 예제 목록 (/examples)
    ├── button/page.tsx # 버튼 예제 — Server Component
    ├── card/page.tsx   # 카드 예제 — Server Component
    └── form/page.tsx   # 폼 예제 — Client Component ("use client", useState 사용)
```

새 예제 페이지를 추가할 때는 `app/examples/<name>/page.tsx`를 생성하고, `app/examples/page.tsx`의 `examples` 배열에 항목을 추가해야 한다.

### 컴포넌트 구조

- `components/layout/` — 공통 레이아웃 컴포넌트 (Header 등)
- `components/ui/` — shadcn/ui 컴포넌트 (직접 수정 가능한 복사 방식)

### 스타일링

Tailwind CSS v4를 사용하며, 별도의 `tailwind.config.*` 파일 없이 `app/globals.css`에서 모든 테마를 관리한다.

- 색상은 `oklch` 기반 CSS 변수로 정의 (`--primary`, `--background` 등)
- 다크 모드는 `.dark` 클래스 기반
- `@theme inline` 블록에서 Tailwind 유틸리티와 CSS 변수를 연결

### 주요 패턴

**cn() 유틸리티**: 모든 컴포넌트에서 클래스 병합 시 `lib/utils.ts`의 `cn()`을 사용한다.
```ts
import { cn } from "@/lib/utils"
```

**CVA (Class Variance Authority)**: Button, Badge 등의 variant/size 변형 관리에 사용한다.

**Radix UI**: shadcn/ui 내부적으로 접근성 기반 원시 컴포넌트(`radix-ui` 통합 패키지)를 사용한다.

**절대 경로**: `@/`는 프로젝트 루트를 가리킨다 (`tsconfig.json`의 `paths` 설정).

### 기술 스택

- Next.js 16 + React 19 (App Router, RSC 기본)
- TypeScript (strict 모드)
- Tailwind CSS v4
- shadcn/ui (New York 스타일, neutral 베이스 컬러)
- Lucide React (아이콘)
- ESLint 9 (FlatConfig, next/core-web-vitals + next/typescript)

## Project Context

- PRD 문서: @docs/PRD.md
- 개발 로드맵: @docs/ROADMAP.md
