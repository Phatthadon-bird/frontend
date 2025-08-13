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

  return (
    <html lang="en">
      <body className={prompt.className}>
        {/* แสดง Navigation เฉพาะหน้าที่ไม่ใช่ /admin/users */}
        {pathname !== '/admin/users' && <NavigationWrapper />}
        {children}
      </body>
    </html>
  )
}
