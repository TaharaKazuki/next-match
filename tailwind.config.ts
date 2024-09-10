import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dark-gradient':
          'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
