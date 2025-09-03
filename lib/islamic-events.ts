import { format, addMonths, startOfMonth, endOfMonth } from 'date-fns'

export interface IslamicEvent {
  id: string
  title: string
  date: string
  hijriDate: string
  type: 'religious'
  description?: string
  significance?: string
  islamicDate?: string
  isHoliday: boolean
}

export interface HijriDate {
  date: string
  format: string
  day: string
  weekday: {
    en: string
    ar: string
  }
  month: {
    number: number
    en: string
    ar: string
  }
  year: string
  designation: {
    abbreviated: string
    expanded: string
  }
  holidays: string[]
}

export interface AlAdhanResponse {
  code: number
  status: string
  data: HijriDate[]
}

// Known Islamic events and holidays with their descriptions and significance
const islamicEventDescriptions: Record<string, { description: string; significance: string; islamicDate: string }> = {
  'Mawlid al-Nabi': {
    description: 'Celebration of Prophet Muhammad\'s (PBUH) birth',
    significance: 'Celebration of Prophet Muhammad\'s (PBUH) birth; lectures, recitations.',
    islamicDate: '12 Rabi\' al-Awwal'
  },
  'Maulid Nabi': {
    description: 'Celebration of Prophet Muhammad\'s (PBUH) birth',
    significance: 'Celebration of Prophet Muhammad\'s (PBUH) birth; lectures, recitations.',
    islamicDate: '12 Rabi\' al-Awwal'
  },
  'Isra and Miraj': {
    description: 'Commemorates the Prophet\'s night journey and ascension',
    significance: 'Commemorates Prophet\'s night journey and ascension; prayers, talks.',
    islamicDate: '27 Rajab'
  },
  'Isra\' and Mi\'raj': {
    description: 'Commemorates the Prophet\'s night journey and ascension',
    significance: 'Commemorates Prophet\'s night journey and ascension; prayers, talks.',
    islamicDate: '27 Rajab'
  },
  'Ramadan begins': {
    description: 'The start of the holy month of fasting',
    significance: 'Start of fasting month, nightly Taraweeh prayers, charity.',
    islamicDate: '1 Ramadan'
  },
  'Lailat al-Qadr': {
    description: 'The Night of Power during the last 10 nights of Ramadan',
    significance: 'Night of Power; extra prayers and Quran recitation.',
    islamicDate: '21–29 Ramadan'
  },
  'Laylat al-Qadr': {
    description: 'The Night of Power during the last 10 nights of Ramadan',
    significance: 'Night of Power; extra prayers and Quran recitation.',
    islamicDate: '21–29 Ramadan'
  },
  'Eid al-Fitr': {
    description: 'Festival celebrating the end of Ramadan',
    significance: 'Festival after Ramadan; communal prayers, visiting relatives, giving zakat al-fitr.',
    islamicDate: '1 Shawwal'
  },
  'Idul Fitri': {
    description: 'Festival celebrating the end of Ramadan',
    significance: 'Festival after Ramadan; communal prayers, visiting relatives, giving zakat al-fitr.',
    islamicDate: '1 Shawwal'
  },
  'Eid al-Adha': {
    description: 'Festival of Sacrifice commemorating Abraham\'s willingness to sacrifice his son',
    significance: 'Festival of Sacrifice; animal slaughter (qurbani), distribution to poor.',
    islamicDate: '10 Dhul Hijjah'
  },
  'Idul Adha': {
    description: 'Festival of Sacrifice commemorating Abraham\'s willingness to sacrifice his son',
    significance: 'Festival of Sacrifice; animal slaughter (qurbani), distribution to poor.',
    islamicDate: '10 Dhul Hijjah'
  },
  'Arafat Day': {
    description: 'The most important day of Hajj pilgrimage',
    significance: 'Fasting for non-pilgrims; main day of Hajj.',
    islamicDate: '9 Dhul Hijjah'
  },
  'Day of Arafat': {
    description: 'The most important day of Hajj pilgrimage',
    significance: 'Fasting for non-pilgrims; main day of Hajj.',
    islamicDate: '9 Dhul Hijjah'
  },
  'Arafah': {
    description: 'The most important day of Hajj pilgrimage',
    significance: 'Fasting for non-pilgrims; main day of Hajj.',
    islamicDate: '9 Dhul Hijjah'
  },
  'Ashura': {
    description: 'The 10th day of Muharram, a day of fasting and remembrance',
    significance: 'Fasting recommended; commemorates events of Moses and Hussain.',
    islamicDate: '10 Muharram'
  },
  'Day of Ashura': {
    description: 'The 10th day of Muharram, a day of fasting and remembrance',
    significance: 'Fasting recommended; commemorates events of Moses and Hussain.',
    islamicDate: '10 Muharram'
  },
  'Islamic New Year': {
    description: 'The beginning of the Islamic lunar year',
    significance: 'Marks new Hijri year; reflection and prayer.',
    islamicDate: '1 Muharram'
  },
  'New Year': {
    description: 'The beginning of the Islamic lunar year',
    significance: 'Marks new Hijri year; reflection and prayer.',
    islamicDate: '1 Muharram'
  },
  'Tahun Baru Islam': {
    description: 'The beginning of the Islamic lunar year',
    significance: 'Marks new Hijri year; reflection and prayer.',
    islamicDate: '1 Muharram'
  }
}

