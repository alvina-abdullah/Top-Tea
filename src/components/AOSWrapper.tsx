'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSWrapper() {
  useEffect(() => {
    AOS.init({ once: true }) // You can customize AOS options here
  }, [])

  return null
}
