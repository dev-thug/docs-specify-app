"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

// 라이트 ↔ 다크 토글. 아이콘 전환은 CSS(.dark)로만 처리해 hydration 전후 마크업이 같다.
export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-sm"
      aria-label={label}
      title={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground"
    >
      <span className="relative size-4">
        <Sun className="absolute inset-0 size-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
        <Moon className="absolute inset-0 size-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
      </span>
    </Button>
  );
}
