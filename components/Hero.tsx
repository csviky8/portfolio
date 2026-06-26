'use client'
import { useEffect, useState, useRef } from 'react'

const roles = ['Senior PHP Developer', 'Laravel Specialist', 'Full-Stack Engineer', 'Vue 3 Developer']

const particles = [
  { size: 80, top: '15%', left: '8%', duration: '9s', delay: '0s' },
  { size: 50, top: '70%', left: '5%', duration: '12s', delay: '1s' },
  { size: 120, top: '20%', right: '6%', duration: '11s', delay: '0.5s' },
  { size: 60, top: '65%', right: '10%', duration: '8s', delay: '2s' },
  { size: 40, top: '45%', left: '15%', duration: '14s', delay: '1.5s' },
  { size: 90, top: '80%', right: '20%', duration: '10s', delay: '0.8s' },
]

function useCounter(target: number, active: boolean, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [active, target, duration])
  return count
}

function StatCounter({ value, label, active }: { value: string; label: string; active: boolean }) {
  const num = parseInt(value)
  const suffix = value.replace(String(num), '')
  const count = useCounter(num, active)
  return (
    <div className="text-center reveal-scale">
      <div className="text-2xl md:text-3xl font-bold font-mono" style={{ color: 'var(--brand)' }}>
        {active ? count : 0}{suffix}
      </div>
      <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{label}</div>
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsActive(true); observer.disconnect() } },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: (p as any).left,
            right: (p as any).right,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* Radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono mb-8 border"
          style={{
            borderColor: 'rgba(37,99,235,0.2)',
            background: 'rgba(37,99,235,0.06)',
            color: 'var(--brand)',
            animation: 'fade-in-up 0.6s ease both',
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: 'var(--brand)' }} />
          </span>
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight gradient-text"
          style={{ animationDelay: '0.1s', animation: 'fade-in-up 0.7s ease both 0.1s' }}
        >
          Vignesh R
        </h1>

        {/* Typewriter */}
        <div
          className="h-10 flex items-center justify-center mb-6"
          style={{ animation: 'fade-in-up 0.7s ease both 0.2s' }}
        >
          <span className="text-xl md:text-2xl font-mono font-medium" style={{ color: 'var(--brand)' }}>
            {displayed}
            <span className="terminal-cursor" />
          </span>
        </div>

        {/* Description */}
        <p
          className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: 'var(--text-muted)', animation: 'fade-in-up 0.7s ease both 0.3s' }}
        >
          8+ years crafting scalable web applications, CRMs, and enterprise systems.
          Turning complex problems into clean, performant solutions.
        </p>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-8 mb-12"
          style={{ animation: 'fade-in-up 0.7s ease both 0.4s' }}
        >
          {[
            { value: '8+', label: 'Years Experience' },
            { value: '5', label: 'Companies' },
            { value: '5+', label: 'Major Projects' },
            { value: '16+', label: 'Technologies' },
          ].map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} active={statsActive} />
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ animation: 'fade-in-up 0.7s ease both 0.5s' }}
        >
          <a
            href="#projects"
            className="btn-shimmer px-6 py-3 rounded-xl font-semibold text-sm"
            style={{ background: 'var(--brand)', color: '#ffffff' }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 hover:bg-[rgba(37,99,235,0.06)] hover:scale-105"
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
