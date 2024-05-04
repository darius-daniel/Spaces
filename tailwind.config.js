/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    './resources/**/*.{html,edge,ts,js,tsx,jsx}',
    './inertia/**/*.{html,edge,ts,js,tsx,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: ['daisyui'],
  daisyui: {
    themes: ['light', 'dark'],
  },
};
