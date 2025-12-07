import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Experience } from "@/data/types"

interface ExperienceItemProps {
  experience: Experience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="relative flex items-center gap-4">
      <div
        className={`relative z-10 w-3 h-3 rounded-full border-2 ${
          experience.current ? "bg-primary border-primary" : "bg-background border-border"
        } -ml-[6px]`}
      ></div>

      <div className="flex items-center justify-between flex-1">
        <div className="flex-1">
          <h4 className="text-foreground text-sm font-medium">{experience.title}</h4>
          <p className="text-muted-foreground text-xs">{experience.company}</p>
        </div>
        <Badge variant="outline" className="text-xs bg-muted border-border text-muted-foreground">
          {experience.period}
        </Badge>
      </div>
    </div>
  )
}
