import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExperienceItem } from "./ExperienceItem"
import { Experience } from "@/data/types"

interface ExperienceSectionProps {
  experiences: Experience[]
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">💼 Experience</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="absolute top-0 bottom-0 w-px bg-border"></div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
