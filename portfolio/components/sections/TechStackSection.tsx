import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TechCategoryProps {
  title: string
  technologies: string[]
}

export function TechCategory({ title, technologies }: TechCategoryProps) {
  return (
    <div>
      <h3 className="text-foreground font-medium mb-2 text-sm">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="bg-muted border-border text-muted-foreground text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}

interface TechStackSectionProps {
  title: string
  categories: Array<{
    name: string
    technologies: string[]
  }>
}

export function TechStackSection({ title, categories }: TechStackSectionProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground flex items-center gap-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category) => (
          <TechCategory key={category.name} title={category.name} technologies={category.technologies} />
        ))}
      </CardContent>
    </Card>
  )
}
