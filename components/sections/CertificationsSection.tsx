import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Certification } from "@/data/types"

interface CertificationItemProps {
  certification: Certification
}

export function CertificationItem({ certification }: CertificationItemProps) {
  return (
    <div className="space-y-1">
      <h4 className="text-sm font-medium">{certification.title}</h4>
      <p className="text-gray-400 text-xs">{certification.issuer}</p>
    </div>
  )
}

interface CertificationsProps {
  title: string
  certifications: Certification[]
}

export function CertificationsSection({ title, certifications }: CertificationsProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">{title}</CardTitle>
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {certifications.map((cert, index) => (
          <CertificationItem key={index} certification={cert} />
        ))}
      </CardContent>
    </Card>
  )
}
