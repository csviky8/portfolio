'use client'
import { useEffect, useRef } from 'react'

const experiences = [
  {
    role: 'Senior PHP Developer',
    company: 'Trikon Telesoft Solutions Pvt Ltd',
    location: 'Chennai',
    period: 'Feb 2025 – Present',
    current: true,
    points: [
      'Leading CRM development for Metaclick & Metaweb — managing complete customer lifecycle from lead generation to support.',
      'Architecting scalable Laravel 9 solutions handling sales automation, quotation management, and contract workflows.',
      'Improving team productivity through automated task pipelines and cross-team coordination tools.',
    ],
    tech: ['Laravel 9', 'MySQL', 'Vue 3', 'REST API'],
  },
  {
    role: 'PHP Developer',
    company: 'FOODHUB',
    location: 'Chennai',
    period: 'Aug 2022 – Jan 2025',
    current: false,
    points: [
      'Built OCR Compact Car Rental — a full booking platform for Queensland, Australia with real-time vehicle availability.',
      'Integrated secure payment gateways and dynamic pricing engine for the car rental platform.',
      'Optimized application performance, improving page load and customer engagement metrics.',
    ],
    tech: ['Core PHP', 'API Integration', 'MySQL', 'HTML/CSS'],
  },
  {
    role: 'SDE II',
    company: 'One Modo Technologies',
    location: 'Chennai',
    period: 'Nov 2019 – Aug 2022',
    current: false,
    points: [
      'Built Modo ERP Solution — a full ERP system for the mining industry using Laravel 8 & Vue 3.',
      'Prevented theft and inventory loss with real-time tracking and streamlined departmental workflows.',
      'Optimised machinery and inventory management, improving profitability and operational transparency.',
    ],
    tech: ['Laravel 8', 'Vue 3', 'MySQL', 'JavaScript'],
  },
  {
    role: 'Web Developer',
    company: 'Beyondex Solution Pvt Ltd',
    location: 'Chennai',
    period: 'Oct 2018 – Nov 2019',
    current: false,
    points: [
      'Developed Tala Transport CMS — a responsive content management system using AngularJS, PHP, and MySQL.',
      'Built Geely Publish CMS — managing articles, news, and galleries with UI/UX design and email templates.',
    ],
    tech: ['AngularJS', 'PHP', 'MySQL', 'HTML/CSS'],
  },
  {
    role: 'Web Developer',
    company: 'Active System Integration',
    location: 'Chennai',
    period: 'Oct 2017 – Oct 2018',
    current: false,
    points: [
      'Started career building web applications and internal tools using PHP and JavaScript.',
      'Collaborated with clients for requirement gathering and translating business needs into technical solutions.',
    ],
    tech: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS'],
  },
]

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-28 max-w-6xl mx-auto px-6">
      <div className="section-reveal mb-14">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-mono text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(108,99,255,0.15)', color: 'var(--brand-2)' }}>03</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Experience</h2>
          <div className="section-line" />
        </div>
        <p className="text-sm ml-10" style={{ color: 'var(--text-muted)' }}>8+ years across 5 companies</p>
      </div>

      <div className="relative">
        <div className="timeline-line hidden md:block" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="section-reveal relative flex gap-8 md:pl-14"
              style={{ transitionDelay: `${i * 100}ms` }}>

              {/* Dot */}
              <div className={`hidden md:flex absolute left-2 top-5 w-6 h-6 rounded-full items-center justify-center z-10 ${exp.current ? 'timeline-dot' : ''}`}
                style={{
                  background: exp.current ? 'linear-gradient(135deg, #6c63ff, #a78bfa)' : 'var(--bg3)',
                  border: `2px solid ${exp.current ? '#6c63ff' : 'var(--glass-border)'}`,
                }}>
                {exp.current && <span className="w-2 h-2 rounded-full bg-white" />}
              </div>

              <div className="flex-1 glow-card rounded-2xl p-6 glass-card" style={{ borderRadius: '16px' }}>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-base" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                      {exp.current && (
                        <span className="text-xs px-2.5 py-0.5 rounded-full font-mono font-semibold"
                          style={{ background: 'rgba(108,99,255,0.2)', color: 'var(--brand-2)' }}>
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium" style={{ color: 'var(--brand-2)' }}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-xl glass-card"
                    style={{ color: 'var(--text-muted)', border: '1px solid var(--glass-border)' }}>
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-2.5 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--brand)', marginTop: '5px', flexShrink: 0, fontSize: '8px' }}>◆</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid var(--glass-border)' }}>
                  {exp.tech.map((t) => (
                    <span key={t} className="tag-pill text-xs px-3 py-1 rounded-full font-mono glass-card"
                      style={{ color: 'var(--text-muted)', border: '1px solid var(--glass-border)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
