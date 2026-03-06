import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// 카드 컴포넌트 예제 페이지
export default function CardExamplePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Card</h1>
        <p className="mt-2 text-muted-foreground">
          콘텐츠를 시각적으로 구분하는 카드 컴포넌트입니다.
        </p>
      </div>

      <div className="space-y-10">
        {/* 기본 카드 */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">기본 카드</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>카드 제목</CardTitle>
                <CardDescription>카드 설명 텍스트가 여기에 표시됩니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  카드 본문 내용입니다. 다양한 콘텐츠를 담을 수 있습니다.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">자세히 보기</Button>
              </CardFooter>
            </Card>

            {/* 뱃지 포함 카드 */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>새로운 기능</CardTitle>
                  <Badge>New</Badge>
                </div>
                <CardDescription>최신 업데이트 내용을 확인하세요.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  이번 업데이트에서는 성능이 크게 개선되었습니다.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">업데이트</Button>
                <Button variant="ghost" size="sm">나중에</Button>
              </CardFooter>
            </Card>

            {/* 인용문 카드 */}
            <Card>
              <CardContent className="pt-6">
                <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground">
                  &quot;shadcn/ui는 복사-붙여넣기 방식의 컴포넌트 라이브러리입니다.&quot;
                </blockquote>
              </CardContent>
              <CardFooter>
                <p className="text-xs text-muted-foreground">— shadcn 공식 문서</p>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* 통계 카드 */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">통계 카드</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "총 방문자", value: "12,345", change: "+12%" },
              { label: "이번 달 매출", value: "₩2,450,000", change: "+8%" },
              { label: "활성 사용자", value: "1,234", change: "-3%" },
            ].map((stat) => (
              <Card key={stat.label}>
                <CardHeader className="pb-2">
                  <CardDescription>{stat.label}</CardDescription>
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant={stat.change.startsWith("+") ? "default" : "destructive"}
                  >
                    {stat.change}
                  </Badge>
                  <span className="ml-2 text-xs text-muted-foreground">지난달 대비</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
