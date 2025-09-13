import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CertificationsSection() {
  const certifications = [
    {
      title: "React Developer Expert",
      issuer: "Meta",
      year: "2023",
    },
    {
      title: "Generative AI Leader",
      issuer: "Google",
      year: "2023",
    },
    {
      title: "Software Engineering",
      issuer: "TechCorp",
      year: "2022",
    },
    {
      title: "Generative AI Professional",
      issuer: "OpenAI",
      year: "2022",
    },
  ]

  return (
    <section id="certifications" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-xl">🏆 Recent Certifications</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-3 border-b border-border last:border-b-0"
                >
                  <div>
                    <h3 className="font-medium text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{cert.year}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
