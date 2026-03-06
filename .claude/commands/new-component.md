# 커스텀 컴포넌트 생성

컴포넌트 정보: $ARGUMENTS

다음 패턴을 따라 컴포넌트를 생성하세요:

## 파일 경로

- **일반 UI 컴포넌트:** `components/ui/<name>.tsx`
- **레이아웃 컴포넌트:** `components/layout/<name>.tsx`

## 코드 패턴

### 1. TypeScript Props 타입 정의

```typescript
import { cn } from "@/lib/utils"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary"
  size?: "sm" | "md" | "lg"
  children?: React.ReactNode
}

export function ComponentName({ variant = "primary", size = "md", className, ...props }: Props) {
  // 구현...
}
```

### 2. CVA 패턴 (variant/size 있을 때)

`variant`나 `size` 변형이 있는 경우 **CVA (Class Variance Authority)**를 사용하세요:

```typescript
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        primary: "primary-classes",
        secondary: "secondary-classes"
      },
      size: {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)

interface Props extends VariantProps<typeof componentVariants> {
  className?: string
  children?: React.ReactNode
}

export function ComponentName({ variant, size, className, ...props }: Props) {
  return <div className={cn(componentVariants({ variant, size }), className)} {...props} />
}
```

### 3. 클래스 병합

**반드시 `lib/utils.ts`의 `cn()`을 사용하세요:**

```typescript
className={cn("base-class", condition && "conditional-class", props.className)}
```

### 4. 아이콘 사용

`lucide-react`에서 아이콘을 import하세요:

```typescript
import { ChevronDown } from "lucide-react"

export function ComponentName() {
  return <ChevronDown className="w-4 h-4" />
}
```

### 5. 절대 경로

상대 경로(`../../../`) 대신 절대 경로(`@/`)를 사용하세요:

```typescript
// ✅ Good
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// ❌ Bad
import { cn } from "../../../lib/utils"
import { Button } from "../../../components/ui/button"
```

### 6. Client Component

상호작용(useState, onClick, onChange 등)이 필요한 경우 파일 최상단에 선언하세요:

```typescript
"use client"

import { useState } from "react"

export function InteractiveComponent() {
  const [state, setState] = useState(false)
  // ...
}
```

## 체크리스트

- [ ] TypeScript `Props` 인터페이스 정의
- [ ] variant/size 있으면 CVA 패턴 적용
- [ ] 클래스 병합 시 `cn()` 사용
- [ ] 절대 경로 `@/` 사용
- [ ] 불필요한 `"use client"` 선언 없음
- [ ] PascalCase 네이밍 준수
