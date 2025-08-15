'use client'

import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Prompt } from 'next/font/google'
import NavigationWrapper from './component/NavigationWrapper'
import { usePathname } from 'next/navigation'

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  const pathname = usePathname()

  // กำหนดหน้าที่ไม่ให้แสดง Navigation
  const hideNavigationPaths = [
    '/admin/users',
    '/login',
    '/register',
    '/racers',
    '/racers/legend',
    '/login1',
    '/rankings',
    '/highlights',
  ]

  const showNavigation = !hideNavigationPaths.includes(pathname)

  return (
    <html lang="en">
      <body className={prompt.className}>
        {showNavigation && <NavigationWrapper />}
        {children}
      </body>
    </html>
  )
}
