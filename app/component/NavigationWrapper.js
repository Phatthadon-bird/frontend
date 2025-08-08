'use client'

import { usePathname } from 'next/navigation'
import Navigation from './Navigation'

export default function NavigationWrapper() {
  const pathname = usePathname()

  // กำหนดว่าในหน้าไหนให้ซ่อน Navigation (เช่น /vote)
  const hideNavPaths = ['/vote', '/login']

  // ตรวจสอบว่าหน้า current อยู่ใน hideNavPaths หรือไม่
  const shouldHideNav = hideNavPaths.some(path => pathname.startsWith(path))

  if (shouldHideNav) return null

  return <Navigation />
}
