'use client'
import { useEffect, useRef } from 'react'

const education = [
  {
    degree: 'B.E — Computer Science & Engineering',
    institution: 'Arunai Engineering College',
    location: 'Thiruvannamalai',
    year: '2017',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary (XII)',
    institution: 'AKT Academy Matric Higher Secondary School',
    location: '',
    year: '2013',
    icon: '📚',
  },
  {
    degree: 'Secondary (X)',
    institution: 'St Joseph Matric Higher Secondary School',
    location: 'Cuddalore',
    year: '2011',
    icon: '🏫',
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
    <section ref={ref} className="py-24 max-w-6xl mx-auto px-6">
      <div className="section-reveal mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-sm" style={{ color: 'var(--brand)' }}>05.</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Education</h2>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {education.map((e, i) => (
          <div
            key={i}
            className="section-reveal card-hover rounded-2xl border p-5"
            style={{
              borderColor: 'var(--border)',
              background: 'var(--bg2)',
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <div className="text-2xl mb-3">{e.icon}</div>
            <div className="text-xs font-mono mb-1" style={{ color: 'var(--brand)' }}>{e.year}</div>
            <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--text)' }}>{e.degree}</h3>
            <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {e.institution}{e.location ? `, ${e.location}` : ''}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
