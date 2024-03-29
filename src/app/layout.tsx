import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Emmomi HomePage',
  description: 'えもみのいろいろとその他諸々',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
