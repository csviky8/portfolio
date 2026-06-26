'use client'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer className="py-10 border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-mono text-sm font-medium" style={{ color: 'var(--brand)' }}>
            <span style={{ color: 'var(--text-muted)' }}>&lt;</span>
            VR
            <span style={{ color: 'var(--text-muted)' }}>/&gt;</span>
          </a>

          <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Vignesh R &mdash; Designed & built with Next.js + Tailwind CSS
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:csviky8@gmail.com"
              className="text-xs transition-colors hover:text-[var(--brand)]"
              style={{ color: 'var(--text-muted)' }}
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/vignesh-r-4108b7187"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-[var(--brand)]"
              style={{ color: 'var(--text-muted)' }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/csviky8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-[var(--brand)]"
              style={{ color: 'var(--text-muted)' }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        style={{
          background: 'var(--brand)',
          color: '#fff',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'auto' : 'none',
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
        }}
        aria-label="Back to top"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </footer>
  )
}
