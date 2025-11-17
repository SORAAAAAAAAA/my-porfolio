"use client"
import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="w-full px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
