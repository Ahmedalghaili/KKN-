import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"

interface Mosque {
  id: number
  name: string
  rw: string
  type: "Masjid" | "Musholla" | "Langgar" | "Gedung Dakwah"
}

const mosques: Mosque[] = [
  { id: 1, name: "Masjid Nurul Iman", rw: "RW 02", type: "Masjid" },
  { id: 2, name: "Musholla Al-Hidayah", rw: "RW 01", type: "Musholla" },
  { id: 3, name: "Masjid Muhtadin", rw: "RW 04", type: "Masjid" },
  { id: 4, name: "Masjid Nurul Iman", rw: "RW 04", type: "Masjid" },
  { id: 5, name: "Masjid Darussalam", rw: "RW 04", type: "Masjid" },
  { id: 6, name: "Mushola PKU Nurul Fardi", rw: "RW 04", type: "Musholla" },
  { id: 7, name: "Masjid Mustaqim", rw: "RW 05", type: "Masjid" },
  { id: 8, name: "Mushola Aisyiyah", rw: "RW 05", type: "Musholla" },
  { id: 9, name: "Masjid Al-Falah", rw: "RW 06", type: "Masjid" },
  { id: 10, name: "Masjid Baitul Qodar", rw: "RW 06", type: "Masjid" },
  { id: 11, name: "Masjid Baiturrochmah", rw: "RW 11", type: "Masjid" },
  { id: 12, name: "Masjid Al Hijrah", rw: "RW 07", type: "Masjid" },
  { id: 13, name: "Mushola Nurussalam", rw: "RW 11", type: "Musholla" },
  { id: 14, name: "Mushola Al Husna", rw: "RW 08", type: "Musholla" },
  { id: 15, name: "Masjid As-Sholikin", rw: "RW 10", type: "Masjid" },
  { id: 16, name: "Masjid Ad Dzikro", rw: "RW 09", type: "Masjid" },
  { id: 17, name: "Langgar PPD", rw: "RW 10", type: "Langgar" },
  { id: 18, name: "Masjid Nurul Huda", rw: "RW 13", type: "Masjid" },
  { id: 19, name: "Musholla Al Fath / Attaibin", rw: "RW 12", type: "Musholla" },
  { id: 20, name: "Musholla Baitul Ghoffar", rw: "RW 10", type: "Musholla" },
  { id: 21, name: "Musholla Al Furqon", rw: "RW 09", type: "Musholla" },
  { id: 22, name: "Langgar Sepuh Boharen", rw: "RW 08", type: "Langgar" },
  { id: 23, name: "Musholla Mudzakir", rw: "RW 09", type: "Musholla" },
  { id: 24, name: "Musholla Nurul Sholeh", rw: "RW 12", type: "Musholla" },
  { id: 25, name: "Gedung Dakwah", rw: "RW 09", type: "Gedung Dakwah" },
]

const getTypeColor = (type: string) => {
  switch (type) {
    case "Masjid":
      return "bg-emerald-700 text-white border border-emerald-600"
    case "Musholla":
      return "bg-emerald-600 text-white border border-emerald-500"
    case "Langgar":
      return "bg-teal-600 text-white border border-teal-500"
    default:
      return "bg-cyan-600 text-white border border-cyan-500"
  }
}

