import type { Config } from 'tailwindcss';

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
        'dark-gray': '#222',
        'medium-gray': '#7E7E7E',
        'light-gray': '#D8D8D8',
        primary: '#0F362E',
        secondary: '#07F5C5',
        'earth-atlas': 'var(--earth-atlas)',
        'fire-weather': 'var(--fire-weather)',
        'reforestation-app': 'var(--reforestation-app)',
        'trade-flow': 'var(--trade-flow)',
        'earth-atlas-dark': 'var(--earth-atlas-dark)',
        'fire-weather-dark': 'var(--fire-weather-dark)',
        'reforestation-app-dark': 'var(--reforestation-app-dark)',
        'trade-flow-dark': 'var(--trade-flow-dark)',
      },
      fontFamily: {
        open: ['var(--font-open)'],
        cardo: ['var(--font-cardo)'],
      },
      fontSize: {
        '3.5xl': ['32px', '48px'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'intro-bg': 'url(/images/intro-bg.png)',
        'blog-bg': 'url(/images/sections-bg.png)',
        'green-gradient':
          'radial-gradient(50% 70% at 0% 100%, rgba(13, 85, 71, 1), rgba(var(--primary-rgb), 1))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
