import { useEffect, useState } from 'react'
import axios from 'axios'

export interface Sector {
  readonly id: string
  readonly slug: string
  readonly name: string
}

const CACHE_KEY = 'inpartner_sectors_v1'

const DEFAULT_SECTORS: ReadonlyArray<Sector> = [
  {
    id: '1',
    slug: 'restructuring-pre-ipo-ipo-and-right-issue',
    name: 'Restructuring, Pre-IPO, IPO, and Right Issue',
  },
  { id: '2', slug: 'alternative-investment', name: 'Alternative Investment' },
  { id: '3', slug: 'financial-services', name: 'Financial Services' },
  { id: '4', slug: 'infrastructure', name: 'Infrastructure' },
  { id: '5', slug: 'renewable-energy', name: 'Renewable Energy' },
  { id: '6', slug: 'cleantech', name: 'Cleantech' },
  { id: '7', slug: 'environmental', name: 'Environmental' },
  { id: '8', slug: 'health-care', name: 'Health Care' },
  { id: '9', slug: 'information-technology', name: 'Information Technology' },
  { id: '10', slug: 'property', name: 'Property' },
  { id: '11', slug: 'education-training', name: 'Education & Training' },
  { id: '12', slug: 'biotechnology', name: 'Biotechnology' },
  { id: '13', slug: 'electric-vehicle', name: 'Electric Vehicle' },
  { id: '14', slug: 'waste-management', name: 'Waste Management' },
]

export const useSectors = () => {
  const [sectors, setSectors] = useState<ReadonlyArray<Sector>>(DEFAULT_SECTORS)

  useEffect(() => {
    // 1. Try to load cached sectors for immediate client-side display
    try {
      const cached = localStorage.getItem(CACHE_KEY)
      if (cached) {
        const parsed = JSON.parse(cached)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSectors(parsed)
        }
      }
    } catch {
      // Ignore storage errors (e.g., incognito mode or disabled storage)
    }

    // 2. Fetch latest sectors from API
    axios
      .get<ReadonlyArray<Sector>>('/api/sector')
      .then(({ data }) => {
        if (Array.isArray(data) && data.length > 0) {
          setSectors(data)
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(data))
          } catch {
            // Ignore storage errors
          }
        }
      })
      .catch(() => {
        // Keep cached state or default fallback on failure
      })
  }, [])

  return sectors
}
