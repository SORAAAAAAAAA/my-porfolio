import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface AboutSectionProps {
  title: string
  paragraphs: string[]
}

export function AboutSection({ title, paragraphs }: AboutSectionProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground text-sm space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </CardContent>
    </Card>
  )
}
