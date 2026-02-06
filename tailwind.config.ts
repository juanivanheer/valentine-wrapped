import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFB6C1',
          lavender: '#E6E6FA',
          peach: '#FFDAB9',
          mint: '#98FF98',
          blue: '#87CEEB',
          coral: '#F7CAC9',
          yellow: '#FFFFCC',
        },
      },
    },
  },
  plugins: [],
}
export default config
