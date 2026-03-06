// 예제 목록 메타데이터

interface Example {
  href: string;
  title: string;
  description: string;
  badge: string;
  badgeVariant: "default" | "secondary" | "outline" | "destructive";
}

export const examples: Example[] = [
  {
    href: "/examples/button",
    title: "Button",
    description: "CVA를 활용한 Button 컴포넌트의 variant와 size 예제입니다.",
    badge: "Interactive",
    badgeVariant: "default",
  },
  {
    href: "/examples/card",
    title: "Card",
    description: "콘텐츠를 담는 카드 레이아웃 컴포넌트 예제입니다.",
    badge: "Layout",
    badgeVariant: "secondary",
  },
  {
    href: "/examples/form",
    title: "Form",
    description: "Input과 Label을 조합한 폼 컴포넌트 예제입니다.",
    badge: "Input",
    badgeVariant: "outline",
  },
];
