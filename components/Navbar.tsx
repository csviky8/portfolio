'use client'
import { useState, useEffect } from 'react'
import { useTheme } from './ThemeProvider'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={scrolled ? {
        background: 'rgba(8, 11, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(108, 99, 255, 0.1)',
      } : {}}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-sm font-semibold flex items-center gap-1.5">
          <span
            className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #a78bfa)', color: '#fff' }}
          >
            V
          </span>
          <span style={{ color: 'var(--text-muted)' }}>ignesh</span>
          <span style={{ color: 'var(--brand-2)' }}>R</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link font-medium">{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          className="hidden md:flex w-9 h-9 rounded-xl items-center justify-center transition-all duration-200 btn-ghost"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        {/* CTA */}
        <a
          href="mailto:csviky8@gmail.com"
          className="btn-ghost hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
        >
          <span>Hire Me</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        {/* Mobile burger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-5 space-y-1.5">
            <span className="block h-0.5 rounded transition-all duration-300" style={{
              background: 'var(--text-muted)',
              transform: open ? 'translateY(8px) rotate(45deg)' : '',
            }} />
            <span className="block h-0.5 rounded transition-all duration-300" style={{
              background: 'var(--text-muted)',
              opacity: open ? 0 : 1,
            }} />
            <span className="block h-0.5 rounded transition-all duration-300" style={{
              background: 'var(--text-muted)',
              transform: open ? 'translateY(-8px) rotate(-45deg)' : '',
            }} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl p-5 space-y-4 glass-card">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm font-medium nav-link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="mailto:csviky8@gmail.com" className="btn-primary inline-flex px-4 py-2 rounded-xl text-sm font-medium">
            Hire Me
          </a>
          <button onClick={toggle} className="btn-ghost flex items-center gap-2 px-4 py-2 rounded-xl text-sm w-fit">
            {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      )}
    </nav>
  )
}
