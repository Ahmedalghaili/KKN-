import { MSquare as Mosque } from "lucide-react"
import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-16 relative overflow-hidden">
      {/* Islamic geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="7.5" cy="7.5" r="1" fill="currentColor" opacity="0.4"/>
              <path d="M3,3 L12,12 M12,3 L3,12" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="relative">
                <Mosque className="h-8 w-8 text-amber-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl text-white">Komunitas Purbayan</span>
                <span className="text-sm text-emerald-200 font-medium">RW 123</span>
              </div>
            </h3>
            <p className="text-emerald-100/90 text-lg leading-relaxed">
              Menjaga tradisi Islam Jawa dalam kehidupan modern di kawasan bersejarah Kotagede, Yogyakarta.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-300">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-emerald-100/80 hover:text-white text-lg transition-colors hover:translate-x-1 inline-block relative group">
                  Beranda
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/mosques" className="text-emerald-100/80 hover:text-white text-lg transition-colors hover:translate-x-1 inline-block relative group">
                  Masjid
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-emerald-100/80 hover:text-white text-lg transition-colors hover:translate-x-1 inline-block relative group">
                  Acara
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-emerald-100/80 hover:text-white text-lg transition-colors hover:translate-x-1 inline-block relative group">
                  Tentang
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-amber-300">Kontak</h3>
            <p className="text-emerald-100/90 text-lg leading-relaxed">
              Purbayan, Kotagede
              <br />
              Yogyakarta 55173
              <br />
              Indonesia
            </p>
            
            {/* Islamic decorative element */}
            <div className="mt-8 flex justify-start">
              <div className="flex items-center space-x-3 text-amber-300">
                <div className="w-8 h-px bg-amber-400"></div>
                <span className="text-lg">✦</span>
                <div className="w-8 h-px bg-amber-400"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-emerald-700/50 mt-12 pt-8 text-center text-emerald-200/80">
          <p className="text-lg">&copy; 2024 Komunitas Purbayan RW 123. Semua hak dilindungi.</p>
        </div>
      </div>

      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 text-background rotate-180">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"/>
        </svg>
      </div>
    </footer>
  )
}
