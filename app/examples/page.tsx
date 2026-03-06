import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { examples } from "./_data/examples";

export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* 페이지 헤더 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">컴포넌트 예제</h1>
        <p className="mt-2 text-muted-foreground">
          shadcn/ui 컴포넌트를 활용한 UI 예제 모음입니다.
        </p>
      </div>

      {/* 예제 카드 그리드 */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {examples.map((example) => (
          <Link key={example.href} href={example.href} className="group block">
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{example.title}</CardTitle>
                  <Badge variant={example.badgeVariant}>{example.badge}</Badge>
                </div>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" className="gap-1 pl-0">
                  예제 보기
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
