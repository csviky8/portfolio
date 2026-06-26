export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#" className="font-mono text-sm" style={{ color: 'var(--brand)' }}>
          <span style={{ color: 'var(--text-muted)' }}>&lt;</span>
          VR
          <span style={{ color: 'var(--text-muted)' }}>/&gt;</span>
        </a>
        <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Vignesh R. Designed & built with Next.js + Tailwind CSS
        </p>
        <div className="flex gap-4">
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
        </div>
      </div>
    </footer>
  )
}