const generateMapsUrl = (mosqueName: string, rw: string) => {
  const query = encodeURIComponent(`${mosqueName} ${rw} Purbayan Kotagede Yogyakarta`)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

export default function MosquesPage() {
  // Group mosques by RW for better organization
  const mosquesByRW = mosques.reduce(
    (acc, mosque) => {
      if (!acc[mosque.rw]) {
        acc[mosque.rw] = []
      }
      acc[mosque.rw].push(mosque)
      return acc
    },
    {} as Record<string, Mosque[]>,
  )

  const sortedRWs = Object.keys(mosquesByRW).sort((a, b) => {
    const numA = Number.parseInt(a.replace("RW ", ""))
    const numB = Number.parseInt(b.replace("RW ", ""))
    return numA - numB
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <Navigation />

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('/islamic-mosque-geometric-pattern.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-800/90 to-cyan-900/90"></div>
        
        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mosques-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,0 L20,0 L20,20 L0,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4"/>
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mosques-pattern)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              <span className="text-amber-300">Masjid &</span>
              <br />
              <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Musholla
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto text-pretty leading-relaxed mb-8">
              Temukan 25+ tempat ibadah di seluruh wilayah Purbayan RW 123, Kotagede, Yogyakarta
            </p>
          </div>
        </div>
      </section>

      {/* Complete Data Table Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-6">Data Lengkap Jamaah & Pengajian</h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
              Statistik lengkap sholat jamaah dan pengajian di seluruh tempat ibadah Purbayan RW 123
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-emerald-100">
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
                          <MapPin className="h-4 w-4 text-emerald-600" />
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
                          <MapPin className="h-4 w-4 text-emerald-600" />
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
                          <MapPin className="h-4 w-4 text-emerald-600" />
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
                          <MapPin className="h-4 w-4 text-emerald-600" />
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
                          <MapPin className="h-4 w-4 text-emerald-600" />
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
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">6.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Mushola PKU Nurul Fardi</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 04</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-emerald-900">10</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">33%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">40</td>
                    <td className="px-2 py-3 text-center text-emerald-900">15</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">37.5%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">7.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Masjid Mustaqim</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 05</td>
                    <td className="px-2 py-3 text-center text-emerald-900">50</td>
                    <td className="px-2 py-3 text-center text-emerald-900">40</td>
                    <td className="px-2 py-3 text-center text-amber-600 font-semibold">80%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">40</td>
                    <td className="px-2 py-3 text-center text-emerald-900">35</td>
                    <td className="px-2 py-3 text-center text-amber-600 font-semibold">87.5%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">8.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Mushola Aisyiyah</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 05</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-emerald-900">10</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">33%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">55</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">54.5%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">9.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Masjid Al-Falah</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 06</td>
                    <td className="px-2 py-3 text-center text-emerald-900">65</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">46%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">40</td>
                    <td className="px-2 py-3 text-center text-emerald-900">20</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">50%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">10.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Masjid Baitul Qodar</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 06</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-emerald-900">18</td>
                    <td className="px-2 py-3 text-center text-amber-600 font-semibold">72%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">35</td>
                    <td className="px-2 py-3 text-center text-emerald-900">15</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">42%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">11.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Masjid Baiturrochmah</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 11</td>
                    <td className="px-2 py-3 text-center text-emerald-900">50</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">50%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">55</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">54.5%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">12.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Masjid Al Hijrah</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 07</td>
                    <td className="px-2 py-3 text-center text-emerald-900">40</td>
                    <td className="px-2 py-3 text-center text-emerald-900">10</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">25%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">60</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">41.6%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">13.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Mushola Nurussalam</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 11</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-emerald-900">12</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">48%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-emerald-900">20</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">66%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">14.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Mushola Al Husna</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 08</td>
                    <td className="px-2 py-3 text-center text-emerald-900">20</td>
                    <td className="px-2 py-3 text-center text-emerald-900">8</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">40%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">35</td>
                    <td className="px-2 py-3 text-center text-emerald-900">15</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">42%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">15.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Masjid As-Sholikin</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 10</td>
                    <td className="px-2 py-3 text-center text-emerald-900">40</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">62.5%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">45</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">55.5%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">16.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Masjid Ad Dzikro</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 09</td>
                    <td className="px-2 py-3 text-center text-emerald-900">50</td>
                    <td className="px-2 py-3 text-center text-emerald-900">20</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">40%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">70</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">42%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">17.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Langgar PPD</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 10</td>
                    <td className="px-2 py-3 text-center text-gray-400">-</td>
                    <td className="px-2 py-3 text-center text-gray-400">-</td>
                    <td className="px-2 py-3 text-center text-gray-400">-</td>
                    <td className="px-2 py-3 text-center text-gray-400">-</td>
                    <td className="px-2 py-3 text-center text-gray-400">-</td>
                    <td className="px-2 py-3 text-center text-gray-400">-</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">18.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Masjid Nurul Huda</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 13</td>
                    <td className="px-2 py-3 text-center text-emerald-900">95</td>
                    <td className="px-2 py-3 text-center text-emerald-900">45</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">47%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">120</td>
                    <td className="px-2 py-3 text-center text-emerald-900">80</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">66.6%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">19.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Musholla Al Fath / Attaibin</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 12</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-emerald-900">10</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">40%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-emerald-900">15</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">50%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">20.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Musholla Baitul Ghoffar</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 10</td>
                    <td className="px-2 py-3 text-center text-emerald-900">20</td>
                    <td className="px-2 py-3 text-center text-emerald-900">6</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">30%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-emerald-900">10</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">40%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">21.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Musholla Al Furqon</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 09</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-emerald-900">10</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">33%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-emerald-900">16</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">53%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">22.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Langgar Sepuh Boharen</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 08</td>
                    <td className="px-2 py-3 text-center text-emerald-900">30</td>
                    <td className="px-2 py-3 text-center text-emerald-900">15</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">50%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">40</td>
                    <td className="px-2 py-3 text-center text-emerald-900">10</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">25%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">23.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Musholla Mudzakir</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 09</td>
                    <td className="px-2 py-3 text-center text-emerald-900">20</td>
                    <td className="px-2 py-3 text-center text-emerald-900">10</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">50%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">35</td>
                    <td className="px-2 py-3 text-center text-emerald-900">15</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">42%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">24.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Musholla Nurul Sholeh</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 12</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-emerald-900">6</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">24%</td>
                    <td className="px-2 py-3 text-center text-emerald-900">25</td>
                    <td className="px-2 py-3 text-center text-emerald-900">15</td>
                    <td className="px-2 py-3 text-center text-teal-600 font-semibold">60%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                  <tr className="hover:bg-emerald-50/50 transition-colors">
                    <td className="px-3 py-3 text-center font-medium text-emerald-900">25.</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="bg-emerald-100 rounded-full p-1">
                          <MapPin className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="font-medium text-emerald-900">Gedung Dakwah</span>
                      </div>
                    </td>
                    <td className="px-3 py-3 text-emerald-700 text-center">RW 09</td>
                    <td className="px-2 py-3 text-center text-gray-400">-</td>
                    <td className="px-2 py-3 text-center text-gray-400">-</td>
                    <td className="px-2 py-3 text-center text-gray-400">-</td>
                    <td className="px-2 py-3 text-center text-emerald-900">50</td>
                    <td className="px-2 py-3 text-center text-emerald-900">40</td>
                    <td className="px-2 py-3 text-center text-amber-600 font-semibold">80%</td>
                    <td className="px-3 py-3 text-emerald-700"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Mosques Grid Section */}
      <div className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {sortedRWs.map((rw) => (
              <div key={rw} className="bg-white rounded-3xl shadow-xl p-8">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                  <div className="bg-emerald-100 p-3 rounded-2xl">
                    <MapPin className="h-8 w-8 text-emerald-700" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{rw}</h2>
                    <p className="text-gray-600 text-lg">{mosquesByRW[rw].length} tempat ibadah</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {mosquesByRW[rw].map((mosque) => (
                    <Card key={mosque.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 overflow-hidden rounded-2xl">
                      <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 relative overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-30">
                          <div className="absolute top-4 left-4 w-8 h-8 border-2 border-emerald-300 rounded-full"></div>
                          <div className="absolute top-8 right-6 w-6 h-6 border border-emerald-400 rotate-45"></div>
                          <div className="absolute bottom-6 left-8 w-10 h-10 border border-emerald-300 rounded-full"></div>
                        </div>
                        
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-2 rounded-xl text-xs font-bold ${getTypeColor(mosque.type)} shadow-lg backdrop-blur-sm`}>
                            {mosque.type}
                          </span>
                        </div>

                        {/* Mosque Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/80 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <MapPin className="h-12 w-12 text-emerald-600" />
                          </div>
                        </div>
                      </div>

                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight">
                          {mosque.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="bg-emerald-100 p-1 rounded-full">
                            <MapPin className="h-3 w-3 text-emerald-600" />
                          </div>
                          {mosque.rw}, Purbayan
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0">
                        <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl" size="sm">
                          <a
                            href={generateMapsUrl(mosque.name, mosque.rw)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Buka di Google Maps
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <h2 className="text-4xl font-bold mb-6">Ingin Menambahkan Informasi Masjid?</h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Hubungi pengurus RW untuk menambahkan atau memperbarui informasi tempat ibadah di wilayah Anda
            </p>
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-gray-100 text-xl px-10 py-4 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl">
              Hubungi Pengurus
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Footer */}
      <footer className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-16 mt-16 relative overflow-hidden">
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
              <h3 className="text-2xl font-bold mb-6 text-amber-300">Komunitas Purbayan</h3>
              <p className="text-emerald-100/90 text-lg leading-relaxed">
                Menjaga tradisi Islam Jawa dalam kehidupan modern di kawasan bersejarah Kotagede, Yogyakarta.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-300">Tautan Cepat</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/" className="text-emerald-100/80 hover:text-white transition-colors text-lg hover:translate-x-2 inline-block relative group">
                    → Beranda
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="/mosques" className="text-emerald-100/80 hover:text-white transition-colors text-lg hover:translate-x-2 inline-block relative group">
                    → Masjid
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="/events" className="text-emerald-100/80 hover:text-white transition-colors text-lg hover:translate-x-2 inline-block relative group">
                    → Acara
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-emerald-100/80 hover:text-white transition-colors text-lg hover:translate-x-2 inline-block relative group">
                    → Tentang
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-amber-300">Kontak</h3>
              <div className="bg-emerald-800/30 p-6 rounded-2xl">
                <p className="text-emerald-100/90 text-lg leading-relaxed">
                  Purbayan, Kotagede<br />
                  Yogyakarta 55173<br />
                  Indonesia
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-emerald-700/50 mt-12 pt-8 text-center">
            <p className="text-emerald-200/80 text-lg">&copy; 2024 Komunitas Purbayan RW 123. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}