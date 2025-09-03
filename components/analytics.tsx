'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Analytics to prevent SSR issues
const Analytics = dynamic(
  () => import('@vercel/analytics/next').then((mod) => mod.Analytics),
  { 
    ssr: false,
    loading: () => null
  }
)

export function ClientAnalytics() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <Analytics />
}
