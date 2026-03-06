import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Share2, Settings } from "lucide-react";

export default function ButtonExamplePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      {/* 페이지 헤더 */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="mt-2 text-muted-foreground">
          CVA를 활용한 Button 컴포넌트의 다양한 variant와 size를 보여줍니다.
        </p>
      </div>

      {/* Variants */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">Variants</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">Sizes</h2>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button>Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">With Icons</h2>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Heart className="mr-2 h-4 w-4" />
            좋아요
          </Button>
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            공유
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* States */}
      <section className="mb-12">
        <h2 className="mb-6 text-xl font-semibold">States</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Normal</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* As Child (Polymorphic) */}
      <section>
        <h2 className="mb-6 text-xl font-semibold">As Child (Polymorphic)</h2>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="#anchor">Link로 렌더</a>
          </Button>
          <Button asChild variant="outline">
            <label htmlFor="file-upload">파일 선택</label>
          </Button>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            aria-label="파일 업로드"
          />
        </div>
      </section>
    </div>
  );
}
