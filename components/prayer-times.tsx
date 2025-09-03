"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin } from "lucide-react"

interface PrayerTimes {
  Fajr: string
  Dhuhr: string
  Asr: string
  Maghrib: string
  Isha: string
}

interface PrayerData {
  timings: PrayerTimes
  date: {
    readable: string
    hijri: {
      date: string
      month: {
        en: string
        ar: string
      }
      year: string
    }
  }
}

const prayerNames = {
  Fajr: "Subuh",
  Dhuhr: "Dzuhur",
  Asr: "Ashar",
  Maghrib: "Maghrib",
  Isha: "Isya",
}

export default function PrayerTimes() {
  const [prayerData, setPrayerData] = useState<PrayerData | null>(null)
  const [nextPrayer, setNextPrayer] = useState<string>("")
  const [timeUntilNext, setTimeUntilNext] = useState<string>("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        // Using Aladhan API for Yogyakarta coordinates
        const response = await fetch(
          "https://api.aladhan.com/v1/timings?latitude=-7.8753849&longitude=110.4262088&method=2",
        )
        const data = await response.json()
        setPrayerData(data.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching prayer times:", error)
        setLoading(false)
      }
    }

    fetchPrayerTimes()
  }, [])

  useEffect(() => {
    if (!prayerData) return

    const updateNextPrayer = () => {
      const now = new Date()
      const currentTime = now.getHours() * 60 + now.getMinutes()

      const prayers = [
        { name: "Fajr", time: prayerData.timings.Fajr, indonesian: "Subuh" },
        { name: "Dhuhr", time: prayerData.timings.Dhuhr, indonesian: "Dzuhur" },
        { name: "Asr", time: prayerData.timings.Asr, indonesian: "Ashar" },
        { name: "Maghrib", time: prayerData.timings.Maghrib, indonesian: "Maghrib" },
        { name: "Isha", time: prayerData.timings.Isha, indonesian: "Isya" },
      ]

      for (const prayer of prayers) {
        const [hours, minutes] = prayer.time.split(":").map(Number)
        const prayerTime = hours * 60 + minutes

        if (currentTime < prayerTime) {
          setNextPrayer(prayer.indonesian)
          const diff = prayerTime - currentTime
          const hoursLeft = Math.floor(diff / 60)
          const minutesLeft = diff % 60
          setTimeUntilNext(`${hoursLeft}j ${minutesLeft}m`)
          return
        }
      }

      // If no prayer found today, next is Fajr tomorrow
      setNextPrayer("Subuh")
      const [hours, minutes] = prayerData.timings.Fajr.split(":").map(Number)
      const fajrTime = hours * 60 + minutes
      const diff = 24 * 60 - currentTime + fajrTime
      const hoursLeft = Math.floor(diff / 60)
      const minutesLeft = diff % 60
      setTimeUntilNext(`${hoursLeft}j ${minutesLeft}m`)
    }

    updateNextPrayer()
    const interval = setInterval(updateNextPrayer, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [prayerData])

  if (loading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Jadwal Sholat Hari Ini
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-muted-foreground">Memuat jadwal sholat...</div>
        </CardContent>
      </Card>
    )
  }

  if (!prayerData) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Jadwal Sholat Hari Ini
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-destructive">Gagal memuat jadwal sholat</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      {/* Next Prayer Countdown */}
      <Card className="bg-primary text-primary-foreground">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="text-sm opacity-90">Sholat Selanjutnya</div>
            <div className="text-2xl font-bold">{nextPrayer}</div>
            <div className="text-lg">{timeUntilNext}</div>
          </div>
        </CardContent>
      </Card>

      {/* Prayer Times */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Jadwal Sholat Hari Ini
          </CardTitle>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Purbayan, Yogyakarta
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {Object.entries(prayerNames).map(([english, indonesian]) => (
              <div
                key={english}
                className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
              >
                <span className="font-medium">{indonesian}</span>
                <span className="text-lg font-mono">
                  {prayerData.timings[english as keyof PrayerTimes].substring(0, 5)}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border text-center text-sm text-muted-foreground">
            {prayerData.date.readable} • {prayerData.date.hijri.date} {prayerData.date.hijri.month.en}{" "}
            {prayerData.date.hijri.year} H
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
