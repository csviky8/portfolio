'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Backend',
    color: '#6c63ff',
    skills: [{ name: 'PHP', level: 95 }, { name: 'Laravel', level: 92 }, { name: 'Core PHP', level: 88 }, { name: 'Yii Framework', level: 80 }],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    category: 'Frontend',
    color: '#a78bfa',
    skills: [{ name: 'Vue 3', level: 85 }, { name: 'JavaScript', level: 88 }, { name: 'HTML/CSS', level: 90 }, { name: 'ReactJS', level: 75 }, { name: 'AngularJS', level: 72 }, { name: 'jQuery', level: 85 }],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
  {
    category: 'Database',
    color: '#38bdf8',
    skills: [{ name: 'MySQL', level: 90 }, { name: 'SQL Server', level: 82 }],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      </svg>
    ),
  },
  {
    category: 'Mobile & CMS',
    color: '#f59e0b',
    skills: [{ name: 'Flutter', level: 70 }, { name: 'WordPress', level: 80 }, { name: 'Prestashop', level: 75 }],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    category: 'Tools & APIs',
    color: '#34d399',
    skills: [{ name: 'Git', level: 85 }, { name: 'REST APIs', level: 88 }],
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>
      </svg>
    ),
  },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          e.target.querySelectorAll<HTMLElement>('.skill-bar-fill').forEach((bar) => {
            const w = bar.getAttribute('data-width') || '0'
            setTimeout(() => { bar.style.width = w + '%' }, 300)
          })
        }
      }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className="py-28" style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-14">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-mono text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(108,99,255,0.15)', color: 'var(--brand-2)' }}>02</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Skills</h2>
            <div className="section-line" />
          </div>
          <p className="text-sm ml-10" style={{ color: 'var(--text-muted)' }}>Technologies I work with daily</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className="section-reveal glow-card rounded-2xl p-6 glass-card"
              style={{ transitionDelay: `${gi * 80}ms`, borderRadius: '16px' }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: group.color + '20', color: group.color }}>
                  {group.icon}
                </div>
                <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{group.category}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{skill.name}</span>
                      <span className="text-xs font-mono font-semibold" style={{ color: group.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 skill-bar-track rounded-full">
                      <div className="skill-bar-fill h-full rounded-full" data-width={skill.level}
                        style={{ width: '0%', background: `linear-gradient(90deg, ${group.color}80, ${group.color})` }} />
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
