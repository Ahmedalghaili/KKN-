import PrayerTimes from "@/components/prayer-times"

export default function PrayerTimesSection() {
  return (
    <section id="prayer-times" className="py-20 bg-gradient-to-r from-emerald-900/5 via-teal-800/5 to-cyan-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-6">Jadwal Sholat Hari Ini</h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Waktu sholat untuk wilayah Purbayan, Kotagede, Yogyakarta yang diperbarui secara otomatis setiap hari
          </p>
        </div>
        <div className="flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-emerald-100">
            <PrayerTimes />
          </div>
        </div>
      </div>
    </section>
  )
}
