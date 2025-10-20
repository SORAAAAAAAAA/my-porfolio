import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ProjectsCertifications() {
  const projects = [
    {
      title: "Grabeat",
      description: "Mobile app for food delivery",
      url: "grabeat.com",
    },
    {
      title: "NFT Minting WebApp",
      description: "Minting dApp for NFTs (Aptos)",
      url: "nft-minting-app-orpin.vercel.app"

    },
    {
      title: "Gen AI Voice Assistant",
      description: "A generative AI voice assistant web application",
      url: "gen-ai-voice-assistant.vercel.app"
    }
    
  ]

  const certifications = [
    {
      title: "Introduction to Critical Infrastructure Protection",
      issuer: "Opswat Academy",
    },
    {
      title: "AI for Beginners",
      issuer: "HP Inc.",
    },
    {
      title: "AWSome DAY 2025",
      issuer: "AWS",
    },
    {
      title: "IBM Z Day 2025 SE - AI & Data",
      issuer: "IBM",
    },
    {
      title: "IBM Z Day 2025 SE - Security",
      issuer: "IBM",
    },
    {
      title: "Implement Load Balancing on Compute Engine Skill Badge",
      issuer: "Google Cloud",
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Recent Projects Section */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">🚀 Recent Projects</CardTitle>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="space-y-1">
              <h4 className="text-sm font-medium">{project.title}</h4>
              <p className="text-gray-400 text-xs">{project.description}</p>
              <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="text-grey-400 text-xs hover:underline">
                {project.url}
              </a>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent Certifications Section */}
      <Card >
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">🏆 Recent Certifications</CardTitle>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {certifications.map((cert, index) => (
            <div key={index} className="space-y-1">
              <h4 className= "text-sm font-medium">{cert.title}</h4>
              <p className="text-gray-400 text-xs">{cert.issuer}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
