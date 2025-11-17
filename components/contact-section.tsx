import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, Instagram, Facebook, FileText } from "lucide-react"
import Image from "next/image"


export function ContactSection() {
  return (
    <section className="py-4 sm:py-8" data-aos="fade-up">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Get in Touch</h2>
        <p className="text-muted-foreground">Let's connect and explore what we can build together</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Quick Contact Card */}
        <Card className="group border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg md:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Mail className="w-5 h-5 text-blue-600" />
              Quick Contact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-200">
                <a href="https://calendly.com/rcbriones95/30min" target="_blank" rel="noopener noreferrer">
                  Schedule Call
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border/50 hover:bg-muted transition-all duration-200">
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=rcbriones95@gmail.com&su=Let%27s+Connect&body=Hi+Cielo,+I+would+like+to+discuss...&tf=cm" target="_blank" rel="noopener noreferrer">
                  Send Email
                </a>
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">Email: rcbriones95@gmail.com</p>
              <p>Response time: 24-48 hours</p>
            </div>
          </CardContent>
        </Card>

        {/* Social Links Section */}
        <Card className="border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">👤 Socials</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ray-briones-69872a228", color: "text-blue-600" },
              { icon: Github, label: "GitHub", href: "https://github.com/SORAAAAAAAAA", color: "text-gray-700 dark:text-gray-300" },
              { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/sora_.23/", color: "text-pink-600" },
              { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/ray.briones.739", color: "text-blue-700" },
            ].map(({ icon: Icon, label, href, color }) => (
              <Button
                key={label}
                asChild
                variant="outline"
                size="sm"
                className="w-full justify-start border-border/50 hover:bg-muted transition-all duration-200 group"
              >
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className={`w-4 h-4 mr-2 ${color}`} />
                  <span>{label}</span>
                  <span className="ml-auto text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Resume Card */}
        <Card className="group border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="w-5 h-5 text-green-600" />
              Resume
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="overflow-hidden rounded-lg bg-muted flex justify-center h-32 relative">
              <a href="/Ray Cielo Briones - Resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center">
                <Image
                  src="/resume.png"
                  alt="Ray Cielo Briones Resume"
                  width={140}
                  height={140}
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </a>
            </div>
            <Button asChild variant="outline" size="sm" className="w-full border-border/50 hover:bg-muted transition-all duration-200 text-xs">
              <a href="/Ray Cielo Briones - Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
