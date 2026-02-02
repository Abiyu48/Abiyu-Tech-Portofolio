'use client';

import { useState } from 'react'
import { useTheme } from './ThemeProvider'
import { useLanguage } from './LanguageProvider'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 transition-all duration-300 group-hover:shadow-purple-500/80 group-hover:scale-110">
                <span className="text-white font-bold text-lg">AT</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse"></div>
            </div>
            <span className="text-lg font-bold gradient-text hidden sm:inline">Abiyu-Tech</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: t.nav.about, id: 'about' },
              { label: t.nav.skills, id: 'skills' },
              { label: t.nav.portfolio, id: 'portfolio' },
              { label: t.nav.experience, id: 'experience' },
              { label: t.nav.contact, id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-purple-500/20 hover:text-purple-400 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-3/4"></span>
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <button
              onClick={toggleTheme}
              className="glass p-2.5 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 group"
            >
              <div className="relative">
                {theme === 'dark' ? (
                  <svg className="w-5 h-5 text-yellow-400 transition-transform duration-300 group-hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden glass p-2.5 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass mt-2 mb-4 rounded-xl overflow-hidden animate-fadeIn">
            {[
              { label: t.nav.about, id: 'about' },
              { label: t.nav.skills, id: 'skills' },
              { label: t.nav.portfolio, id: 'portfolio' },
              { label: t.nav.experience, id: 'experience' },
              { label: t.nav.contact, id: 'contact' }
            ].map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-6 py-3 hover:bg-purple-500/20 transition-all duration-300 border-b border-purple-500/10 last:border-0"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></span>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
