/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // 例: プライマリカラー
        secondary: '#fbbf24', // 例: セカンダリカラー
      },
      spacing: {
        '128': '32rem', // 例: カスタムスペーシング
      },
    },
  },
  plugins: [],
}