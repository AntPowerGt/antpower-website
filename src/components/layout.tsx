import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#052612] text-green-50">
      <header className="sticky top-0 z-50 w-full h-16 flex items-center bg-[#0a3d1f] bg-opacity-80 backdrop-blur-md">
        <div className="max-w-[1200px] w-full mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-vdeE7H8FysCEOPgJAPPZpP400vMCrz.png" 
              alt="AntPower Logo" 
              width={120} 
              height={40} 
              className="mr-2" 
            />
          </Link>
          <nav className="hidden sm:flex gap-6">
            {[
              { name: 'Home', href: '/' },
              { name: 'Products', href: '/products' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' },
            ].map((item) => (
              <Link 
                key={item.name} 
                className="text-sm font-medium hover:text-green-300 transition-colors relative group"
                href={item.href}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-300 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1 w-full">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          {children}
        </div>
      </main>
      <footer className="w-full py-6 border-t border-[#1a5f3c] bg-[#0a3d1f] bg-opacity-80 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-vdeE7H8FysCEOPgJAPPZpP400vMCrz.png" 
              alt="AntPower Logo" 
              width={80} 
              height={24} 
            />
            <p className="text-sm text-green-300">© 2024 AntPower. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            {[
              { name: 'Terms of Service', href: '/terms-of-service' },
              { name: 'Privacy Policy', href: '/privacy-policy' },
              { name: 'Cookie Policy', href: '/cookie-policy' }
            ].map((item) => (
              <Link key={item.name} className="text-xs hover:underline underline-offset-4 text-green-200 hover:text-green-100 transition-colors duration-200" href={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  )
}