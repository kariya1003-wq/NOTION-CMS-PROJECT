import { LoginForm } from "./_components/login-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Server Component - 상태가 필요 없는 부분
export default function FormExamplePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Form</h1>
        <p className="mt-2 text-muted-foreground">
          Input과 Label을 조합한 폼 컴포넌트 예제입니다.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* 로그인 폼 - Client Component */}
        <LoginForm />

        {/* 프로필 편집 폼 - Server Component */}
        <Card>
          <CardHeader>
            <CardTitle>프로필 편집</CardTitle>
            <CardDescription>공개 프로필 정보를 수정합니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">이름</Label>
                <Input id="firstName" placeholder="홍" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">성</Label>
                <Input id="lastName" placeholder="길동" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">사용자명</Label>
              <Input id="username" placeholder="@username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">소개</Label>
              <Input id="bio" placeholder="간단한 자기소개를 입력하세요" />
            </div>
          </CardContent>
          <CardFooter className="gap-2">
            <Button>변경사항 저장</Button>
            <Button variant="outline">취소</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
