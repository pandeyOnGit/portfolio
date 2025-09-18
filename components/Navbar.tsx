"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Enhanced Animation */}
          <motion.div
            whileHover={{ 
              scale: 1.1, 
              rotate: 5,
              textShadow: "0 0 20px rgba(99,102,241,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            className="text-3xl font-bold cursor-pointer relative"
            onClick={() => handleNavClick('#home')}
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              AP
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <motion.button
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg ${
                    activeSection === item.name.toLowerCase() ? 'text-primary' : ''
                  }`}
                >
                  {item.name}
                  
                  {/* Active section indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={activeSection === item.name.toLowerCase() ? { width: "100%" } : { width: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 rounded-full"
                  />
                  
                  {/* Hover glow effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-cyan-400/20 rounded-lg -z-10 blur-sm"
                  />
                  
                  {/* Sliding underline on hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 origin-left rounded-full"
                    style={{ display: activeSection === item.name.toLowerCase() ? 'none' : 'block' }}
                  />
                </motion.button>
              </motion.div>
            ))}
            
            {/* Enhanced Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="ml-6"
            >
              <motion.button
                onClick={toggleTheme}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 180,
                  boxShadow: "0 0 20px rgba(99,102,241,0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm border border-primary/20 relative overflow-hidden"
              >
                {/* Background glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
                />
                
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.svg
                      key="sun"
                      initial={{ rotate: -90, opacity: 0, scale: 0 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="w-5 h-5 relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      key="moon"
                      initial={{ rotate: 90, opacity: 0, scale: 0 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="w-5 h-5 relative z-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm border border-primary/20"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.svg
                    key="sun-mobile"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="moon-mobile"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm border border-primary/20"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMobileMenuOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border rounded-b-2xl shadow-2xl overflow-hidden"
            >
              <motion.div 
                className="px-4 pt-4 pb-6 space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 10,
                      backgroundColor: "rgba(99, 102, 241, 0.1)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`block w-full text-left px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-primary bg-primary/10 border-l-4 border-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.name}</span>
                      {activeSection === item.name.toLowerCase() && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navbar Background Blur Effect */}
      {isScrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 -z-10"
        />
      )}
    </motion.nav>
  )
}

export default Navbar
