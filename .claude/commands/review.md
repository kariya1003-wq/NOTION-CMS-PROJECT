# 코드 리뷰 (Next.js/shadcn 패턴)

리뷰 대상: $ARGUMENTS (미입력 시 최근 변경 파일 자동 감지)

지정된 파일을 다음 체크리스트에 따라 검토하고 결과를 보고하세요.

## 검토 항목

### [ ] RSC/Client 구분
- 불필요한 `"use client"` 선언이 없는가?
- Server Component 기본, 상호작용(useState, onClick 등)이 있을 때만 Client Component 사용
- `"use client"`가 있다면 상호작용이 실제로 필요한가?

### [ ] cn() 사용
- 클래스 병합 시 모두 `cn()`을 사용하는가?
- `lib/utils.ts`에서 import하는가?
- 문자열 직접 연결(`, `) 미사용

**올바른 패턴:**
```typescript
className={cn("base-class", condition && "conditional", props.className)}
```

### [ ] TypeScript
- `any` 타입 사용 여부
- Props/State 타입 누락 여부
- 함수 반환 타입 누락 여부
- 올바른 타입 단언(`as`)만 사용

### [ ] 절대 경로
- `@/` 경로를 사용하는가?
- 상대 경로(`../../../`) 미사용
- `tsconfig.json`의 `paths` 설정과 일치

**올바른 패턴:**
```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

### [ ] Tailwind v4
- 인라인 `style` 대신 Tailwind 클래스 사용하는가?
- CSS-in-JS 라이브러리 미사용
- `@theme inline` 블록 CSS 변수 활용

**올바른 패턴:**
```typescript
// ✅ Good
<button className="px-4 py-2 bg-primary text-white" />

// ❌ Bad
<button style={{ padding: "8px 16px", background: "#000" }} />
```

### [ ] 컴포넌트 네이밍
- PascalCase 준수 (ComponentName.tsx)
- 파일명이 export 함수명과 일치

### [ ] Import 순서
```typescript
// 1. 외부 패키지
import React from "react"
import { useState } from "react"

// 2. shadcn/ui 및 컴포넌트
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// 3. 로컬 모듈
import type { Props } from "@/types"
```

### [ ] 접근성 (a11y)
- 아이콘 전용 버튼에 `aria-label` 존재하는가?
- `<img/>` 태그에 `alt` 속성 있는가?
- 버튼/링크 텍스트 명확한가?

**올바른 패턴:**
```typescript
<button aria-label="메뉴 열기">
  <Menu className="w-6 h-6" />
</button>
```

## 보고 형식

문제가 발견된 항목에 대해:

1. **항목 제목** - 상태 (✅ 통과 / ⚠️ 주의 / ❌ 오류)
2. **발견 내용** - 구체적인 문제점
3. **수정 방법** - 어떻게 개선할지
4. **수정된 코드** - 올바른 예시 코드

## 예시 보고

❌ **cn() 사용** - 오류
- **발견:** 클래스 병합 시 문자열 직접 연결 사용
  ```typescript
  className={"base-class" + (isActive ? "active" : "")}
  ```
- **수정 방법:** `lib/utils.ts`의 `cn()` 사용
  ```typescript
  className={cn("base-class", isActive && "active")}
  ```
