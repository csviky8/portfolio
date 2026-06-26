import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vignesh R | Senior PHP Developer',
  description: 'Senior PHP Developer with 8+ years of experience in Laravel, Vue 3, ReactJS, Flutter and more. Based in Chennai, India.',
  keywords: ['PHP Developer', 'Laravel', 'Vue 3', 'ReactJS', 'Flutter', 'Chennai', 'Full Stack'],
  authors: [{ name: 'Vignesh R' }],
  openGraph: {
    title: 'Vignesh R | Senior PHP Developer',
    description: 'Senior PHP Developer with 8+ years of experience building scalable web applications, CRMs, and enterprise systems.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vignesh R | Senior PHP Developer',
    description: 'Senior PHP Developer with 8+ years of experience in Laravel, Vue 3, ReactJS, Flutter.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="grid-bg">{children}</body>
    </html>
  )
}
