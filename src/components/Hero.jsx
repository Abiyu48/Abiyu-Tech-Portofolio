import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full animate-fadeIn">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium">Available for work</span>
            </div>

            {/* Main Title */}
            <div className="space-y-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                {t.hero.greeting}{' '}
                <span className="gradient-text inline-block">
                  Abbiyu Putra
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {t.hero.role1} & {t.hero.role2}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {t.hero.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              {[
                { value: '5+', label: t.hero.projects, gradient: 'from-purple-500 to-pink-500' },
                { value: '10+', label: t.hero.certifications, gradient: 'from-cyan-500 to-blue-500' },
                { value: '2+', label: t.hero.years, gradient: 'from-orange-500 to-red-500' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="glass p-4 rounded-xl hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <p className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <a href="#portfolio" className="btn btn-primary group">
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.viewWork}
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a 
                href="https://drive.google.com/drive/folders/12mDGwSVL3z2Gk2ufoC01PSPXlZo_i-df?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t.hero.getInTouch}
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative flex items-center justify-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            {/* Floating Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-12 blur-xl opacity-50 float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl -rotate-12 blur-xl opacity-50 float" style={{ animationDelay: '1s' }}></div>

            {/* Main Visual */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Card */}
              <div className="relative glass p-8 rounded-3xl w-full max-w-sm h-[450px] flex flex-col items-center justify-center space-y-4">
                {/* Avatar */}
                <div className="relative">
                  <div className="w-60 h-60 rounded-full overflow-hidden ring-4 ring-purple-500/50 group-hover:ring-purple-500 transition-all duration-300 group-hover:scale-110">
                    <img
                      src="/images/profile-formal.jpg"
                      alt="Abbiyu Putra Praditama"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Status Badges */}
                  <div className="absolute -bottom-2 -right-2 glass px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 animate-bounce">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Online
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold gradient-text">Abbiyu Putra</h3>
                  <p className="text-sm text-gray-400">UI/UX Designer & Developer</p>
                </div>

                {/* Social Stats */}
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://www.linkedin.com/in/abbiyu-putra-praditama-362116306/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                    title="LinkedIn"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Abiyu48"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                    title="GitHub"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/abyuptraa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                    title="Instagram"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-pink-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Decoration Icons */}
            <div className="absolute top-20 -left-10 glass p-4 rounded-2xl float" style={{ animationDelay: '0.5s' }}>
              <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 7H7v6h6V7z" />
                <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="absolute bottom-20 -right-10 glass p-4 rounded-2xl float" style={{ animationDelay: '1.5s' }}>
              <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}