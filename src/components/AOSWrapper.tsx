'use client'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export default function AOSWrapper() {
  useEffect(() => {
    AOS.init()
  }, [])

  return null
}
