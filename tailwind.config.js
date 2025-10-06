/** @type {import('tailwindcss').Config} */
require('ts-node/register/transpile-only');
const palette = require('./src/themes').palette;

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Inter_400Regular'],
        medium: ['Inter_500Medium'],
        semibold: ['Inter_600SemiBold'],
        bold: ['Inter_700Bold'],
      },
      fontSize: {
        // Display
        'display-xs': [24, { lineHeight: 32, letterSpacing: -0.72 }],
        'display-sm': [30, { lineHeight: 38, letterSpacing: -0.9 }],
        'display-md': [36, { lineHeight: 44, letterSpacing: -1.08 }],
        'display-lg': [48, { lineHeight: 60, letterSpacing: -1.44 }],
        'display-xl': [60, { lineHeight: 72, letterSpacing: -2.4 }],
        'display-2xl': [72, { lineHeight: 90, letterSpacing: -2.88 }],

        // Text
        'text-xs': [12, { lineHeight: 18, letterSpacing: -0.36 }],
        'text-sm': [14, { lineHeight: 20, letterSpacing: -0.42 }],
        'text-md': [16, { lineHeight: 24, letterSpacing: -0.48 }],
        'text-lg': [18, { lineHeight: 28, letterSpacing: -0.54 }],
        'text-xl': [20, { lineHeight: 30, letterSpacing: -0.6 }],
      },
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        success: 'rgb(var(--color-success) / <alpha-value>)',
        warning: 'rgb(var(--color-warning) / <alpha-value>)',
        error: 'rgb(var(--color-error) / <alpha-value>)',
        // Merge full palette (e.g., text-blue-500, bg-grayLight-200)
        ...palette,
      },
    },
  },
  plugins: [],
};
