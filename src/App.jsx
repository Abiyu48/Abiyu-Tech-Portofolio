import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeProvider from './components/ThemeProvider'
import LanguageProvider from './components/LanguageProvider'

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="dark">
          <Navigation />
          <main>
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  )
}
