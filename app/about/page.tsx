import Navigation from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, MSquare as Mosque, Heart, Book, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
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
            backgroundImage: `url('https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
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
              <pattern id="about-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,0 L20,0 L20,20 L0,20 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.4"/>
                <path d="M5,5 L15,15 M15,5 L5,15" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-pattern)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
              <span className="text-amber-300">Tentang</span>
              <br />
              <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Purbayan RW 123
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Warisan budaya Islam-Jawa di jantung Kotagede yang bersejarah
            </p>
            
            {/* Decorative divider */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="text-2xl text-amber-400">✦</div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Sejarah <span className="text-emerald-600">Purbayan</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Purbayan RW 123 merupakan salah satu kawasan bersejarah di Kotagede, Yogyakarta yang kaya akan warisan budaya Islam-Jawa. Kawasan ini telah menjadi pusat kehidupan spiritual masyarakat muslim selama berabad-abad.
                </p>
                <p>
                  Sebagai bagian dari Kotagede yang merupakan ibu kota pertama Kesultanan Mataram, Purbayan memiliki nilai historis yang sangat tinggi dalam perkembangan Islam di Jawa.
                </p>
                <p>
                  Hingga kini, tradisi dan nilai-nilai Islam masih terjaga dengan baik melalui berbagai kegiatan keagamaan dan sosial yang dilakukan secara rutin oleh masyarakat setempat.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Kotagede Historical Architecture"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Tradition Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Budaya & <span className="text-teal-600">Tradisi</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Perpaduan harmonis antara tradisi Jawa dan nilai-nilai Islam yang telah mengakar selama berabad-abad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-muted/50">
              <CardHeader className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">Pengajian Rutin</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Kajian Al-Quran dan Hadits yang dilaksanakan setiap minggu untuk memperdalam pemahaman agama
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-muted/50">
              <CardHeader className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Gotong Royong</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Tradisi tolong-menolong dan kerjasama yang mencerminkan nilai-nilai Islam dalam kehidupan bermasyarakat
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-muted/50">
              <CardHeader className="text-center">
                <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Sedekah Bumi</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  Upacara syukur tradisional yang memadukan ritual Jawa dengan nilai-nilai syukur dalam Islam
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Komunitas dalam <span className="text-cyan-600">Angka</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Data dan fakta tentang kehidupan beragama di Purbayan RW 123
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-emerald-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mosque className="h-12 w-12 text-emerald-600" />
              </div>
              <div className="text-4xl font-bold text-emerald-600 mb-3">25+</div>
              <p className="text-muted-foreground font-medium">Masjid & Musholla</p>
            </div>

            <div className="text-center group">
              <div className="bg-teal-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-12 w-12 text-teal-600" />
              </div>
              <div className="text-4xl font-bold text-teal-600 mb-3">500+</div>
              <p className="text-muted-foreground font-medium">Jamaah Aktif</p>
            </div>

            <div className="text-center group">
              <div className="bg-cyan-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="h-12 w-12 text-cyan-600" />
              </div>
              <div className="text-4xl font-bold text-cyan-600 mb-3">50+</div>
              <p className="text-muted-foreground font-medium">Acara per Tahun</p>
            </div>

            <div className="text-center group">
              <div className="bg-amber-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Star className="h-12 w-12 text-amber-600" />
              </div>
              <div className="text-4xl font-bold text-amber-600 mb-3">100+</div>
              <p className="text-muted-foreground font-medium">Tahun Sejarah</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="hover:shadow-2xl transition-shadow border-0 bg-gradient-to-br from-emerald-50 to-emerald-100/50">
              <CardHeader className="text-center">
                <div className="bg-emerald-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-emerald-800">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-emerald-700 text-lg leading-relaxed">
                  Menjadi komunitas muslim yang unggul dalam melestarikan nilai-nilai Islam-Jawa, 
                  membangun generasi yang berakhlak mulia, dan berkontribusi positif bagi 
                  pembangunan masyarakat yang harmonis dan sejahtera.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow border-0 bg-gradient-to-br from-teal-50 to-teal-100/50">
              <CardHeader className="text-center">
                <div className="bg-teal-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-3xl text-teal-800">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-teal-700 text-lg space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Menyelenggarakan kegiatan keagamaan yang berkualitas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Melestarikan budaya dan tradisi Islam-Jawa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Memberdayakan masyarakat melalui program sosial</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-3 flex-shrink-0"></div>
                    <span>Membangun solidaritas dan persatuan umat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Bergabunglah dengan <span className="text-emerald-600">Komunitas Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Jadilah bagian dari komunitas muslim yang peduli terhadap pelestarian budaya 
            dan pengembangan spiritual bersama
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 font-semibold"
              asChild
            >
              <Link href="/events">
                <Calendar className="mr-3 h-6 w-6" />
                Lihat Kegiatan
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white text-lg px-8 py-4 rounded-2xl hover:scale-105 transition-all duration-300 font-semibold"
              asChild
            >
              <Link href="/mosques">
                <Mosque className="mr-3 h-6 w-6" />
                Kunjungi Masjid
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
      </footer>
    </div>
  )
}
