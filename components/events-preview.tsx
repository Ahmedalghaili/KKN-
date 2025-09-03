import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Star } from "lucide-react"
import Link from "next/link"
import { fetchUpcomingIslamicEvents, IslamicEvent } from "@/lib/islamic-events"

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

// Use the same events data as the events page
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

export default async function EventsPreview({ limit = 3 }: { limit?: number }) {
  // Fetch Islamic events
  const upcomingIslamicEvents = await fetchUpcomingIslamicEvents()
  
  // Convert to local event format
  const upcomingIslamicLocalEvents = upcomingIslamicEvents.map(convertIslamicToLocalEvent)
  
  // Combine with local events (only upcoming ones)
  const upcomingLocalEvents = allLocalEvents.filter((event) => new Date(event.date) >= new Date())
  
  // Combine all upcoming events
  const allUpcomingEvents: CombinedEvent[] = [
    ...upcomingLocalEvents,
    ...upcomingIslamicLocalEvents
  ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  // Get the next events based on limit
  const nextEvents = allUpcomingEvents.slice(0, limit)

  return (
    <div className="space-y-6">
      {nextEvents.map((event) => (
        <Card key={event.id} className="hover:shadow-lg transition-shadow">
          <div
            className="h-24 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-t-lg relative overflow-hidden"
            style={{
              backgroundImage: `url('/islamic-mosque-geometric-pattern.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-3 right-3 flex gap-2">
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
              <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}

      {allUpcomingEvents.length > limit && (
        <div className="text-center">
          <Button asChild variant="outline">
            <Link href="/events">
              <Calendar className="mr-2 h-4 w-4" />
              Lihat Semua Acara
            </Link>
          </Button>
        </div>
      )}
      
      {nextEvents.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">Tidak ada acara mendatang saat ini.</p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/events">
              <Calendar className="mr-2 h-4 w-4" />
              Lihat Semua Acara
            </Link>
          </Button>
        </div>
      )}
    </div>
  )
}
