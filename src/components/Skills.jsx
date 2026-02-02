import { useLanguage } from './LanguageProvider'

export default function Skills() {
  const { t } = useLanguage()

  const skills = [
    { name: 'UI/UX Design', percentage: 95, color: 'from-purple-500 to-pink-500' },
    { name: 'React.js', percentage: 83, color: 'from-cyan-500 to-blue-500' },
    { name: 'Tailwind CSS', percentage: 85, color: 'from-green-500 to-cyan-500' },
    { name: 'Figma', percentage: 90, color: 'from-orange-500 to-red-500' },
    { name: 'HTML & CSS', percentage: 90, color: 'from-yellow-500 to-orange-500' },
    { name: 'User Research', percentage: 85, color: 'from-pink-500 to-purple-500' },
  ]

  const tools = [
    { name: 'Figma', icon: '🎨', color: 'from-purple-500 to-pink-500' },
    { name: 'PHP', icon: '🐘', color: 'from-purple-600 to-indigo-600' },
    { name: 'Tailwind CSS', icon: '💨', color: 'from-cyan-400 to-blue-400' },
    { name: 'React', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'GitHub', icon: '🐙', color: 'from-gray-600 to-gray-800' },
    { name: 'HTML/CSS', icon: '🌐', color: 'from-orange-500 to-blue-500' },
    { name: 'MySQL', icon: '🐬', color: 'from-blue-600 to-orange-500' },
  ]

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass p-6 rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-lg">{skill.name}</span>
                <span className={`text-xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-3 bg-dark-border rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full progress-animate relative`}
                  style={{ width: `${skill.percentage}%` }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="pt-12 border-t border-purple-500/20">
          <h3 className="text-3xl font-bold gradient-text text-center mb-8">
            {t.skills.tools}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow on Hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${tool.color} rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-300`}></div>

                {/* Card */}
                <div className="relative glass p-6 rounded-xl flex flex-col items-center gap-3 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-semibold text-center">{tool.name}</span>

                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full">
            <span className="text-2xl animate-bounce">🚀</span>
            <span className="text-sm font-medium">Always learning and growing</span>
          </div>
        </div>
      </div>
    </section>
  )
}
