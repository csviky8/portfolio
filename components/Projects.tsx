'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    title: 'Trikon (Metaclick & Metaweb) CRM',
    duration: 'Jan 2024 – Present',
    tech: 'Laravel 9',
    description:
      'Enterprise CRM managing the complete customer lifecycle — from lead generation and quotations to contract handling, client onboarding, and support ticket management.',
    highlights: [
      'Automated manual sales & support workflows',
      'Real-time lead tracking and follow-up system',
      'Contract management with digital approvals',
      'Multi-client support (Metaclick + Metaweb)',
    ],
    color: '#2563eb',
    icon: '🏢',
  },
  {
    title: 'OCR Compact Car Rental',
    duration: 'Feb 2023 – Dec 2023',
    tech: 'Core PHP · API Integration',
    description:
      'Full-featured car rental booking platform for Queensland, Australia with real-time availability, dynamic pricing, and integrated payment gateways.',
    highlights: [
      'Real-time vehicle availability engine',
      'Dynamic pricing & online check-in',
      'Secure payment gateway integration',
      'Responsive across all devices',
    ],
    color: '#0ea5e9',
    icon: '🚗',
  },
  {
    title: 'Modo ERP Solution',
    duration: 'Jul 2021 – Jul 2022',
    tech: 'Laravel 8 · Vue 3',
    description:
      'Robust ERP system built for the mining industry — preventing theft, pilferage, and inventory loss with real-time business tracking and departmental workflow management.',
    highlights: [
      'Anti-theft & inventory loss prevention',
      'Real-time operational tracking dashboard',
      'Departmental workflow automation',
      'Machinery & inventory optimization',
    ],
    color: '#f59e0b',
    icon: '⛏️',
  },
  {
    title: 'Geely Publish CMS',
    duration: 'Mar 2019 – Oct 2019',
    tech: 'AngularJS · PHP · MySQL',
    description:
      'Dynamic CMS for managing website content including articles, news, and galleries — with UI/UX design, client-side validations, and HTML email templates.',
    highlights: [
      'Multi-module content management',
      'Client-side validations & UX design',
      'Promotional HTML email templates',
      'Internal technical support system',
    ],
    color: '#8b5cf6',
    icon: '📰',
  },
  {
    title: 'Tala Transport CMS',
    duration: 'Oct 2018 – Mar 2019',
    tech: 'AngularJS · PHP · MySQL',
    description:
      'Responsive content management system for a transport company — handling dynamic web content across multiple modules with cross-browser compatibility.',
    highlights: [
      'Responsive multi-module CMS',
      'Cross-browser compatibility',
      'Client requirement analysis',
      'Frontend best practices coaching',
    ],
    color: '#ec4899',
    icon: '🚌',
  },
]

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-24" style={{ background: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-sm" style={{ color: 'var(--brand)' }}>04.</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Projects</h2>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Notable systems I&apos;ve built</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="section-reveal card-hover rounded-2xl border overflow-hidden flex flex-col"
              style={{
                borderColor: 'var(--border)',
                background: 'var(--bg3)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Top accent */}
              <div className="h-1" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{p.icon}</span>
                    <div>
                      <h3 className="font-semibold text-sm md:text-base" style={{ color: 'var(--text)' }}>
                        {p.title}
                      </h3>
                      <p className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>
                        {p.duration}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {p.description}
                </p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: p.color, flexShrink: 0, marginTop: '2px' }}>✓</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                  <span className="text-xs font-mono" style={{ color: p.color }}>
                    {p.tech}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
