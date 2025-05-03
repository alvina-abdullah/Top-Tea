"use client";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function AosLoader() {
  useEffect(() => {
    AOS.init();
  }, []);

  return null;
}