// Additional Islamic events to complement the AlAdhan API data
const additionalIslamicEvents2025 = [
  {
    id: 'nuzul-quran-2025',
    title: 'Nuzul Al-Qur\'an',
    date: '2025-03-16', // Approximate date for 17 Ramadan 2025
    hijriDate: '17 Ramadan 1446 H',
    type: 'religious' as const,
    description: 'Commemorates the revelation of the Qur\'an',
    significance: 'Commemorates the revelation of the Qur\'an.',
    islamicDate: '17 Ramadan',
    isHoliday: true
  },
  {
    id: 'hajj-season-2025',
    title: 'Hajj Season Begins',
    date: '2025-05-03', // Approximate date for 8 Dhul Hijjah 2025
    hijriDate: '8 Dhul Hijjah 1446 H',
    type: 'religious' as const,
    description: 'Beginning of the pilgrimage season to Makkah',
    significance: 'Pilgrimage to Makkah; rituals of Arafah, Mina, Muzdalifah.',
    islamicDate: '8–13 Dhul Hijjah',
    isHoliday: true
  }
]

export async function fetchIslamicEvents(): Promise<IslamicEvent[]> {
  const events: IslamicEvent[] = []
  const today = new Date()
  
  try {
    // Fetch events for past 6 months and next 12 months
    for (let i = -6; i < 12; i++) {
      const targetDate = addMonths(today, i)
      const year = targetDate.getFullYear()
      const month = targetDate.getMonth() + 1
      
      const url = `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
      
      const response = await fetch(url, {
        next: { revalidate: 86400 } // Cache for 24 hours
      })
      
      if (!response.ok) {
        console.warn(`Failed to fetch Islamic events for ${month}/${year}:`, response.status)
        continue
      }
      
      const data: AlAdhanResponse = await response.json()
      
      if (data.code === 200 && data.data) {
        data.data.forEach((hijriDate) => {
          if (hijriDate.holidays && hijriDate.holidays.length > 0) {
            hijriDate.holidays.forEach((holiday) => {
              // Convert Hijri date to Gregorian
              const gregorianDate = new Date(year, month - 1, parseInt(hijriDate.day))
              
              // Include all events (past and future)
              const eventData = islamicEventDescriptions[holiday]
              const event: IslamicEvent = {
                id: `islamic-${gregorianDate.getTime()}-${holiday.replace(/\s+/g, '-').toLowerCase()}`,
                title: holiday,
                date: format(gregorianDate, 'yyyy-MM-dd'),
                hijriDate: `${hijriDate.day} ${hijriDate.month.en} ${hijriDate.year} H`,
                type: 'religious',
                description: eventData?.description || `Islamic holiday: ${holiday}`,
                significance: eventData?.significance || `Important day in Islamic calendar`,
                islamicDate: eventData?.islamicDate || `${hijriDate.day} ${hijriDate.month.en}`,
                isHoliday: true
              }
              
              events.push(event)
            })
          }
        })
      }
    }
  } catch (error) {
    console.error('Error fetching Islamic events:', error)
  }
  
  // Add additional events for 2025
  const currentYear = today.getFullYear()
  if (currentYear === 2025) {
    events.push(...additionalIslamicEvents2025)
  }
  
  // Remove duplicates and sort by date
  const uniqueEvents = events.filter((event, index, self) => 
    index === self.findIndex((e) => e.id === event.id)
  )
  
  return uniqueEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export async function fetchUpcomingIslamicEvents(): Promise<IslamicEvent[]> {
  const allEvents = await fetchIslamicEvents()
  const today = new Date()
  return allEvents.filter(event => new Date(event.date) >= today)
}

export async function fetchPastIslamicEvents(): Promise<IslamicEvent[]> {
  const allEvents = await fetchIslamicEvents()
  const today = new Date()
  return allEvents.filter(event => new Date(event.date) < today)
}

export async function fetchIslamicHolidays(year: number): Promise<IslamicEvent[]> {
  const events: IslamicEvent[] = []
  
  try {
    // Fetch for each month of the year
    for (let month = 1; month <= 12; month++) {
      const url = `https://api.aladhan.com/v1/gToHCalendar/${month}/${year}`
      
      const response = await fetch(url, {
        next: { revalidate: 86400 } // Cache for 24 hours
      })
      
      if (!response.ok) continue
      
      const data: AlAdhanResponse = await response.json()
      
      if (data.code === 200 && data.data) {
        data.data.forEach((hijriDate) => {
          if (hijriDate.holidays && hijriDate.holidays.length > 0) {
            hijriDate.holidays.forEach((holiday) => {
              const gregorianDate = new Date(year, month - 1, parseInt(hijriDate.day))
              
              const eventData = islamicEventDescriptions[holiday]
              const event: IslamicEvent = {
                id: `islamic-${gregorianDate.getTime()}-${holiday.replace(/\s+/g, '-').toLowerCase()}`,
                title: holiday,
                date: format(gregorianDate, 'yyyy-MM-dd'),
                hijriDate: `${hijriDate.day} ${hijriDate.month.en} ${hijriDate.year} H`,
                type: 'religious',
                description: eventData?.description || `Islamic holiday: ${holiday}`,
                significance: eventData?.significance || `Important day in Islamic calendar`,
                islamicDate: eventData?.islamicDate || `${hijriDate.day} ${hijriDate.month.en}`,
                isHoliday: true
              }
              
              events.push(event)
            })
          }
        })
      }
    }
  } catch (error) {
    console.error('Error fetching Islamic holidays:', error)
  }
  
  return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}
