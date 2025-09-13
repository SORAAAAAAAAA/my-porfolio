import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutExperienceGrid() {
  const experiences = [
    {
      title: "Bachelor of Science in Computer Science",
      company: "Cavite State University - Main Campus",
      period: "2023 - 2027 (Expected)",
      current: true,
    },
    {
      title: "CS50x Introduction to Computer Science",
      company: "Harvard University",
      period: "2021",
      current: false,
    },
    {
      title: "Hello World! 👋",
      company: "Wrote my first line of code",
      period: "2020",
      current: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* About Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">📋 About</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm space-y-4">
          <p>
            Hi! I'm Ray Cielo Briones, a passionate full-stack developer with a knack for building scalable web applications. My journey in tech started with a programming video I saw on tiktok way back in 2020, which led me to explore
            various programming languages and frameworks. I am still learning to this day and excited for what the future holds.
          </p>
          <p>
            I am currently pursuing my Bachelor's degree in Computer Science at Cavite State University - Main Campus, where I am honing my skills and expanding my knowledge in the field. I am on my third year and looking forward to graduating in 2027.
          </p>
          <p>
            I work on projects including building modern websites, web applications, and Mobile apps. I use Next.js, React, and Neon DB to build
              scalable and efficient applications.  
          </p>
          
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center gap-2">💼 Experience</CardTitle>
        </CardHeader> 
        <CardContent className="relative">
          <div className="absolute top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center gap-4">
                <div
                  className={`relative z-10 w-3 h-3 rounded-full border-2 ${
                    exp.current ? "bg-primary border-primary" : "bg-background border-border"
                  } -ml-[6px]`}
                ></div>

                <div className="flex items-center justify-between flex-1">
                  <div className="flex-1">
                    <h4 className="text-foreground text-sm font-medium">{exp.title}</h4>
                    <p className="text-muted-foreground text-xs">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="text-xs bg-muted border-border text-muted-foreground">
                    {exp.period}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
