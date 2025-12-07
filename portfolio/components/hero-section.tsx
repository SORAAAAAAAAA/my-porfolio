import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
   
  return (
    <section className="py-6 sm:py-12" data-aos="fade-up">
      <div className="flex flex-col sm:flex-row sm:gap-10 items-center gap-8"> 
        {/* Profile Image */}
        <div className="flex-shrink-0 relative group h-40 w-40 sm:h-48 sm:w-48">
          <div className="absolute -inset-3 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition duration-500"></div>
          <Image
            src="/me.png"
            alt="Ray Cielo Briones"
            width={192}
            height={192}
            priority
            className="relative rounded-2xl object-cover w-full h-full ring-2 ring-blue-500/30 shadow-2xl"
          />  
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-4 flex-1">
          <div className="w-full">
            <div className="flex flex-col items-center sm:items-start gap-2">  
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tighter">Ray Cielo Briones</h1>
              <p className="text-base sm:text-lg text-muted-foreground font-medium">Full-Stack Developer & AI Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
            <span>Cavite, Philippines</span>
          </div>

          {/* Action Buttons and Badge Container */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 w-full sm:w-auto pt-1 sm:justify-between">
            <div className="flex sm:flex-row flex-col items-center sm:items-center gap-2 w-full sm:w-auto">
              <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 h-10 px-4">
                <a href="https://calendly.com/rcbriones95/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-semibold text-sm">Schedule Call</span>
                </a>
              </Button>
              <Button asChild
                size="sm"
                variant="outline"
                className="border-border/60 hover:bg-muted/80 hover:border-border text-foreground shadow-md transition-all duration-200 h-10 px-4"
              >
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=rcbriones95@gmail.com&su=Let%27s+Connect&body=Hi+Cielo,+I+would+like+to+discuss...&tf=cm" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="font-semibold text-sm">Send Email</span>
                </a>
              </Button>
            </div>

            <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap">
              <Sparkles size={14} className="mr-1" />
              Open to Opportunities
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
