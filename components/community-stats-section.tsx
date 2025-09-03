import { Calendar, MapPin, Home, Users } from "lucide-react"

export default function CommunityStatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-4">Komunitas Kami</h2>
          <p className="text-lg text-emerald-700/80 max-w-2xl mx-auto">
            Bersama membangun generasi muslim yang taat dan berakhlak mulia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MapPin className="h-10 w-10 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
            <p className="text-emerald-700/70">Masjid & Musholla</p>
          </div>

          <div className="text-center group">
            <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Home className="h-10 w-10 text-teal-600" />
            </div>
            <div className="text-3xl font-bold text-teal-600 mb-2">13</div>
            <p className="text-emerald-700/70">RW Aktif</p>
          </div>

          <div className="text-center group">
            <div className="bg-cyan-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Calendar className="h-10 w-10 text-cyan-600" />
            </div>
            <div className="text-3xl font-bold text-cyan-600 mb-2">50+</div>
            <p className="text-emerald-700/70">Acara Islami</p>
          </div>

          <div className="text-center group">
            <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="h-10 w-10 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-600 mb-2">300+</div>
            <p className="text-emerald-700/70">Keluarga Muslim</p>
          </div>
        </div>
      </div>
    </section>
  )
}
