'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Backend',
    color: '#2563eb',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: [
      { name: 'PHP', level: 95 },
      { name: 'Laravel', level: 92 },
      { name: 'Core PHP', level: 88 },
      { name: 'Yii Framework', level: 80 },
    ],
  },
  {
    category: 'Frontend',
    color: '#7c3aed',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    skills: [
      { name: 'Vue 3', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'ReactJS', level: 75 },
      { name: 'AngularJS', level: 72 },
      { name: 'jQuery', level: 85 },
    ],
  },
  {
    category: 'Database',
    color: '#0ea5e9',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'SQL Server', level: 82 },
    ],
  },
  {
    category: 'Mobile & CMS',
    color: '#f59e0b',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
    skills: [
      { name: 'Flutter', level: 70 },
      { name: 'WordPress', level: 80 },
      { name: 'Prestashop', level: 75 },
    ],
  },
  {
    category: 'Tools & APIs',
    color: '#10b981',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: [
      { name: 'Git', level: 85 },
      { name: 'REST APIs', level: 88 },
    ],
  },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            const bars = e.target.querySelectorAll<HTMLElement>('.skill-bar-fill')
            bars.forEach((bar) => {
              const w = bar.getAttribute('data-width') || '0'
              setTimeout(() => { bar.style.width = w + '%' }, 300)
            })
          }
        }),
      { threshold: 0.15 }
    )
    ref.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-sm" style={{ color: 'var(--brand)' }}>02.</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Skills</h2>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Technologies I work with daily</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="section-reveal card-hover rounded-2xl border p-6"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--bg)',
                transitionDelay: `${gi * 80}ms`,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${group.color}15`, color: group.color }}
                >
                  {group.icon}
                </div>
                <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-3.5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-semibold" style={{ color: group.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: `${group.color}15` }}>
                      <div
                        className="skill-bar-fill h-full rounded-full transition-all duration-1000 ease-out"
                        data-width={skill.level}
                        style={{ width: '0%', background: `linear-gradient(90deg, ${group.color}99, ${group.color})` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
