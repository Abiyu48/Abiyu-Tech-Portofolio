'use client';

import { useState } from 'react'
import { useLanguage } from './LanguageProvider'

export default function Portfolio() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Web App Mental Health',
      category: 'web',
      image: '🛍️',
      description: 'The Mental Health Web App is a platform designed to help individuals maintain their mental health. With features such as journals, meditation, and counseling, this application provides a safe space for users to share their experiences and receive support.',
      tags: ['React', 'AI', 'Tailwind'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Web App AI Smarthome',
      category: 'web',
      image: '💳',
      description: 'The Smarthome Web App is a platform designed to help individuals control their smart home devices. With features such as lighting, temperature, and security controls, this application provides a safe space for users to share their experiences and receive support.',
      tags: ['PHP', 'AI', 'Web'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      id: 3,
      title: 'Web App Lumbung Tani',
      category: 'web',
      image: '📊',
      description: 'The Lumbung Tani Web App is a platform designed to help farmers sell their agricultural products. With features such as product listing, order management, and payment processing, this application provides a safe space for users to share their experiences and receive support.',
      tags: ['PHP', 'Web', 'UI/UX'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 4,
      title: 'Web App Sikasir',
      category: 'web',
      image: '🎨',
      description: 'The Sikasir Web App is a platform designed to help small and medium enterprises manage their sales and inventory. With features such as product listing, order management, and payment processing, this application provides a safe space for users to share their experiences and receive support.',
      tags: ['PHP', 'CSS', 'Laravel'],
      gradient: 'from-green-500 to-cyan-500'
    },
    {
      id: 5,
      title: 'Ecolink App',
      category: 'uiux',
      image: '💪',
      description: 'The Ecolink App is a digital platform for reporting waste issues and promoting environmental awareness. Users can easily report waste in their surroundings and contribute to creating a cleaner and more sustainable environment.',
      tags: ['UI/UX', 'Figma', 'Design'],
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Web App Cafe Milenial',
      category: 'web',
      image: '🍔',
      description: 'The Cafe Milenial Web App is a platform designed to help cafes sell their products. With features such as product listing, order management, and payment processing, this application provides a safe space for users to share their experiences and receive support.',
      tags: ['PHP', 'CSS', 'JavaScript'],
      gradient: 'from-pink-500 to-orange-500'
    },
    {
      id: 7,
      title: 'Web App Sidodolan',
      category: 'web',
      image: '🍔',
      description: 'Web App Sidodolan is a tourism platform designed to help users explore Sidoarjo more easily. This website provides information on tourist destinations and helps users plan and manage their travel time when visiting Sidoarjo.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      gradient: 'from-pink-500 to-blue-500'
    },
    {
      id: 8,
      title: 'Web App AI Split Bill',
      category: 'web',
      image: '🍔',
      description: 'Web App AI Split Bill is a smart platform designed to help users split bills easily and fairly. Using AI-powered calculations, this application simplifies expense sharing among individuals or groups, making the process faster, clearer, and more efficient.',
      tags: ['React', 'CSS', 'JavaScript'],
      gradient: 'from-green-500 to-orange-500'
    },
    {
      id: 9,
      title: 'SmartRoom. App',
      category: 'uiux',
      image: '🍔',
      description: 'SmartRoom. App is a platform designed to help users control their smart home devices. With features such as lighting, temperature, and security controls, this application provides a safe space for users to share their experiences and receive support.',
      tags: ['UI/UX', 'Figma', 'Design'],
      gradient: 'from-purple-500 to-blue-500'
    },
    {
      id: 10,
      title: 'Web App SMP Negeri 2 Prambon',
      category: 'uiux',
      image: '🍔',
      description: 'Web App SMP Negeri 2 Prambon is a platform designed to help users control their smart home devices. With features such as lighting, temperature, and security controls, this application provides a safe space for users to share their experiences and receive support.',
      tags: ['UI/UX', 'Figma', 'Design'],
      gradient: 'from-purple-500 to-orange-500'
    },
  ]

  const categories = [
    { key: 'all', label: t.portfolio.all },
    { key: 'uiux', label: t.portfolio.uiux },
    { key: 'web', label: t.portfolio.web },
  ]

  const filtered = activeCategory === 'all' ? projects : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t.portfolio.title}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === cat.key
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                : 'glass hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition duration-500`}></div>

              {/* Card */}
              <div className="relative glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-300">
                {/* Image Area */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-7xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300"></div>
                  <span className="relative z-10 group-hover:scale-125 transition-transform duration-500">
                    {project.image}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
