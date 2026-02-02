'use client';

import { useLanguage } from './LanguageProvider'

export default function LanguageSwitcher() {
    const { language, toggleLanguage } = useLanguage()

    return (
        <button
            onClick={toggleLanguage}
            className="relative group"
            aria-label="Toggle Language"
        >
            <div className="glass px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:border-purple-500/50">
                {/* Animated Globe Icon */}
                <div className="relative">
                    <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></span>
                </div>

                {/* Language Text with Gradient */}
                <span className="font-semibold text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {language === 'en' ? 'EN' : 'ID'}
                </span>

                {/* Arrow Icon */}
                <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>

            {/* Tooltip */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="glass px-3 py-1 rounded-lg text-xs whitespace-nowrap">
                    {language === 'en' ? 'Switch to Indonesian' : 'Ganti ke English'}
                </div>
            </div>
        </button>
    )
}
