'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    router.push('/')
  }

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        ClassManager
      </Link>

      <div className="space-x-4">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        {isLoggedIn && (
          <>
            <Link href="/RegisterClass" className="hover:text-gray-300">Register Class</Link>
            <Link href="/TodayClasses" className="hover:text-gray-300">Today's Classes</Link>
            <Link href="/Dashboard" className="hover:text-gray-300">Dashboard</Link>
            <button onClick={handleLogout} className="ml-4 hover:text-red-400">Logout</button>
          </>
        )}
        {!isLoggedIn && (
          <Link href="/Login" className="hover:text-green-400">Login</Link>
        )}
      </div>
    </nav>
  )
}
