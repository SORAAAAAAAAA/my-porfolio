import { AboutSection, ExperienceSection } from "@/components/sections"
import { experiences, aboutContent } from "@/data"

export function AboutExperienceGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <AboutSection title={aboutContent.title} paragraphs={aboutContent.paragraphs} />
      <ExperienceSection experiences={experiences} />
    </div>
  )
}
