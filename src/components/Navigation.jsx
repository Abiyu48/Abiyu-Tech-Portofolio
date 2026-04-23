import { useState, useEffect } from 'react'
import { useLanguage } from './LanguageProvider'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  const navItems = [
    { label: t.nav.about, id: 'about' },
    { label: t.nav.skills, id: 'skills' },
    { label: t.nav.portfolio, id: 'portfolio' },
    { label: t.nav.experience, id: 'experience' },
    { label: t.nav.contact, id: 'contact' }
  ]

  return (
    <>
      {/* Floating Pill Navbar - Desktop */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-6 py-3.5 rounded-full transition-all duration-500 ${
        scrolled
          ? 'glass shadow-2xl shadow-purple-500/30 border border-purple-500/40'
          : 'glass border border-purple-500/20'
      }`}>
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2.5 mr-3 group"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-sm">AT</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse border-2 border-dark-bg"></div>
          </div>
        </button>

        {/* Divider */}
        <div className="w-px h-6 bg-purple-500/30 mx-1"></div>

        {/* Nav Items */}
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-purple-500/20 hover:text-purple-400 relative group"
          >
            {item.label}
            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 group-hover:w-4/5"></span>
          </button>
        ))}

        {/* Divider */}
        <div className="w-px h-6 bg-purple-500/30 mx-1"></div>

        <LanguageSwitcher />
      </nav>

      {/* Mobile Floating Button */}
      <div className="fixed top-5 right-5 z-50 md:hidden flex items-center gap-2">
        <LanguageSwitcher />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="glass w-11 h-11 rounded-full flex items-center justify-center border border-purple-500/30 shadow-lg shadow-purple-500/20"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="fixed top-20 right-5 z-50 md:hidden glass rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20 animate-fadeIn">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-6 py-3 hover:bg-purple-500/20 transition-all duration-300 border-b border-purple-500/10 last:border-0 text-sm font-medium"
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
    </>
  )
}
