import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Plus, Star } from "lucide-react"
import { fetchIslamicEvents, fetchUpcomingIslamicEvents, fetchPastIslamicEvents, IslamicEvent } from "@/lib/islamic-events"

interface LocalEvent {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  type: "pengajian" | "peringatan" | "sosial" | "pendidikan"
  attendees?: number
  organizer: string
}

interface CombinedEvent extends Omit<LocalEvent, 'type'> {
  type: "pengajian" | "peringatan" | "sosial" | "pendidikan" | "religious"
  hijriDate?: string
  isIslamicHoliday?: boolean
}

// Extended events data for the full events page
const allLocalEvents: LocalEvent[] = [
  {
    id: "1",
    title: "Pengajian Akbar Ramadan 1446 H",
    date: "2025-03-15",
    time: "19:30",
    location: "Masjid Nurul Iman RW 02",
    description:
      'Pengajian akbar menyambut bulan suci Ramadan dengan tema "Meraih Berkah di Bulan Penuh Rahmat". Akan dihadiri oleh Ustadz Dr. Ahmad Syafi\'i dari Pondok Pesantren Krapyak.',
    type: "pengajian",
    attendees: 150,
    organizer: "Takmir Masjid Nurul Iman",
  },
  {
    id: "2",
    title: "Peringatan Maulid Nabi Muhammad SAW",
    date: "2025-04-12",
    time: "20:00",
    location: "Masjid Al-Falah RW 06",
    description:
      "Memperingati kelahiran Rasulullah SAW dengan pembacaan sholawat dan ceramah agama. Acara dimulai dengan sholawat bersama dilanjutkan ceramah tentang akhlak Rasulullah.",
    type: "peringatan",
    attendees: 200,
    organizer: "Remaja Masjid Al-Falah",
  },
  {
    id: "3",
    title: "Halal Bihalal Idul Fitri 1446 H",
    date: "2025-05-02",
    time: "08:00",
    location: "Balai RW 123 Purbayan",
    description:
      "Silaturahmi dan halal bihalal bersama seluruh warga Purbayan RW 123. Acara meliputi sholat Ied bersama, khutbah, dan makan bersama.",
    type: "sosial",
    attendees: 300,
    organizer: "Pengurus RW 123",
  },
  {
    id: "4",
    title: "Kajian Tafsir Al-Quran",
    date: "2025-03-08",
    time: "15:30",
    location: "Musholla Al-Hidayah RW 01",
    description:
      "Kajian rutin tafsir Al-Quran setiap hari Sabtu dengan Ustadz Ahmad Fauzi. Minggu ini membahas Surah Al-Baqarah ayat 183-185 tentang puasa.",
    type: "pendidikan",
    attendees: 50,
    organizer: "Musholla Al-Hidayah",
  },
  {
    id: "5",
    title: "Bakti Sosial Ramadan",
    date: "2025-03-20",
    time: "16:00",
    location: "Balai RW 123 Purbayan",
    description:
      "Kegiatan bakti sosial berupa pembagian sembako untuk warga kurang mampu di wilayah Purbayan RW 123. Mari berbagi kebahagiaan di bulan Ramadan.",
    type: "sosial",
    attendees: 100,
    organizer: "Karang Taruna RW 123",
  },
  {
    id: "6",
    title: "Pelatihan Qiroah untuk Remaja",
    date: "2025-03-10",
    time: "14:00",
    location: "Masjid Mustaqim RW 05",
    description:
      "Pelatihan seni baca Al-Quran (qiroah) untuk remaja usia 13-25 tahun. Dibimbing oleh Qori' nasional Ustadz Muhammad Ridwan.",
    type: "pendidikan",
    attendees: 30,
    organizer: "Remaja Masjid Mustaqim",
  },
  {
    id: "7",
    title: "Isra Mi'raj 1446 H",
    date: "2025-02-27",
    time: "19:00",
    location: "Masjid Baiturrochmah RW 11",
    description:
      "Peringatan Isra Mi'raj dengan ceramah tentang hikmah perjalanan Rasulullah SAW dan makna spiritual dalam kehidupan sehari-hari.",
    type: "peringatan",
    attendees: 120,
    organizer: "Takmir Masjid Baiturrochmah",
  },
  {
    id: "8",
    title: "Gotong Royong Bersih Masjid",
    date: "2025-03-01",
    time: "07:00",
    location: "Seluruh Masjid RW 123",
    description:
      "Kegiatan gotong royong membersihkan seluruh masjid dan musholla di wilayah RW 123 sebagai persiapan menyambut bulan Ramadan.",
    type: "sosial",
    attendees: 200,
    organizer: "Pengurus RW 123",
  },
]

