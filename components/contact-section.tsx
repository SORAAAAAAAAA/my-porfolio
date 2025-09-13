import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"


export function ContactSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Email Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">📧 Email</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Input placeholder="rcbriones95@gmail.com" className="text-sm" disabled />
          <Input placeholder="Let's talk" className="text-sm" />
          <Button size="sm" className="w-full hover:bg-zinc-600 text-white text-xs mt-3">
            Schedule a Call
          </Button>
        </CardContent>
      </Card>

      {/* Social Links Section */}
      <Card >
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">👤 Contacts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button 
            asChild
            variant="outline"
            size="sm"
            className="w-full justify-start text-xs hover:bg-gray-400 hover:text-green-500"
          >
            <a href="https://www.linkedin.com/in/ray-briones-69872a228" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full justify-start text-xs hover:bg-gray-400 hover:text-green-500"
          >
            <a href="https://github.com/SORAAAAAAAAA" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full justify-start text-xs hover:bg-gray-400 hover:text-green-500"
          >
            <a href="https://www.instagram.com/sora_.23/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full justify-start text-xs hover:bg-gray-400 hover:text-green-500"
          >
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=rcbriones95@gmail.com&su=Let%27s+Connect&body=Hi+Cielo,+I+would+like+to+discuss...&tf=cm" target="_blank" rel="noopener noreferrer">
              Email
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="sm"
            className="w-full justify-start text-xs hover:bg-gray-400 hover:text-green-500"
          >
            <a href="https://www.facebook.com/ray.briones.739">
              Facebook
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Speaking Section */}
      <Card className="group">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-sm">📄 My CV</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="overflow-hidden rounded-lg flex justify-center">
            <a href="/Ray Cielo Briones - Resume.pdf" target="_blank" rel="noopener noreferrer" >
            <Image
              src="/resume.png"
              alt="Ray Cielo Briones"
              width={160}
              height={160}
              className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-110 "
            />
            </a>
          </div>
          <Button variant="outline" size="sm" className="w-full text-xs">
            Check out My Resume →
          </Button>
        </CardContent>
      </Card>

      {/* A member of Section */}
      <Card >
        <CardHeader>
          <CardTitle className=" flex items-center gap-2 text-sm">👥 A member of</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Badge
            variant="outline"
            className="w-full justify-start text-xs p-2"
          >
            Coming Soon...
          </Badge>
          
        </CardContent>
      </Card>
    </div>
  )
}
