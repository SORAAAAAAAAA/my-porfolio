import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function TechStackBeyondCoding() {
  const techStack = {
    frontend: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS, HTML5, CSS3, Bootstrap"],
    backend: ["Python", "PostgreSQL", "Neon DB", "Node.js, Express.js, JavaScript, Supabase, Prisma, Docker, Redis"],
    
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Tech Stack Section */}
      <Card className="bg-card border-border">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-foreground flex items-center gap-2">🔧 Tech Stack</CardTitle>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-foreground font-medium mb-2 text-sm">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.frontend.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-muted border-border text-muted-foreground text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-foreground font-medium mb-2 text-sm">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.backend.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-muted border-border text-muted-foreground text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

      
          
        </CardContent>
      </Card>

      {/* Beyond Coding Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">🚀 Beyond Coding</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm space-y-4">
          <p>
            When I'm not writing code, I focus on continuous learning and personal growth. I go to the gym regularly to stay
            fit and maintain a healthy work-life balance. I also enjoy playing my guitar, which helps me unwind and
            sparks creativity. Additionally I love reading books on personal development and to stay updated with the latest tech trends.
          </p>
          <p>I try to learn through various online courses and tutorials.</p>
        </CardContent>
      </Card>
    </div>
  )
}
