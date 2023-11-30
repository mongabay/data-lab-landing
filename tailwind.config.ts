import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '0',
      },
      screens: {
        sm: '600px',
        md: '750px',
        lg: '1000px',
        xl: '1062px',
        '2xl': '1062px',
      },
      center: true,
    },
    extend: {
      colors: {
        "dark-gray": "#222",
        "medium-gray": "#7E7E7E",
        "light-gray": "#D8D8D8",
        "primary-green": "#03755E",
        "primary-green-dark": "#015645",
      },
      fontFamily: {
        open: ["var(--font-open)"],
        cardo: ["var(--font-cardo)"],
      },
      fontSize: {
        '3.5xl': ['32px', '48px'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
