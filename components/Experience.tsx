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
      'Transferred from FOODHUB as a key resource to this partner company.',
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
      'Developed responsive web applications with Core PHP and API integrations.',
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
      'Ensured cross-browser compatibility and guided team members on frontend best practices.',
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
    <section id="experience" ref={ref} className="py-24 max-w-6xl mx-auto px-6">
      <div className="section-reveal mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-sm" style={{ color: 'var(--brand)' }}>03.</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Experience</h2>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>8+ years across 5 companies</p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-4 md:left-8 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, var(--brand), transparent)' }}
        />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="section-reveal relative flex gap-6 md:gap-12 pl-12 md:pl-20"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Dot */}
              <div
                className="absolute left-2.5 md:left-6 top-2 w-4 h-4 rounded-full border-2 z-10"
                style={{
                  borderColor: exp.current ? 'var(--brand)' : 'var(--border)',
                  background: exp.current ? 'var(--brand)' : 'var(--bg)',
                  boxShadow: exp.current ? '0 0 12px rgba(37,99,235,0.3)' : 'none',
                }}
              />

              <div
                className="flex-1 rounded-2xl border p-5 md:p-6 card-hover"
                style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold" style={{ color: 'var(--text)' }}>{exp.role}</h3>
                      {exp.current && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-mono"
                          style={{ background: 'rgba(37,99,235,0.1)', color: 'var(--brand)' }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--brand)' }}>
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-lg border" style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}>
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: 'var(--brand)', marginTop: '4px', flexShrink: 0 }}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                  className="text-xs px-2 py-1 rounded-md font-mono border tag-hover"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg3)' }}
                    >
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
