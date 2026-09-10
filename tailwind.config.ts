import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        navy: 'var(--navy)',
        'navy-light': 'var(--navy-light)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-bright': 'var(--accent-bright)',
        'accent-focus': 'var(--accent-focus)',
        'dark-bg': 'var(--dark-bg)',
        'dark-surface': 'var(--dark-surface)',
        'dark-text': 'var(--dark-text)',
        'dark-muted': 'var(--dark-muted)',
        'dark-border': 'var(--dark-border)',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1240px',
      },
      letterSpacing: {
        eyebrow: '0.18em',
        wordmark: '0.16em',
        studio: '0.42em',
      },
    },
  },
  plugins: [],
}

export default config
