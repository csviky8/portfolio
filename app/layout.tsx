import type { Metadata } from 'next'
import { Sora, Fira_Code } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { ThemeProvider } from '@/components/ThemeProvider'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira', display: 'swap' })

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
    <html lang="en" className={`scroll-smooth ${sora.variable} ${firaCode.variable}`}>
      <body className="dot-bg">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3DGMNR215E" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3DGMNR215E');
          `}
        </Script>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