const getEventTypeColor = (type: string) => {
  switch (type) {
    case "pengajian":
      return "bg-primary text-primary-foreground"
    case "peringatan":
      return "bg-secondary text-secondary-foreground"
    case "sosial":
      return "bg-accent text-accent-foreground"
    case "pendidikan":
      return "bg-muted text-muted-foreground"
    case "religious":
      return "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
    default:
      return "bg-muted text-muted-foreground"
  }
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const getEventTypeName = (type: string) => {
  switch (type) {
    case "pengajian":
      return "Pengajian"
    case "peringatan":
      return "Peringatan"
    case "sosial":
      return "Sosial"
    case "pendidikan":
      return "Pendidikan"
    case "religious":
      return "Hari Besar Islam"
    default:
      return "Acara"
  }
}

function convertIslamicToLocalEvent(islamicEvent: IslamicEvent): CombinedEvent {
  return {
    id: islamicEvent.id,
    title: islamicEvent.title,
    date: islamicEvent.date,
    time: "Sepanjang Hari",
    location: "Seluruh Indonesia",
    description: islamicEvent.description || `Peringatan hari besar Islam: ${islamicEvent.title}`,
    type: "religious",
    organizer: "Kalender Islam",
    hijriDate: islamicEvent.hijriDate,
    isIslamicHoliday: true
  }
}

export default async function EventsPage() {
  // Fetch Islamic events separately for upcoming and past
  const upcomingIslamicEvents = await fetchUpcomingIslamicEvents()
  const pastIslamicEvents = await fetchPastIslamicEvents()
  
  // Convert to local event format
  const upcomingIslamicLocalEvents = upcomingIslamicEvents.map(convertIslamicToLocalEvent)
  const pastIslamicLocalEvents = pastIslamicEvents.map(convertIslamicToLocalEvent)
  
  // Combine with local events
  const upcomingLocalEvents = allLocalEvents.filter((event) => new Date(event.date) >= new Date())
  const pastLocalEvents = allLocalEvents.filter((event) => new Date(event.date) < new Date())
  
  // Combine all events (upcoming and past) into one unified list
  const allEvents: CombinedEvent[] = [
    ...upcomingLocalEvents,
    ...upcomingIslamicLocalEvents,
    ...pastLocalEvents,
    ...pastIslamicLocalEvents
  ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  return (
    <div className="min-h-screen bg-background">
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
              <pattern id="events-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,0 L20,0 L20,20 L0,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4"/>
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#events-pattern)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              <span className="text-amber-300">Acara &</span>
              <br />
              <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Kegiatan Islami
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto text-pretty leading-relaxed mb-8">
              Ikuti berbagai kegiatan pengajian, peringatan hari besar Islam, dan aktivitas sosial di Purbayan RW 123
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{allEvents.length}</div>
              <div className="text-muted-foreground">Total Acara</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">
                {allEvents.filter((e) => e.type === "pengajian").length}
              </div>
              <div className="text-muted-foreground">Pengajian</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">
                {allEvents.filter((e) => e.type === "religious").length}
              </div>
              <div className="text-muted-foreground">Hari Besar Islam</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Semua Acara & Kegiatan</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allEvents.map((event) => {
              const isUpcoming = new Date(event.date) >= new Date()
              return (
                <Card key={event.id} className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${!isUpcoming ? 'opacity-75 hover:opacity-100' : ''}`}>
                  <div
                    className="h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg relative overflow-hidden"
                    style={{
                      backgroundImage: `url('/islamic-mosque-geometric-pattern.png')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute top-3 right-3 flex gap-2">
                      {!isUpcoming && (
                        <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          Selesai
                        </span>
                      )}
                      {event.isIslamicHoliday && (
                        <span className="flex items-center gap-1 bg-amber-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                          <Star className="h-3 w-3" />
                          Hari Besar
                        </span>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                        {getEventTypeName(event.type)}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-balance">{event.title}</CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(event.date)}
                      </div>
                      {event.time !== "Sepanjang Hari" && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time} WIB
                        </div>
                      )}
                    </div>
                    {event.hijriDate && (
                      <div className="text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded">
                        {event.hijriDate}
                      </div>
                    )}
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground line-clamp-3">{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white py-12 relative overflow-hidden">
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
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-300">Komunitas Purbayan RW 123</h3>
              <p className="text-emerald-100/80">
                Menjaga tradisi Islam Jawa dalam kehidupan modern di kawasan bersejarah Kotagede, Yogyakarta.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-300">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-emerald-100/80 hover:text-white">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="/mosques" className="text-emerald-100/80 hover:text-white">
                    Masjid
                  </a>
                </li>
                <li>
                  <a href="/events" className="text-emerald-100/80 hover:text-white">
                    Acara
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-emerald-100/80 hover:text-white">
                    Tentang
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-amber-300">Kontak</h3>
              <p className="text-emerald-100/80">
                Purbayan, Kotagede
                <br />
                Yogyakarta 55173
                <br />
                Indonesia
              </p>
            </div>
          </div>
          <div className="border-t border-emerald-700/50 mt-8 pt-8 text-center text-emerald-200/80">
            <p>&copy; 2024 Komunitas Purbayan RW 123. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
