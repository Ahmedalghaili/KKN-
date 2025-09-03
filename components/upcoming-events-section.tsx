import EventsPreview from "@/components/events-preview"

export default function UpcomingEventsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-900 mb-6">Acara Mendatang</h2>
          <p className="text-xl text-emerald-700 max-w-3xl mx-auto leading-relaxed">
            Jangan lewatkan kegiatan pengajian dan acara islami di komunitas Purbayan RW 123
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-emerald-100">
            <EventsPreview limit={3} />
          </div>
        </div>
      </div>
    </section>
  )
}
