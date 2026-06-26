'use client'
import { useEffect, useState, useRef } from 'react'

const roles = ['Senior PHP Developer', 'Laravel Specialist', 'Full-Stack Engineer', 'Vue 3 Developer']

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / 60)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 20)
    return () => clearInterval(timer)
  }, [active, target])
  return count
}

function Stat({ value, label, active }: { value: string; label: string; active: boolean }) {
  const num = parseInt(value)
  const suffix = value.replace(String(num), '')
  const count = useCounter(num, active)
  return (
    <div className="text-center px-6 py-4 rounded-2xl glass-card reveal-scale">
      <div className="text-2xl font-bold font-mono mb-1" style={{
        background: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        {active ? count : 0}{suffix}
      </div>
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  )
}

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [charIdx, setCharIdx] = useState(0)
  const [statsActive, setStatsActive] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const current = roles[roleIdx]
    if (typing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => { setDisplayed(current.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 65)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => { setDisplayed(current.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, 35)
        return () => clearTimeout(t)
      } else {
        setRoleIdx(i => (i + 1) % roles.length)
        setTyping(true)
      }
    }
  }, [charIdx, typing, roleIdx])

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsActive(true); observer.disconnect() }
    }, { threshold: 0.3 })
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden dot-bg">

      {/* Aurora blobs */}
      <div className="aurora-1 absolute pointer-events-none" style={{
        width: 700, height: 700, top: '-20%', left: '-15%',
        background: 'radial-gradient(circle, rgba(108,99,255,0.13) 0%, rgba(167,139,250,0.07) 40%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(40px)',
      }} />
      <div className="aurora-2 absolute pointer-events-none" style={{
        width: 600, height: 600, bottom: '-15%', right: '-10%',
        background: 'radial-gradient(circle, rgba(232,121,249,0.1) 0%, rgba(108,99,255,0.08) 40%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(50px)',
      }} />
      <div className="aurora-3 absolute pointer-events-none" style={{
        width: 400, height: 400, top: '30%', right: '20%',
        background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(30px)',
      }} />

      {/* Beam sweeps */}
      <div className="beam" style={{ top: '25%', animationDelay: '0s' }} />
      <div className="beam" style={{ top: '60%', animationDelay: '3s' }} />

      {/* Top radial */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(108,99,255,0.18) 0%, transparent 65%)',
      }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">

        {/* Status badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono mb-10 glass-card"
          style={{ color: 'var(--brand-2)', animation: 'fade-in-up 0.6s ease both' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full animate-ping" style={{ background: '#6c63ff', opacity: 0.6 }} />
            <span className="relative flex h-2 w-2 rounded-full" style={{ background: '#6c63ff' }} />
          </span>
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          className="text-6xl md:text-8xl font-bold mb-5 tracking-tight leading-none ai-gradient"
          style={{ animation: 'fade-in-up 0.7s ease both 0.1s' }}
        >
          Vignesh R
        </h1>

        {/* Typewriter */}
        <div className="h-12 flex items-center justify-center mb-6" style={{ animation: 'fade-in-up 0.7s ease both 0.2s' }}>
          <span className="text-xl md:text-2xl font-mono" style={{ color: 'var(--text-muted)' }}>
            &lt; <span style={{ color: 'var(--brand-2)' }}>{displayed}</span> <span className="terminal-cursor" /> /&gt;
          </span>
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: 'var(--text-muted)', animation: 'fade-in-up 0.7s ease both 0.3s' }}
        >
          8+ years crafting scalable web applications, CRMs, and enterprise systems.
          Turning complex problems into clean, performant solutions.
        </p>

        {/* Stats */}
        <div ref={statsRef} className="flex flex-wrap items-center justify-center gap-4 mb-12"
          style={{ animation: 'fade-in-up 0.7s ease both 0.4s' }}>
          {[
            { value: '8+', label: 'Years Exp.' },
            { value: '5', label: 'Companies' },
            { value: '5+', label: 'Projects' },
            { value: '16+', label: 'Technologies' },
          ].map(s => <Stat key={s.label} value={s.value} label={s.label} active={statsActive} />)}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4" style={{ animation: 'fade-in-up 0.7s ease both 0.5s' }}>
          <a href="#projects" className="btn-primary px-7 py-3.5 rounded-2xl font-semibold text-sm flex items-center gap-2">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn-ghost px-7 py-3.5 rounded-2xl font-semibold text-sm">
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-mono" style={{ color: 'var(--text-dim)' }}>scroll</span>
          <div className="w-px h-10" style={{
            background: 'linear-gradient(to bottom, var(--brand), transparent)',
            animation: 'float 2s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  )
}
