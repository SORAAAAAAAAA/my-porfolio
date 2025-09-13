import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, MessageCircle } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import Image from "next/image"

export function HeroSection() {
   
  return (
    <section className="mb-8">
      <div className="flex flex-col sm:flex-row sm:gap-6 items-center gap-6"> 
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/me.jpg"
            alt="Ray Cielo Briones"
            width={140}
            height={140}
            className="rounded-lg object-cover w-32 h-32 sm:w-[140px] sm:h-[140px]"
          />  
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <div className="flex items-center gap-2 mb-1">  
            <h1 className="text-2xl font-bold">Ray Cielo Briones</h1>
            
          </div>

          <div className="flex items-center gap-1 text-gray-400 text-sm mb-2">
            <span>📍 Cavite, Philippines</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex items-center gap-4">
              <p>Full-Stack Developer | Tech Enthusiast</p>
            </div>
            <div className="flex sm:flex-row sm:justify-between flex-col items-center sm:gap-4 gap-2 w-full">
              <Button asChild size="sm" className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600">
              <a href="https://calendly.com/rcbriones95/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule a Call
              </a>
            </Button>
            <Button asChild
              size="sm"
              variant="outline"
              className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
            >
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=rcbriones95@gmail.com&su=Let%27s+Connect&body=Hi+Cielo,+I+would+like+to+discuss...&tf=cm">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </a>
            </Button>
            <Badge className="bg-orange-500 text-white px-3 py-1 sm:mr-35">🎯 Open to new opportunities</Badge>
            <ModeToggle />
            </div>
            
            <div className="flex items-center justify-evenly mb-2">
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
