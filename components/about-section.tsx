import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">📋 About</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Ray Cielo Briones, a passionate full-stack developer with a knack for building scalable web applications
              and microservices. My journey in tech started with a fascination for how things work, which led me to explore
              various programming languages and frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work on projects including building modern websites, web applications, and Mobile apps. I use Next.js, React, and Neon DB to build
              scalable and efficient applications. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lately, I've been diving deeper into the world of artificial intelligence, focusing on integrating AI
              tools and techniques into microservices. My work now includes leveraging generative AI to optimize
              development workflows and deliver cutting-edge technology.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
