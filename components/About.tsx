'use client'
import { useEffect, useRef } from 'react'

const info = [
  { label: 'Location', value: 'Chennai, India', icon: '📍' },
  { label: 'Email', value: 'csviky8@gmail.com', href: 'mailto:csviky8@gmail.com', icon: '✉️' },
  { label: 'Phone', value: '+91 90475 83566', href: 'tel:+919047583566', icon: '📞' },
  { label: 'DOB', value: '19 March 1996', icon: '🗓️' },
  { label: 'Languages', value: 'Tamil, English, Kannada', icon: '🌐' },
  { label: 'LinkedIn', value: 'vignesh-r-4108b7187', href: 'https://linkedin.com/in/vignesh-r-4108b7187', icon: '🔗' },
]

const strengths = ['Communication', 'Team Player', 'Problem Solving', 'Adaptability', 'Work Under Pressure', 'Self-motivated']

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.section-reveal, .reveal-left, .reveal-right').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={ref} className="py-28 max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--bg)' }}>
      <div className="section-reveal mb-14">
        <div className="flex items-center gap-4 mb-2">
          <span className="font-mono text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(108,99,255,0.15)', color: 'var(--brand-2)' }}>01</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>About Me</h2>
          <div className="section-line" />
        </div>
        <p className="text-sm ml-10" style={{ color: 'var(--text-muted)' }}>Who I am and what I bring to the table</p>
      </div>

      <div className="grid md:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <div className="reveal-left space-y-5">
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.9' }}>
            I&apos;m a <span style={{ color: 'var(--text)' }} className="font-semibold">Senior PHP Developer</span> with over{' '}
            <span style={{ color: 'var(--brand-2)' }} className="font-semibold">8 years of hands-on experience</span> building robust
            web applications, CRMs, and enterprise-grade systems from the ground up.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.9' }}>
            My primary focus is delivering complete, polished interfaces for both mobile and desktop platforms — with a sharp eye on{' '}
            <span style={{ color: 'var(--text)' }} className="font-medium">performance, scalability, and user experience</span>.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.9' }}>
            Currently at <span style={{ color: 'var(--brand-2)' }} className="font-semibold">Trikon Telesoft Solutions</span> in Chennai,
            leading CRM development and managing the full customer journey.
          </p>

          <div className="pt-4">
            <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>Personal Strengths</p>
            <div className="flex flex-wrap gap-2">
              {strengths.map((s) => (
                <span key={s} className="tag-pill px-3 py-1.5 rounded-full text-xs font-medium glass-card"
                  style={{ color: 'var(--text-muted)', border: '1px solid var(--glass-border)' }}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="reveal-right">
          <div className="rounded-2xl p-6 space-y-1 glass-card">
            {info.map(({ label, value, href, icon }) => (
              <div key={label} className="flex items-center gap-4 py-3 border-b last:border-0"
                style={{ borderColor: 'var(--glass-border)' }}>
                <span className="text-base w-6 text-center flex-shrink-0">{icon}</span>
                <span className="text-xs font-mono w-20 shrink-0" style={{ color: 'var(--text-dim)' }}>{label}</span>
                {href ? (
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:underline truncate"
                    style={{ color: 'var(--brand-2)' }}>
                    {value}
                  </a>
                ) : (
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
