export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 backdrop-blur-sm mt-16 sm:mt-24">
      <div className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center space-y-2">
            <p className="text-foreground/80 text-sm font-medium">Built with Next.js, React & Tailwind CSS</p>
            <p className="text-muted-foreground text-xs">© 2025 Ray Cielo Briones. All rights reserved.</p>
          </div>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <p className="text-muted-foreground text-xs">Designed & Developed with care</p>
        </div>
      </div>
    </footer>
  )
}
