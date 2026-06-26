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
    <>
    <footer className="py-10" style={{ borderTop: '1px solid var(--glass-border)', backgroundColor: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="font-mono text-sm font-semibold flex items-center gap-1.5">
          <span className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #a78bfa)', color: '#fff' }}>V</span>
          <span style={{ color: 'var(--text-muted)' }}>ignesh</span>
          <span style={{ color: 'var(--brand-2)' }}>R</span>
        </a>

        <p className="text-xs text-center" style={{ color: 'var(--text-dim)' }}>
          © {new Date().getFullYear()} Vignesh R — Built with Next.js + Tailwind CSS
        </p>

        <div className="flex items-center gap-5">
          {[
            { href: 'mailto:csviky8@gmail.com', label: 'Email' },
            { href: 'https://linkedin.com/in/vignesh-r-4108b7187', label: 'LinkedIn' },
            { href: 'https://github.com/csviky8', label: 'GitHub' },
          ].map(({ href, label }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-xs font-medium transition-all duration-200 hover:text-[var(--brand-2)]"
              style={{ color: 'var(--text-dim)' }}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>

    {/* Back to top — outside footer to avoid clipping */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        width: '44px',
        height: '44px',
        borderRadius: '14px',
        background: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(108,99,255,0.4)',
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="18 15 12 9 6 15"/>
      </svg>
    </button>
    </>
  )
}
