'use client'
import { useEffect, useRef, useState } from 'react'

const contactLinks = [
  {
    label: 'Email', value: 'csviky8@gmail.com', href: 'mailto:csviky8@gmail.com', color: '#6c63ff',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>,
  },
  {
    label: 'Phone', value: '+91 90475 83566', href: 'tel:+919047583566', color: '#34d399',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 18z"/></svg>,
  },
  {
    label: 'LinkedIn', value: 'vignesh-r-4108b7187', href: 'https://linkedin.com/in/vignesh-r-4108b7187', color: '#38bdf8',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
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
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Hi Vignesh,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
    window.open(`mailto:csviky8@gmail.com?subject=${subject}&body=${body}`)
    setTimeout(() => setStatus('sent'), 800)
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid var(--glass-border)',
    color: 'var(--text)',
    borderRadius: '12px',
  }

  return (
    <section id="contact" ref={ref} className="py-28" style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--bg2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal mb-14">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-mono text-xs px-2 py-1 rounded-md" style={{ background: 'rgba(108,99,255,0.15)', color: 'var(--brand-2)' }}>06</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>Get In Touch</h2>
            <div className="section-line" />
          </div>
          <p className="text-sm ml-10 max-w-xl" style={{ color: 'var(--text-muted)' }}>
            Open to new opportunities, freelance projects, or just a good conversation about tech.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="section-reveal space-y-4">
            {contactLinks.map((c) => (
              <a key={c.label} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl glow-card glass-card group"
                style={{ borderRadius: '16px' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: c.color + '20', color: c.color }}>
                  {c.icon}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium" style={{ color: 'var(--text-dim)' }}>{c.label}</p>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>{c.value}</p>
                </div>
                <svg className="opacity-0 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: c.color }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}

            <div className="mt-2 p-5 rounded-2xl glass-card" style={{ border: '1px solid rgba(108,99,255,0.2)' }}>
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--brand-2)' }}>📍 Chennai, India</p>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Available for remote and on-site opportunities. Open to relocation for the right role.
              </p>
            </div>
          </div>

          <div className="section-reveal">
            <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-2xl glass-card" style={{ border: '1px solid var(--glass-border)' }}>
              {[
                { label: 'Your Name', key: 'name', type: 'text', placeholder: 'John Doe' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'john@example.com' },
              ].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-xs mb-2 font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>{label}</label>
                  <input type={type} required value={(form as any)[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[#6c63ff]/30"
                    style={inputStyle}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs mb-2 font-semibold uppercase tracking-wider" style={{ color: 'var(--text-dim)' }}>Message</label>
                <textarea required rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 text-sm outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-[#6c63ff]/30"
                  style={inputStyle}
                />
              </div>
              <button type="submit" disabled={status !== 'idle'}
                className="btn-primary w-full py-3.5 rounded-2xl font-semibold text-sm disabled:opacity-50 flex items-center justify-center gap-2">
                {status === 'idle' && <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m22 2-7 20-4-9-9-4 20-7z"/></svg>Send Message</>}
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
