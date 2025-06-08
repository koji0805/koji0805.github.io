import React from 'react';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koji Fujiwara - Engineer Portfolio',
  description: 'Python・JavaScript・Rubyを使用したWebアプリケーション開発を専門とするフリーランスエンジニアのポートフォリオサイト',
  icons: {
    icon: [
      { url: '/portfolio_favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/portfolio_favicon.svg', type: 'image/svg+xml' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/portfolio_favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/portfolio_favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}