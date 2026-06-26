'use client'
import { useEffect, useRef } from 'react'

const education = [
  {
    degree: 'B.E — Computer Science & Engineering',
    institution: 'Arunai Engineering College',
    location: 'Thiruvannamalai',
    year: '2013 – 2017',
    icon: '🎓',
    color: '#6c63ff',
  },
  {
    degree: 'Higher Secondary (XII)',
    institution: 'AKT Academy Matric Higher Secondary School',
    location: 'Tamil Nadu',
    year: '2011 – 2013',
    icon: '📚',
    color: '#a78bfa',
  },
  {
    degree: 'Secondary (X)',
    institution: 'St Joseph Matric Higher Secondary School',
    location: 'Cuddalore',
    year: '2009 – 2011',
    icon: '🏫',
    color: '#38bdf8',
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
    <section id="education" ref={ref} className="py-28 max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--bg)' }}>
      <div className="section-reveal mb-14">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-mono text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(108,99,255,0.15)', color: 'var(--brand-2)' }}>05</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Education</h2>
          <div className="section-line" />
        </div>
        <p className="text-sm ml-10" style={{ color: 'var(--text-muted)' }}>Academic background</p>
      </div>

      <div className="relative">
        <div className="timeline-line hidden md:block" />
        <div className="space-y-5">
          {education.map((e, i) => (
            <div key={i} className="section-reveal relative flex gap-8 md:pl-14"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="hidden md:flex absolute left-2 top-4 w-6 h-6 rounded-full items-center justify-center z-10"
                style={{ background: e.color + '30', border: `2px solid ${e.color}` }}>
                <span className="w-2 h-2 rounded-full" style={{ background: e.color }} />
              </div>
              <div className="flex-1 glow-card rounded-2xl p-5 glass-card flex gap-4" style={{ borderRadius: '16px' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: e.color + '20' }}>
                  {e.icon}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{e.degree}</h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg"
                      style={{ background: e.color + '20', color: e.color }}>
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
