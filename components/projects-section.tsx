import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "CodeCraft",
      description: "Online certifications for programmers",
      url: "codecraft.dev",
      tech: ["React", "Node.js", "PostgreSQL"],
    },
    {
      title: "BASE404",
      description: "Online coding bootcamp",
      url: "base-404.com",
      tech: ["Next.js", "TypeScript", "Prisma"],
    },
    {
      title: "Dilla PH",
      description: "AI-powered wardrobe assistant",
      url: "dilla.ph",
      tech: ["Python", "TensorFlow", "React"],
    },
    {
      title: "DYNAMIS Workout Tracker",
      description: "AI-powered workout tracker",
      url: "dynamis.app.online",
      tech: ["React Native", "Node.js", "MongoDB"],
    },
  ]

  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-xl">🚀 Recent Projects</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="border border-border">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-foreground">{project.title}</h3>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <p className="text-sm text-muted-foreground mb-3">{project.url}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
