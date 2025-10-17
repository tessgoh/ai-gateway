import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API 관리\u00A0\u00A0|\u00A0\u00A0렛서',
  description: 'AI API 통합관리 서비스, AI 게이트웨이',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
