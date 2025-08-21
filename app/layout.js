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
    '/login1',
    '/rankings',
    '/highlights',
    '/max-break',
    '/news',
  ]

  // ตรวจสอบ dynamic route เช่น /admin/users/edit/:id
  const isEditUserPath = pathname.startsWith('/admin/users/edit')

  // ซ่อน navigation ถ้า path อยู่ใน array หรือ dynamic edit
  const shouldHideNavigation =
    hideNavigationPaths.includes(pathname) || isEditUserPath || pathname.startsWith('/racers')

  return (
    <html lang="en">
      <body className={prompt.className}>
        {!shouldHideNavigation && <NavigationWrapper />}
        {children}
      </body>
    </html>
  )
}
