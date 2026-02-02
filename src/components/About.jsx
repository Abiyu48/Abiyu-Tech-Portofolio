import { useLanguage } from './LanguageProvider'

export default function About() {
  const { t } = useLanguage()

  // Function to handle CV download
  const handleDownloadCV = (e) => {
    e.preventDefault()
    
    // Download CV from public folder
    const link = document.createElement('a')
    link.href = '/CV ABBIYU PUTRA.pdf'
    link.download = 'CV ABBIYU PUTRA.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            {t.about.title} <span className="gradient-text">{t.about.me}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.about.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-3xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

            {/* Image Container */}
            <div className="relative glass p-8 rounded-3xl">
              <div className="w-full aspect-square rounded-2xl overflow-hidden ring-4 ring-purple-500/30">
                <img
                  src="/images/profile-casual.jpg"
                  alt="Abbiyu Putra Praditama"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl flex items-center gap-2 animate-bounce">
              <span className="text-2xl">🎨</span>
              <span className="text-sm font-semibold">Designer</span>
            </div>
            <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl flex items-center gap-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl">💻</span>
              <span className="text-sm font-semibold">Developer</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t.about.description1}
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              {t.about.description2}
            </p>

            {/* Strengths */}
            <div className="pt-6">
              <h3 className="text-2xl font-bold gradient-text mb-6">{t.about.strengths}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: '🔍', text: t.about.strength1, color: 'from-purple-500 to-pink-500' },
                  { icon: '💻', text: t.about.strength2, color: 'from-cyan-500 to-blue-500' },
                  { icon: '📱', text: t.about.strength3, color: 'from-orange-500 to-red-500' },
                  { icon: '🎨', text: t.about.strength4, color: 'from-green-500 to-cyan-500' }
                ].map((strength, index) => (
                  <div
                    key={index}
                    className="glass p-4 rounded-xl flex items-center gap-3 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${strength.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {strength.icon}
                    </div>
                    <span className="text-sm font-medium flex-1">{strength.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleDownloadCV}
              className="btn btn-primary mt-8 group inline-flex"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.about.downloadCV}
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}