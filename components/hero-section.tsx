import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden min-h-[85vh] flex items-center">
      {/* Islamic Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,0 L20,0 L20,20 L0,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4"/>
              <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)"/>
        </svg>
      </div>

      {/* Mosque Silhouette */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full text-emerald-200">
          <path d="M200,50 L180,30 L180,20 L220,20 L220,30 Z" fill="currentColor"/>
          <circle cx="200" cy="80" r="40" fill="currentColor"/>
          <rect x="160" y="120" width="80" height="100" fill="currentColor"/>
          <path d="M160,120 L200,100 L240,120 Z" fill="currentColor"/>
          <rect x="190" y="140" width="20" height="60" fill="currentColor"/>
          <circle cx="200" cy="200" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-emerald-200">
          <path d="M50,10 L60,40 L90,40 L68,58 L78,88 L50,70 L22,88 L32,58 L10,40 L40,40 Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="absolute top-40 right-32 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-teal-300">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="3"/>
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="10" fill="currentColor"/>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          {/* Arabic Calligraphy */}
          <div className="mb-6">
            <p className="text-2xl md:text-4xl font-arabic text-cyan-200 mb-3 opacity-80">
              ﷽
            </p>
            <div className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <h1 className="text-3xl md:text-6xl font-bold mb-4 text-balance leading-tight bg-gradient-to-r from-white via-cyan-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-2xl">
            بسم الله
            <br />
            <span className="text-2xl md:text-4xl text-cyan-300">Komunitas Purbayan</span>
          </h1>

          <p className="text-sm md:text-lg mb-8 text-cyan-100 max-w-3xl mx-auto text-pretty leading-relaxed font-light">
            "Dan tolong-menolonglah kamu dalam (mengerjakan) kebajikan dan takwa", adalah karena dengan taqwa sesorang hamba akan meraih kerdhoan dari-Nya, dan dengan kebaikan dia akan meraah"
            <br />
            <span className="text-cyan-300 font-medium text-xs md:text-base">- QS. Al-Maidah: 2</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0 text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 transition-all duration-300 font-semibold"
              asChild
            >
              <Link href="#prayer-times">
                <Clock className="mr-2 h-5 w-5" />
                Lihat Jadwal Sholat
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-cyan-900 text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 font-semibold backdrop-blur-sm"
              asChild
            >
              <Link href="/mosques">
                <MapPin className="mr-2 h-5 w-5" />
                Temukan Masjid
              </Link>
            </Button>
          </div>

          {/* Islamic Decorative Border */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="text-lg text-cyan-400">✦</div>
              <div className="text-sm text-cyan-300 font-medium">Purbayan RW 123 • Kotagede • Yogyakarta</div>
              <div className="text-lg text-cyan-400">✦</div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 text-background">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  )
}
