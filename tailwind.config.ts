import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sora)', 'Sora', 'system-ui', 'sans-serif'],
        mono: ['var(--font-fira)', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: '#6c63ff',
        'brand-2': '#a78bfa',
      },
    },
  },
  plugins: [],
}
export default config
