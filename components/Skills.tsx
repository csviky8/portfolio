'use client'
import { useEffect, useRef } from 'react'

const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'PHP', level: 95 },
      { name: 'Laravel', level: 92 },
      { name: 'Yii Framework', level: 80 },
      { name: 'Core PHP', level: 88 },
    ],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'Vue 3', level: 85 },
      { name: 'ReactJS', level: 75 },
      { name: 'AngularJS', level: 72 },
      { name: 'JavaScript', level: 88 },
      { name: 'jQuery', level: 85 },
      { name: 'HTML / CSS', level: 90 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'SQL Server', level: 82 },
    ],
  },
  {
    category: 'Mobile & CMS',
    icon: '📱',
    skills: [
      { name: 'Flutter', level: 70 },
      { name: 'WordPress', level: 80 },
      { name: 'Prestashop', level: 75 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
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
            // animate bars
            const bars = e.target.querySelectorAll<HTMLElement>('.skill-bar-fill')
            bars.forEach((bar) => {
              const w = bar.getAttribute('data-width') || '0'
              setTimeout(() => { bar.style.width = w + '%' }, 200)
            })
          }
        }),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24"
      style={{ background: 'var(--bg2)' }}
    >
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
                background: 'var(--bg3)',
                transitionDelay: `${gi * 80}ms`,
              }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">{group.icon}</span>
                <h3 className="font-semibold text-sm" style={{ color: 'var(--text)' }}>
                  {group.category}
                </h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono" style={{ color: 'var(--brand)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ background: 'rgba(22,181,112,0.1)' }}
                    >
                      <div
                        className="skill-bar-fill h-full rounded-full"
                        data-width={skill.level}
                        style={{
                          width: '0%',
                          background: 'linear-gradient(90deg, var(--brand-dim), var(--brand))',
                        }}
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
