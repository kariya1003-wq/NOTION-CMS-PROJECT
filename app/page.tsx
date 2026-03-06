import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="mx-auto max-w-3xl px-4 py-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Next.js 스타터킷에 오신 것을 환영합니다
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          shadcn/ui 컴포넌트와 Tailwind CSS v4를 활용한 모던 React 개발 환경입니다.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg">
            <Link href="/examples">예제 보기</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              공식 문서
            </a>
          </Button>
        </div>

        <div className="mt-12 rounded-lg border bg-muted p-8">
          <h2 className="text-lg font-semibold">주요 기술 스택</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>✓ Next.js 16 + React 19 (App Router, RSC)</li>
            <li>✓ TypeScript strict 모드</li>
            <li>✓ Tailwind CSS v4 (@theme inline)</li>
            <li>✓ shadcn/ui 컴포넌트</li>
            <li>✓ Lucide React 아이콘</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
