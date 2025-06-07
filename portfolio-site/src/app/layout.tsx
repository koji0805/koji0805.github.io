import React from 'react';
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ポートフォリオサイト - フリーランスエンジニア',
  description: 'フリーランスエンジニアの実績を魅力的に伝える、モダンなポートフォリオサイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}