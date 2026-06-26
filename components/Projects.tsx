'use client'
import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    title: 'Trikon CRM',
    subtitle: 'Metaclick & Metaweb',
    duration: 'Jan 2024 – Present',
    tech: ['Laravel 9', 'MySQL', 'Vue 3', 'REST API'],
    description: 'Enterprise CRM managing the complete customer lifecycle — from lead generation and quotations to contract handling, client onboarding, and support ticket management.',
    highlights: ['Automated sales & support workflows', 'Real-time lead tracking system', 'Contract management with digital approvals', 'Multi-client support'],
    color: '#6c63ff',
    icon: '🏢',
  },
  {
    title: 'OCR Car Rental',
    subtitle: 'Queensland, Australia',
    duration: 'Feb 2023 – Dec 2023',
    tech: ['Core PHP', 'API Integration', 'MySQL'],
    description: 'Full-featured car rental booking platform with real-time availability, dynamic pricing, and integrated payment gateways.',
    highlights: ['Real-time vehicle availability engine', 'Dynamic pricing & check-in', 'Secure payment gateway', 'Responsive across devices'],
    color: '#38bdf8',
    icon: '🚗',
  },
  {
    title: 'Modo ERP',
    subtitle: 'Mining Industry',
    duration: 'Jul 2021 – Jul 2022',
    tech: ['Laravel 8', 'Vue 3', 'MySQL', 'JavaScript'],
    description: 'Robust ERP system for the mining industry — preventing theft, pilferage, and inventory loss with real-time business tracking.',
    highlights: ['Anti-theft & loss prevention', 'Real-time tracking dashboard', 'Departmental workflow automation', 'Machinery optimization'],
    color: '#f59e0b',
    icon: '⛏️',
  },
  {
    title: 'Geely Publish CMS',
    subtitle: 'Content Management',
    duration: 'Mar 2019 – Oct 2019',
    tech: ['AngularJS', 'PHP', 'MySQL'],
    description: 'Dynamic CMS for managing website content including articles, news, and galleries with UI/UX design and email templates.',
    highlights: ['Multi-module content management', 'Client-side validations', 'HTML email templates', 'Technical support system'],
    color: '#a78bfa',
    icon: '📰',
  },
  {
    title: 'Tala Transport CMS',
    subtitle: 'Transport Company',
    duration: 'Oct 2018 – Mar 2019',
    tech: ['AngularJS', 'PHP', 'MySQL'],
    description: 'Responsive CMS for a transport company — handling dynamic web content across multiple modules with cross-browser compatibility.',
    highlights: ['Responsive multi-module CMS', 'Cross-browser compatibility', 'Client requirement analysis', 'Frontend best practices'],
    color: '#f472b6',
    icon: '🚌',
  },
]

export default function Projects() {
  const ref = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="py-28" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-14">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-mono text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(108,99,255,0.15)', color: 'var(--brand-2)' }}>04</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Projects</h2>
            <div className="section-line" />
          </div>
          <p className="text-sm ml-10" style={{ color: 'var(--text-muted)' }}>Notable systems I&apos;ve built</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="section-reveal rounded-2xl overflow-hidden flex flex-col glass-card cursor-default"
              style={{
                transitionDelay: `${i * 80}ms`,
                border: `1px solid ${hovered === i ? p.color + '50' : 'var(--glass-border)'}`,
                transition: 'border-color 0.3s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
                transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                boxShadow: hovered === i ? `0 24px 60px ${p.color}25` : 'none',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Top bar */}
              <div className="h-0.5" style={{ background: `linear-gradient(90deg, ${p.color}, ${p.color}20)` }} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl transition-transform duration-300"
                    style={{ transform: hovered === i ? 'scale(1.2) rotate(-5deg)' : 'scale(1)' }}>
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-base" style={{ color: 'var(--text)' }}>{p.title}</h3>
                    <p className="text-xs mt-0.5" style={{ color: p.color }}>{p.subtitle}</p>
                    <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-dim)' }}>{p.duration}</p>
                  </div>
                </div>

                <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
                  {p.description}
                </p>

                <ul className="space-y-1.5 mb-5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: p.color, flexShrink: 0, marginTop: '2px', fontSize: '8px' }}>◆</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: `1px solid var(--glass-border)` }}>
                  {p.tech.map((t) => (
                    <span key={t} className="tag-pill text-xs px-2.5 py-1 rounded-full font-mono"
                      style={{ background: p.color + '15', color: p.color, border: `1px solid ${p.color}30` }}>
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
