import { useEffect, useState } from 'react'
import axios from 'axios'

export interface Sector {
  readonly id: string
  readonly slug: string
  readonly name: string
}

const key = `sector-list-${new Date()}`

export const useSectors = () => {
  const [sectors, setSectors] = useState<ReadonlyArray<Sector>>(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem(key) || '[]')
      : []
  )
  useEffect(() => {
    axios
      .get('/api/sector')
      .then(({ data }) => {
        setSectors(data)
        if (typeof window !== 'undefined') {
          localStorage.setItem(key, JSON.stringify(data))
        }
      })
      .catch((e) => {
        //
      })
  }, [])
  return sectors
}
