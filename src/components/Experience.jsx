import { useLanguage } from './LanguageProvider'

export default function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      id: 1,
      title: 'Student Developer & UI/UX Enthusiast',
      company: 'SMK Telkom Sidoarjo',
      period: '2022 - Present',
      description: 'Actively involved in school projects, organizations, and creative programs.',
      achievements: [
        'Developed multiple website-based projects as part of school assignments',
        'Member of Paskibra Kecamatan Sidoarjo years 2025',
        'Selected as Duta Muda dan Pariwisata Kabupaten Sidoarjo'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Student & Organizational Member',
      company: 'SMP Negeri 1 Krian',
      period: '2019 - 2022',
      description: 'Participated in student organizations and public speaking activities.',
      achievements: [
        'Active member of OSIS',
        'Member of Paskibra',
        'Served as MC for school events'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Student & Scout Member',
      company: 'SD Negeri Krian 4',
      period: '2013 - 2019',
      description: 'Early involvement in scouting and extracurricular activities.',
      achievements: [
        'Participated in LT II Pramuka',
        'Joined Rally Sepeda Pramuka'
      ],

      color: 'from-orange-500 to-red-500'
    },
  ]

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t.experience.title}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.experience.subtitle}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-8 items-center animate-fadeIn`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot - Position changes based on side */}
                <div className={`absolute ${index % 2 === 0 ? 'left-0 md:left-1/2' : 'left-0 md:left-1/2'} -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} shadow-lg z-10 pulse`}>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-ping opacity-75"></div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="group relative">
                    {/* Glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition duration-500`}></div>

                    {/* Card */}
                    <div className="relative glass p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300">
                      {/* Header */}
                      <div className="mb-4">
                        <div className={`inline-block mb-2 glass px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                          {exp.period}
                        </div>
                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>

                      <p className="text-gray-400 mb-4">{exp.description}</p>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium">Journey continues...</span>
          </div>
        </div>
      </div>
    </section>
  )
}
