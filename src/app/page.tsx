import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />

      <div>
        <link rel="stylesheet" href="/navbar" />
        <link rel="stylesheet" href="/hero" />
        <link rel="stylesheet" href="/about" />
        <link rel="stylesheet" href="/menu" />
        <link rel="stylesheet" href="/gallery" />
        <link rel="stylesheet" href="/contact" />
      </div>
    </main>
  );
}
