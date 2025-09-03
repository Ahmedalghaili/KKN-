import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function QuickLinksSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-6">Layanan Komunitas</h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Akses mudah ke informasi penting untuk warga Purbayan RW 123
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-emerald-50/50">
            <CardHeader className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl text-emerald-900">Masjid & Musholla</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-emerald-700/80 mb-6 text-lg leading-relaxed">
                Temukan 25+ masjid dan musholla di seluruh RW 123 dengan lokasi dan informasi lengkap
              </p>
              <Button asChild className="w-full text-lg py-3 hover:scale-105 transition-transform bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                <Link href="/mosques">Lihat Semua Masjid</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-teal-50/50">
            <CardHeader className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-teal-600" />
              </div>
              <CardTitle className="text-2xl text-emerald-900">Acara Islami</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-emerald-700/80 mb-6 text-lg leading-relaxed">
                Ikuti pengajian, peringatan hari besar Islam, dan kegiatan komunitas lainnya
              </p>
              <Button asChild className="w-full text-lg py-3 hover:scale-105 transition-transform bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                <Link href="/events">Lihat Acara</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-cyan-50/50">
            <CardHeader className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-cyan-600" />
              </div>
              <CardTitle className="text-2xl text-emerald-900">Tentang Purbayan</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-emerald-700/80 mb-6 text-lg leading-relaxed">
                Pelajari sejarah dan warisan budaya Islam-Jawa di kawasan bersejarah Kotagede
              </p>
              <Button asChild className="w-full text-lg py-3 hover:scale-105 transition-transform bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700">
                <Link href="/about">Pelajari Lebih Lanjut</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
