"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// 사이트 전체 공통 헤더 컴포넌트
export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-4">
        {/* 로고 */}
        <div className="mr-6">
          <Link href="/" className="font-bold text-foreground">
            Next.js 스타터킷
          </Link>
        </div>

        {/* 네비게이션: 홈, 예제 */}
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/"
            aria-current={isActive("/") ? "page" : undefined}
            className={cn(
              "transition-colors hover:text-foreground",
              isActive("/")
                ? "text-foreground font-medium"
                : "text-foreground/60"
            )}
          >
            홈
          </Link>
          <Link
            href="/examples"
            aria-current={isActive("/examples") ? "page" : undefined}
            className={cn(
              "transition-colors hover:text-foreground",
              isActive("/examples")
                ? "text-foreground font-medium"
                : "text-foreground/60"
            )}
          >
            예제
          </Link>
        </nav>
      </div>
    </header>
  );
}
