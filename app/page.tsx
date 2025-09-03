import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import CommunityStatsSection from "@/components/community-stats-section"
import CommunityInfoSection from "@/components/community-info-section"
import PrayerTimesSection from "@/components/prayer-times-section"
import QuickLinksSection from "@/components/quick-links-section"
import FooterSection from "@/components/footer-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Spacer for fixed header */}
      <div className="h-20"></div>

      <HeroSection />
      <CommunityStatsSection />
      <CommunityInfoSection />
      <PrayerTimesSection />
      <QuickLinksSection />
      <FooterSection />
    </div>
  )
} 
