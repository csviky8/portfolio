'use client'
import { useEffect, useRef } from 'react'

const info = [
  { label: 'Full Name', value: 'Vignesh R' },
  { label: 'Email', value: 'csviky8@gmail.com', href: 'mailto:csviky8@gmail.com' },
  { label: 'Phone', value: '+91 90475 83566', href: 'tel:+919047583566' },
  { label: 'Location', value: 'Chennai, India' },
  { label: 'Date of Birth', value: '19 March 1996' },
  { label: 'Languages', value: 'Tamil, English, Kannada' },
  { label: 'LinkedIn', value: 'vignesh-r-4108b7187', href: 'https://linkedin.com/in/vignesh-r-4108b7187' },
]

export default function About() {
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
    <section id="about" ref={ref} className="py-24 max-w-6xl mx-auto px-6">
      <div className="section-reveal">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-sm" style={{ color: 'var(--brand)' }}>01.</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>About Me</h2>
          <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
        </div>
        <p className="text-sm mb-12" style={{ color: 'var(--text-muted)' }}>Who I am and what I bring to the table</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left - bio */}
        <div className="section-reveal space-y-5">
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            I&apos;m a <span style={{ color: 'var(--text)' }}>Senior PHP Developer</span> with over{' '}
            <span style={{ color: 'var(--brand)' }}>8 years of hands-on experience</span> building robust
            web applications, CRMs, and enterprise-grade systems from the ground up.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            My primary focus is delivering complete, polished user interfaces for both mobile and desktop
            platforms — with a sharp eye on{' '}
            <span style={{ color: 'var(--text)' }}>performance, scalability, and user experience</span>.
            I&apos;ve worked across the full stack using Laravel, Vue 3, ReactJS, Flutter, and more.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Currently at <span style={{ color: 'var(--brand)' }}>Trikon Telesoft Solutions</span> in Chennai,
            where I lead CRM development and manage the full customer journey — from lead generation to client
            onboarding and support.
          </p>

          {/* Personal skills */}
          <div className="pt-4">
            <h3 className="text-sm font-semibold mb-3" style={{ color: 'var(--text)' }}>Personal Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {['Communication', 'Team Player', 'Problem Solving', 'Adaptability', 'Work Under Pressure', 'Self-motivated'].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs border"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--bg3)' }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right - info card */}
        <div className="section-reveal">
          <div
            className="rounded-2xl border p-6 space-y-4"
            style={{ borderColor: 'var(--border)', background: 'var(--bg2)' }}
          >
            {info.map(({ label, value, href }) => (
              <div key={label} className="flex items-start gap-4 py-2 border-b last:border-0" style={{ borderColor: 'var(--border)' }}>
                <span className="text-xs font-mono w-28 shrink-0 pt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {label}
                </span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-sm font-medium transition-colors hover:underline"
                    style={{ color: 'var(--brand)' }}
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
