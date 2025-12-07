import { TechStackSection } from "@/components/sections"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { techStack, beyondCodingContent } from "@/data"

export function TechStackBeyondCoding() {
  const techStackCategories = [
    { name: "Languages", technologies: techStack.languages },
    { name: "Frontend", technologies: techStack.frontend },
    { name: "Backend", technologies: techStack.backend },
    { name: "Database And Tools", technologies: techStack.databasesAndTools },
    { name: "AI & Automation", technologies: techStack.aiAndAutomation },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <TechStackSection title="🔧 Tech Stack" categories={techStackCategories} />

      {/* Beyond Coding Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">{beyondCodingContent.title}</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm space-y-4">
          {beyondCodingContent.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
