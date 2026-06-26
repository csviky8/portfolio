'use client'
import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md border-b border-[rgba(0,0,0,0.08)] shadow-sm' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-mono text-sm font-medium" style={{ color: 'var(--brand)' }}>
          <span style={{ color: 'var(--text-muted)' }}>&lt;</span>
          VR
          <span style={{ color: 'var(--text-muted)' }}>/&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link text-sm font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:csviky8@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 hover:bg-[rgba(37,99,235,0.06)]"
          style={{ borderColor: 'var(--brand)', color: 'var(--brand)' }}
        >
          Hire Me
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className="block h-0.5 w-6 transition-all duration-200"
            style={{
              background: 'var(--text)',
              transform: open ? 'translateY(8px) rotate(45deg)' : '',
            }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-200"
            style={{ background: 'var(--text)', opacity: open ? 0 : 1 }}
          />
          <span
            className="block h-0.5 w-6 transition-all duration-200"
            style={{
              background: 'var(--text)',
              transform: open ? 'translateY(-8px) rotate(-45deg)' : '',
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t mt-3 py-4 px-6 flex flex-col gap-4"
          style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium"
              style={{ color: 'var(--text-muted)' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:csviky8@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium w-fit border"
            style={{ borderColor: 'var(--brand)', color: 'var(--brand)' }}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
