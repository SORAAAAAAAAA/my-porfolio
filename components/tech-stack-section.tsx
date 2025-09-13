import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TechStackSection() {
  const techStack = {
    frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS"],
    backend: ["Python", "PostgreSQL", "Neon DB", "Node.js"],
  
  }

  return (
    <section id="tech-stack" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-xl">🔧 Tech Stack</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-foreground">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => ( 
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-foreground">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.backend.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
