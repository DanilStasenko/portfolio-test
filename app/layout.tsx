import { ReduxProvider } from '@/redux/provider'
import './globals.scss'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WBS',
  robots: {
    index: false,
    follow: false
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
				<main className='container'>
          <ReduxProvider>{children}</ReduxProvider>
				</main>	
			</body>
    </html>
  )
}
