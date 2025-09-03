"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, MSquare as Mosque } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Jadwal Sholat", href: "#prayer-times" },
  { name: "Masjid", href: "/mosques" },
  { name: "Acara", href: "/events" },
  { name: "Tentang", href: "/about" },
]

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-emerald-900/95 via-teal-800/95 to-cyan-900/95 backdrop-blur-md border-b border-teal-700/30 shadow-xl">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Mosque className="h-10 w-10 text-white group-hover:text-emerald-100 transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-emerald-100 transition-colors">
                  Purbayan
                </span>
                <span className="text-sm text-emerald-200 font-medium">
                  RW 123
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg text-sm font-semibold text-emerald-100 hover:text-white hover:bg-white/10 transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-emerald-100 hover:text-white hover:bg-white/10 rounded-lg p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-emerald-900/95 to-teal-800/95 backdrop-blur-md border-t border-teal-700/30">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-base font-semibold text-emerald-100 hover:text-white hover:bg-white/10 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Islamic decorative element */}
            <div className="flex justify-center pb-4">
              <div className="flex items-center space-x-2 text-amber-300">
                <div className="w-8 h-px bg-amber-400"></div>
                <span className="text-sm">✦</span>
                <div className="w-8 h-px bg-amber-400"></div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Islamic geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="nav-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.3"/>
              <path d="M2,2 L8,8 M8,2 L2,8" stroke="currentColor" strokeWidth="0.3" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nav-pattern)"/>
        </svg>
      </div>
    </header>
  )
}
