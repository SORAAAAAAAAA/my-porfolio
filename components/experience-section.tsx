import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Principal AI Engineer",
      company: "Stanford Chartered",
      period: "2023",
      description: "Leading AI initiatives and machine learning projects",
    },
    {
      title: "AI Ops Engineer",
      company: "Centre of Excellence for GenAI, Cambridge",
      period: "2022",
      description: "Developing and deploying AI operations infrastructure",
    },
    {
      title: "Senior Full-Stack Developer",
      company: "Core Technology, Cambridge",
      period: "2021",
      description: "Building scalable web applications and APIs",
    },
    {
      title: "Software Engineering Lead",
      company: "Pocatronics",
      period: "2021",
      description: "Leading development teams and technical architecture",
    },
    {
      title: "Lead Application Developer",
      company: "Bluebird Asia",
      period: "2021",
      description: "Developing enterprise applications and solutions",
    },
    {
      title: "Software Engineer",
      company: "ICM",
      period: "2020",
      description: "Full-stack development and system integration",
    },
    {
      title: "BS Information Technology",
      company: "University of San Carlos",
      period: "2017",
      description: "Bachelor's degree in Information Technology",
    },
    {
      title: "Hello World! 👋",
      company: "Wrote my first line of code",
      period: "2011",
      description: "Started programming journey",
    },
  ]

  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">💼 Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-1">{exp.description}</p>
                  </div>
                  <Badge variant="secondary" className="ml-4">
                    {exp.period}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
