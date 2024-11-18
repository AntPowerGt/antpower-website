import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/router'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Features', href: '/features' },
    { name: 'Specifications', href: '/specifications' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#052612] to-[#0a3d1f] text-green-50">
      <motion.header 
        className={`sticky top-0 z-50 w-full h-20 flex items-center transition-all duration-300 ${
          isScrolled ? 'bg-[#0a3d1f]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link className="flex items-center justify-center relative z-50" href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-vdeE7H8FysCEOPgJAPPZpP400vMCrz.png" 
                alt="AntPower Logo" 
                width={140} 
                height={45} 
                className="mr-2" 
                priority
              />
            </motion.div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link 
                key={item.name}
                href={item.href}
              >
                <motion.span 
                  className={`text-sm font-medium relative cursor-pointer ${
                    router.pathname === item.href ? 'text-green-300' : 'text-green-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                  {router.pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-300"
                      layoutId="navbar-indicator"
                    />
                  )}
                </motion.span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-green-800/30 rounded-full"
            >
              <Search className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-green-800/30 rounded-full"
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>
            <Link href="/quote-request">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-400 text-green-900 px-6 py-2 rounded-full font-medium text-sm transition-colors"
              >
                Request Quote
              </motion.button>
            </Link>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 hover:bg-green-800/30 rounded-full"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-0 bg-[#052612]/95 backdrop-blur-lg lg:hidden"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navigationItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <motion.span
                      className={`text-xl font-medium ${
                        router.pathname === item.href ? 'text-green-300' : 'text-green-50'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ))}
                <Link 
                  href="/quote-request"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-500 hover:bg-green-400 text-green-900 px-8 py-3 rounded-full font-medium text-lg mt-4"
                  >
                    Request Quote
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-[#0a3d1f]/95 backdrop-blur-lg shadow-lg py-4"
            >
              <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-green-800/30 border border-green-700 rounded-lg px-4 py-3 text-green-50 placeholder-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                  autoFocus
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="flex-1 w-full">
        <motion.div 
          className="max-w-[1400px] mx-auto px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="w-full py-12 border-t border-[#1a5f3c] bg-[#0a3d1f]/95 backdrop-blur-lg">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7-vdeE7H8FysCEOPgJAPPZpP400vMCrz.png" 
                alt="AntPower Logo" 
                width={120} 
                height={40} 
              />
              <p className="text-sm text-green-300">Powering the future with innovative charging solutions.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-green-300 hover:text-green-100 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Terms of Service', href: '/terms-of-service' },
                  { name: 'Privacy Policy', href: '/privacy-policy' },
                  { name: 'Cookie Policy', href: '/cookie-policy' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-green-300 hover:text-green-100 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-green-300">info@antpower.com</li>
                <li className="text-sm text-green-300">+46-793391988 </li>
                <li className="text-sm text-green-300">Kronborgsgränd 19,<br />164 46, Kista,  Sweden</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#1a5f3c] flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-green-300"> 2024 AntPower. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <Link href="#" className="text-green-300 hover:text-green-100">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  LinkedIn
                </motion.div>
              </Link>
              <Link href="#" className="text-green-300 hover:text-green-100">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  Twitter
                </motion.div>
              </Link>
              <Link href="#" className="text-green-300 hover:text-green-100">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  Facebook
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}