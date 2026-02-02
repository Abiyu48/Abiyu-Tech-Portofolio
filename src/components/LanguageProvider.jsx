'use client';

import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext(undefined)

const translations = {
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            portfolio: 'Portfolio',
            experience: 'Experience',
            contact: 'Contact'
        },
        hero: {
            welcome: '👋 Welcome to my portfolio',
            greeting: "Hi, I'm",
            role1: 'UI/UX Designer',
            role2: 'Front-End Developer',
            description: 'Crafting beautiful, user-centered interfaces and bringing them to life with clean code. Passionate about creating seamless digital experiences.',
            projects: 'Projects',
            certifications: 'Certifications',
            years: 'Years of Experience',
            viewWork: 'View My Work',
            getInTouch: 'Get In Touch',
            profilePhoto: 'Your Profile Photo Here'
        },
        about: {
            title: 'About',
            me: 'Me',
            subtitle: 'Passionate designer & developer based in Indonesia',
            description1: "I'm Abbiyu Putra Praditama, a UI/UX Designer & Front-End Developer passionate about creating intuitive, beautiful digital experiences.",
            description2: 'I blend design thinking with technical skills to build products that users love — from wireframes to pixel-perfect, responsive interfaces.',
            strengths: 'Key Strengths',
            strength1: 'User Research & UX Flow Design',
            strength2: 'Clean Code & Modern UI Architecture',
            strength3: 'Responsive Front-End Development',
            strength4: 'Design System & Component Library',
            downloadCV: 'Download CV',
            available: 'Available for freelance'
        },
        skills: {
            title: 'My Skills',
            subtitle: 'Expertise in crafting beautiful, user-centered digital experiences',
            tools: 'Tools & Technologies',
            toolsSubtitle: 'Technologies I use to bring ideas to life'
        },
        portfolio: {
            title: 'Portfolio',
            subtitle: 'Selected projects showcasing my expertise',
            all: 'All',
            uiux: 'UI/UX',
            web: 'Web Dev',
            mobile: 'Mobile'
        },
        experience: {
            title: 'Experience',
            subtitle: 'Professional journey and achievements',
            present: 'Present'
        },
        contact: {
            title: 'Get In Touch',
            subtitle: "Let's discuss your next project or collaboration",
            methods: 'Contact Methods',
            follow: 'Follow Me',
            form: {
                name: 'Name',
                email: 'Email',
                message: 'Message',
                namePlaceholder: 'Your name',
                emailPlaceholder: 'Your email',
                messagePlaceholder: 'Your message',
                send: 'Send Message',
                success: '✓ Message sent successfully! I\'ll get back to you soon.'
            }
        },
        footer: {
            description: 'UI/UX Designer & Front-End Developer',
            quickLinks: 'Quick Links',
            connect: "Let's Connect",
            connectDesc: 'Have a project in mind? Let\'s work together!',
            startProject: 'Start Project',
            rights: 'All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service'
        }
    },
    id: {
        nav: {
            about: 'Tentang',
            skills: 'Keahlian',
            portfolio: 'Portofolio',
            experience: 'Pengalaman',
            contact: 'Kontak'
        },
        hero: {
            welcome: '👋 Selamat datang di portofolio saya',
            greeting: 'Halo, Saya',
            role1: 'UI/UX Designer',
            role2: 'Front-End Developer',
            description: 'Saya adalah seorang profesional yang berdedikasi dalam menciptakan pengalaman digital yang intuitif dan estetis. Dengan keahlian yang memadukan desain UI/UX dan pengembangan Frontend, saya berfokus pada menjembatani celah antara konsep visual yang kreatif dengan implementasi teknis yang solid untuk menghadirkan solusi web yang responsif, inklusif, dan berperforma tinggi.',
            projects: 'Proyek',
            certifications: 'Sertifikat',
            years: 'Tahun Pengalaman',
            viewWork: 'Lihat Karya Saya',
            getInTouch: 'Hubungi Saya',
            profilePhoto: 'Foto Profil Anda Di Sini'
        },
        about: {
            title: 'Tentang',
            me: 'Saya',
            subtitle: 'Designer & developer yang passionate di Indonesia',
            description1: 'Saya Abbiyu Putra Praditama, seorang UI/UX Designer & Front-End Developer yang passionate dalam menciptakan pengalaman digital yang intuitif dan indah.',
            description2: 'Saya menggabungkan design thinking dengan keterampilan teknis untuk membangun produk yang disukai pengguna — dari wireframe hingga antarmuka responsif yang pixel-perfect.',
            strengths: 'Keahlian Utama',
            strength1: 'Riset Pengguna & Desain Alur UX',
            strength2: 'Kode Bersih & Arsitektur UI Modern',
            strength3: 'Pengembangan Front-End Responsif',
            strength4: 'Sistem Desain & Komponen Library',
            downloadCV: 'Unduh CV',
            available: 'Tersedia untuk freelance'
        },
        skills: {
            title: 'Keahlian Saya',
            subtitle: 'Expertise dalam menciptakan pengalaman digital yang indah',
            tools: 'Tools & Teknologi',
            toolsSubtitle: 'Teknologi yang saya gunakan untuk mewujudkan ide'
        },
        portfolio: {
            title: 'Portofolio',
            subtitle: 'Proyek pilihan yang menunjukkan keahlian saya',
            all: 'Semua',
            uiux: 'UI/UX',
            web: 'Web Dev',
            mobile: 'Mobile'
        },
        experience: {
            title: 'Pengalaman',
            subtitle: 'Perjalanan profesional dan pencapaian',
            present: 'Sekarang'
        },
        contact: {
            title: 'Hubungi Saya',
            subtitle: 'Mari diskusikan proyek atau kolaborasi Anda',
            methods: 'Metode Kontak',
            follow: 'Ikuti Saya',
            form: {
                name: 'Nama',
                email: 'Email',
                message: 'Pesan',
                namePlaceholder: 'Nama Anda',
                emailPlaceholder: 'Email Anda',
                messagePlaceholder: 'Pesan Anda',
                send: 'Kirim Pesan',
                success: '✓ Pesan berhasil dikirim! Saya akan segera menghubungi Anda.'
            }
        },
        footer: {
            description: 'UI/UX Designer & Front-End Developer',
            quickLinks: 'Link Cepat',
            connect: 'Mari Terhubung',
            connectDesc: 'Punya proyek? Mari bekerja sama!',
            startProject: 'Mulai Proyek',
            rights: 'Hak cipta dilindungi.',
            privacy: 'Kebijakan Privasi',
            terms: 'Syarat Layanan'
        }
    }
}

export default function LanguageProvider({ children }) {
    const [language, setLanguage] = useState('en')

    useEffect(() => {
        const savedLang = localStorage.getItem('language') || 'en'
        setLanguage(savedLang)
    }, [])

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'id' : 'en'
        setLanguage(newLang)
        localStorage.setItem('language', newLang)
    }

    const t = translations[language]

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error('useLanguage must be used within LanguageProvider')
    }
    return context
}
