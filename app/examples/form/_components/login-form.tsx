"use client";

import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 로그인 폼 검증 스키마
const loginSchema = z.object({
  email: z.string().email("올바른 이메일 형식을 입력하세요"),
  password: z
    .string()
    .min(6, "비밀번호는 최소 6자 이상이어야 합니다"),
});

type LoginFormData = z.infer<typeof loginSchema>;

// 로그인 폼 - Client Component (상태 관리)
export function LoginForm() {
  const [submitted, setSubmitted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    // 실제로는 여기서 API 호출
    console.log("폼 데이터:", data);

    setSubmitted(true);

    // 기존 타이머 제거 후 새로운 타이머 설정
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  // 컴포넌트 언마운트 시 타이머 클린업
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인</CardTitle>
        <CardDescription>이메일과 비밀번호로 로그인하세요.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && (
              <p className="text-sm text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {submitted
              ? "로그인 완료!"
              : isSubmitting
                ? "로그인 중..."
                : "로그인"}
          </Button>
          {submitted && (
            <Badge variant="secondary" className="self-center">
              폼 제출 성공
            </Badge>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
