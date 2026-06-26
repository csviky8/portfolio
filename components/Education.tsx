'use client'
import { useEffect, useRef } from 'react'

const education = [
  {
    degree: 'B.E — Computer Science & Engineering',
    institution: 'Arunai Engineering College',
    location: 'Thiruvannamalai',
    year: '2013 – 2017',
    icon: '🎓',
    color: '#2563eb',
  },
  {
    degree: 'Higher Secondary (XII)',
    institution: 'AKT Academy Matric Higher Secondary School',
    location: 'Tamil Nadu',
    year: '2011 – 2013',
    icon: '📚',
    color: '#7c3aed',
  },
  {
    degree: 'Secondary (X)',
    institution: 'St Joseph Matric Higher Secondary School',
    location: 'Cuddalore',
    year: '2009 – 2011',
    icon: '🏫',
    color: '#0ea5e9',
  },
]

export default function Education() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="education" ref={ref} className="py-24 max-w-6xl mx-auto px-6">
      <div className="section-reveal mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-sm" style={{ color: 'var(--brand)' }}>05.</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Education</h2>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Academic background</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-5 top-0 bottom-0 w-px hidden md:block"
          style={{ background: 'linear-gradient(to bottom, var(--brand), transparent)' }}
        />

        <div className="space-y-8">
          {education.map((e, i) => (
            <div
              key={i}
              className="section-reveal flex gap-6 md:gap-10 md:pl-16 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Dot */}
              <div
                className="hidden md:flex absolute left-2.5 top-4 w-5 h-5 rounded-full items-center justify-center z-10 text-sm"
                style={{ background: e.color, boxShadow: `0 0 12px ${e.color}50` }}
              >
              </div>

              <div
                className="card-hover rounded-2xl border p-5 flex gap-4 flex-1"
                style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: e.color + '15' }}
                >
                  {e.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{e.degree}</h3>
                    <span
                      className="text-xs font-mono px-2.5 py-1 rounded-lg"
                      style={{ background: e.color + '15', color: e.color }}
                    >
                      {e.year}
                    </span>
                  </div>
                  <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    {e.institution}{e.location ? ` · ${e.location}` : ''}
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
