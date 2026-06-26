'use client'
import { useEffect, useState } from 'react'

const roles = ['Senior PHP Developer', 'Laravel Specialist', 'Full-Stack Engineer', 'Vue 3 Developer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = roles[roleIdx]
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx + 1))
          setCharIdx((c) => c + 1)
        }, 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 1800)
        return () => clearTimeout(t)
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx - 1))
          setCharIdx((c) => c - 1)
        }, 35)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [charIdx, typing, roleIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-8 border"
          style={{
            borderColor: 'rgba(37,99,235,0.2)',
            background: 'rgba(37,99,235,0.06)',
            color: 'var(--brand)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: 'var(--brand)' }}
          />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          Vignesh R
        </h1>

        {/* Typewriter */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span
            className="text-xl md:text-2xl font-mono font-medium"
            style={{ color: 'var(--brand)' }}
          >
            {displayed}
            <span className="terminal-cursor" />
          </span>
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          8+ years crafting scalable web applications, CRMs, and enterprise systems.
          Turning complex problems into clean, performant solutions.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          {[
            { value: '8+', label: 'Years Experience' },
            { value: '5', label: 'Companies' },
            { value: '5+', label: 'Major Projects' },
            { value: '16+', label: 'Technologies' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-2xl md:text-3xl font-bold font-mono"
                style={{ color: 'var(--brand)' }}
              >
                {s.value}
              </div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: 'var(--brand)', color: '#ffffff' }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 hover:bg-[rgba(37,99,235,0.06)]"
            style={{ borderColor: 'rgba(37,99,235,0.3)', color: 'var(--brand)' }}
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>scroll</span>
          <div
            className="w-px h-8"
            style={{
              background: 'linear-gradient(to bottom, var(--brand), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  )
}
