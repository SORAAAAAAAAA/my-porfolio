import { ProjectsSection, CertificationsSection } from "@/components/sections"
import { projects, certifications } from "@/data"

export function ProjectsCertifications() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <ProjectsSection title=" Recent Projects" projects={projects} />
      <CertificationsSection title=" Recent Certifications" certifications={certifications} />
    </div>
  )
}
