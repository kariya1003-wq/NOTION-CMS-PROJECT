# 예제 페이지 추가

컴포넌트 이름: $ARGUMENTS

다음 작업을 순서대로 수행하세요:

## 1단계: 예제 페이지 생성

`app/examples/$ARGUMENTS/page.tsx` 파일을 생성하세요.

**기본 구조:**
- shadcn/ui 컴포넌트를 import하여 variant, size, 상태 등 다양한 예제를 보여주세요
- 상호작용(onClick, useState 등)이 필요한 경우 파일 최상단에 `"use client"`를 선언하세요
- Tailwind CSS 클래스와 `cn()` 유틸리티를 사용하세요
- 아이콘은 `lucide-react`를 사용하세요
- 절대 경로 `@/`를 사용하여 import하세요

**파일 템플릿 예시:**
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function $ARGUMENTS() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">기본</h2>
        {/* 예제들 */}
      </div>
    </div>
  )
}
```

## 2단계: 예제 목록 등록

`app/examples/page.tsx`의 `examples` 배열에 항목을 추가하세요.

**필수 항목:**
- `name`: 컴포넌트 이름 (영문, kebab-case)
- `title`: 한글 제목
- `description`: 설명
- `badge`: 카테고리 (Layout/Interactive/Input/Display 중 선택)
- `badgeVariant`: 배지 스타일 (기본: "secondary")

**카테고리 가이드:**
- `Layout`: 레이아웃 관련 (Header, Footer, Sidebar)
- `Interactive`: 상호작용 필요 (Dialog, Dropdown, Tabs)
- `Input`: 입력 요소 (Button, Input, Form)
- `Display`: 표시 요소 (Card, Badge, Alert)

**추가 예시:**
```typescript
{
  name: "badge",
  title: "Badge",
  description: "상태 표시 및 분류 라벨",
  badge: "Display",
  badgeVariant: "secondary"
}
```
