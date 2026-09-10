/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#071C2F',
        surface: '#F8F7F4',
        ink: '#0F2747',
        muted: '#6B7A90',
        line: '#E5E7EB',
        primary: '#2563EB',
        'primary-hover': '#1D4ED8',
        focus: '#93C5FD',
        meta: '#3B82F6',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { shell: '1200px' },
      letterSpacing: { eyebrow: '0.22em', logo: '0.18em' },
    },
  },
  plugins: [],
}
