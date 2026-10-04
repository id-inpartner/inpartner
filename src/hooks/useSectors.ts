import { useEffect, useState } from 'react'
import axios from 'axios'

export interface Sector {
  readonly id: string
  readonly slug: string
  readonly name: string
}

const CACHE_KEY = 'inpartner_sectors_v1'

export const useSectors = () => {
  const [sectors, setSectors] = useState<ReadonlyArray<Sector>>([])

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
        if (Array.isArray(data)) {
          setSectors(data)
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(data))
          } catch {
            // Ignore storage errors
          }
        }
      })
      .catch(() => {
        // Keep cached state or empty fallback on failure
      })
  }, [])

  return sectors
}
