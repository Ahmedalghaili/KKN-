import { Button } from "@/components/ui/button"
import { MapPin, MSquare as Mosque } from "lucide-react"
import Link from "next/link"

export default function CommunityInfoSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-100/30 via-teal-50/50 to-cyan-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-6">Data Masjid & Musholla</h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Data jamaah sholat dan pengajian di seluruh masjid dan musholla Purbayan
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-emerald-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <tr>
                  <th className="px-3 py-4 text-left text-sm font-semibold">No</th>
                  <th className="px-4 py-4 text-left text-sm font-semibold">Nama Masjid</th>
                  <th className="px-3 py-4 text-left text-sm font-semibold">Lokasi (RW)</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold" colSpan={3}>
                    Sholat Jamaah Isya/Maghrib (Orang)
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold" colSpan={3}>
                    Pengajian (Orang)
                  </th>
                  <th className="px-3 py-4 text-left text-sm font-semibold">Ket</th>
                </tr>
                <tr>
                  <th className="px-3 py-2 text-sm font-medium"></th>
                  <th className="px-4 py-2 text-sm font-medium"></th>
                  <th className="px-3 py-2 text-sm font-medium"></th>
                  <th className="px-2 py-2 text-center text-xs font-medium">Jumlah Jamaah</th>
                  <th className="px-2 py-2 text-center text-xs font-medium">Anggota Lansia</th>
                  <th className="px-2 py-2 text-center text-xs font-medium">%</th>
                  <th className="px-2 py-2 text-center text-xs font-medium">Jumlah Jamaah</th>
                  <th className="px-2 py-2 text-center text-xs font-medium">Anggota Lansia</th>
                  <th className="px-2 py-2 text-center text-xs font-medium">%</th>
                  <th className="px-3 py-2 text-sm font-medium"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-100 text-sm">
                <tr className="hover:bg-emerald-50/50 transition-colors">
                  <td className="px-3 py-3 text-center font-medium text-emerald-900">1.</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-100 rounded-full p-1">
                        <Mosque className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-emerald-900">Masjid Nurul Iman</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-emerald-700 text-center">RW 02</td>
                  <td className="px-2 py-3 text-center text-emerald-900">40</td>
                  <td className="px-2 py-3 text-center text-emerald-900">20</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">50%</td>
                  <td className="px-2 py-3 text-center text-emerald-900">35</td>
                  <td className="px-2 py-3 text-center text-emerald-900">25</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">71%</td>
                  <td className="px-3 py-3 text-emerald-700"></td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors">
                  <td className="px-3 py-3 text-center font-medium text-emerald-900">2.</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-100 rounded-full p-1">
                        <Mosque className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-emerald-900">Musholla Al-Hidayah</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-emerald-700 text-center">RW 01</td>
                  <td className="px-2 py-3 text-center text-emerald-900">35</td>
                  <td className="px-2 py-3 text-center text-emerald-900">15</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">42%</td>
                  <td className="px-2 py-3 text-center text-emerald-900">25</td>
                  <td className="px-2 py-3 text-center text-emerald-900">10</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">40%</td>
                  <td className="px-3 py-3 text-emerald-700"></td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors">
                  <td className="px-3 py-3 text-center font-medium text-emerald-900">3.</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-100 rounded-full p-1">
                        <Mosque className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-emerald-900">Masjid Muhtadin</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-emerald-700 text-center">RW 04</td>
                  <td className="px-2 py-3 text-center text-emerald-900">60</td>
                  <td className="px-2 py-3 text-center text-emerald-900">25</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">41%</td>
                  <td className="px-2 py-3 text-center text-emerald-900">60</td>
                  <td className="px-2 py-3 text-center text-emerald-900">25</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">41%</td>
                  <td className="px-3 py-3 text-emerald-700"></td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors">
                  <td className="px-3 py-3 text-center font-medium text-emerald-900">4.</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-100 rounded-full p-1">
                        <Mosque className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-emerald-900">Masjid Nurul Iman</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-emerald-700 text-center">RW 04</td>
                  <td className="px-2 py-3 text-center text-emerald-900">45</td>
                  <td className="px-2 py-3 text-center text-emerald-900">20</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">33%</td>
                  <td className="px-2 py-3 text-center text-emerald-900">45</td>
                  <td className="px-2 py-3 text-center text-emerald-900">20</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">33%</td>
                  <td className="px-3 py-3 text-emerald-700"></td>
                </tr>
                <tr className="hover:bg-emerald-50/50 transition-colors">
                  <td className="px-3 py-3 text-center font-medium text-emerald-900">5.</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="bg-emerald-100 rounded-full p-1">
                        <Mosque className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="font-medium text-emerald-900">Masjid Darussalam</span>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-emerald-700 text-center">RW 04</td>
                  <td className="px-2 py-3 text-center text-emerald-900">30</td>
                  <td className="px-2 py-3 text-center text-emerald-900">10</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">33%</td>
                  <td className="px-2 py-3 text-center text-emerald-900">40</td>
                  <td className="px-2 py-3 text-center text-emerald-900">25</td>
                  <td className="px-2 py-3 text-center text-teal-600 font-semibold">62.5%</td>
                  <td className="px-3 py-3 text-emerald-700"></td>
                </tr>
                {/* Summary row to indicate more data available */}
                <tr className="bg-emerald-50/30 border-t-2 border-emerald-200">
                  <td className="px-3 py-4 text-center font-medium text-emerald-700" colSpan={10}>
                    <div className="flex items-center justify-center gap-2">
                      <Mosque className="h-4 w-4" />
                      <span>... dan 20+ tempat ibadah lainnya</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-lg px-8 py-3 hover:scale-105 transition-transform shadow-lg">
              <Link href="/mosques">
                <MapPin className="mr-2 h-5 w-5" />
                Lihat Data Lengkap 25 Masjid
              </Link>
            </Button>
            <div className="text-sm text-emerald-600">
              Data sholat jamaah dan pengajian untuk semua tempat ibadah
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
