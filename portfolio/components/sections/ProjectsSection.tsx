import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Project } from "@/data/types"

interface ProjectItemProps {
  project: Project
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="space-y-1">
      <h4 className="text-sm font-medium">{project.title}</h4>
      <p className="text-gray-400 text-xs">{project.description}</p>
      <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 text-xs hover:underline">
        {project.url}
      </a>
    </div>
  )
}

interface ProjectsSectionProps {
  title: string
  projects: Project[]
}

export function ProjectsSection({ title, projects }: ProjectsSectionProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">{title}</CardTitle>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </CardContent>
    </Card>
  )
}
