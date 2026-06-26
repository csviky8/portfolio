'use client'
import { useEffect, useRef, useState } from 'react'

const contactLinks = [
  {
    label: 'Email',
    value: 'csviky8@gmail.com',
    href: 'mailto:csviky8@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 7L2 7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 90475 83566',
    href: 'tel:+919047583566',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'vignesh-r-4108b7187',
    href: 'https://linkedin.com/in/vignesh-r-4108b7187',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Mailto fallback
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Hi Vignesh,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.open(`mailto:csviky8@gmail.com?subject=${subject}&body=${body}`)
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24"
      style={{ background: 'var(--bg2)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-sm" style={{ color: 'var(--brand)' }}>06.</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Get In Touch</h2>
            <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
          </div>
          <p className="text-sm max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Open to new opportunities, freelance projects, or just a good conversation about tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="section-reveal space-y-4">
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border card-hover group"
                style={{ borderColor: 'var(--border)', background: 'var(--bg3)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                  style={{ background: 'rgba(22,181,112,0.1)', color: 'var(--brand)' }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{c.value}</p>
                </div>
              </a>
            ))}

            <div
              className="mt-6 p-5 rounded-xl border"
              style={{ borderColor: 'var(--border)', background: 'rgba(22,181,112,0.04)' }}
            >
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--brand)' }}>
                📍 Chennai, India
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Available for remote and on-site opportunities. Open to relocation for the right role.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="section-reveal">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 rounded-2xl border"
              style={{ borderColor: 'var(--border)', background: 'var(--bg3)' }}
            >
              <div>
                <label className="block text-xs mb-1.5 font-medium" style={{ color: 'var(--text-muted)' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none border focus:border-[var(--brand)] transition-colors"
                  style={{
                    background: 'var(--bg2)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)',
                  }}
                />
              </div>
              <div>
                <label className="block text-xs mb-1.5 font-medium" style={{ color: 'var(--text-muted)' }}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none border focus:border-[var(--brand)] transition-colors"
                  style={{
                    background: 'var(--bg2)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)',
                  }}
                />
              </div>
              <div>
                <label className="block text-xs mb-1.5 font-medium" style={{ color: 'var(--text-muted)' }}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-2.5 rounded-lg text-sm outline-none border focus:border-[var(--brand)] transition-colors resize-none"
                  style={{
                    background: 'var(--bg2)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)',
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-60"
                style={{ background: 'var(--brand)', color: '#050d0a' }}
              >
                {status === 'idle' && 'Send Message'}
                {status === 'sending' && 'Opening mail…'}
                {status === 'sent' && '✓ Message sent!'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
