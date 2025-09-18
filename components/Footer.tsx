"use client"

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaCode, FaRocket } from 'react-icons/fa'
import { Mail, Phone, MapPin, ArrowUp, Sparkles, Coffee, Zap } from 'lucide-react'
import { useRef } from 'react'

// TypeScript interfaces
interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
  color: string
  bgColor: string
  delay: number
}

interface SocialButtonProps {
  social: SocialLink
  Icon: React.ComponentType<{ className?: string }>
  index: number
  isInView: boolean
}

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2025)
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.2 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: 'https://github.com/yourusername', 
      label: 'GitHub',
      color: 'hover:text-gray-400',
      bgColor: 'hover:bg-gray-900',
      delay: 0.1
    },
    { 
      icon: FaLinkedin, 
      href: 'https://linkedin.com/in/yourusername', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-600',
      delay: 0.2
    },
    { 
      icon: FaTwitter, 
      href: 'https://twitter.com/yourusername', 
      label: 'Twitter',
      color: 'hover:text-cyan-400',
      bgColor: 'hover:bg-cyan-500',
      delay: 0.3
    },
    { 
      icon: FaInstagram, 
      href: 'https://instagram.com/yourusername', 
      label: 'Instagram',
      color: 'hover:text-pink-400',
      bgColor: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
      delay: 0.4
    },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'john.doe@example.com', 
      href: 'mailto:john.doe@example.com',
      color: 'text-blue-400'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+1 (555) 123-4567', 
      href: 'tel:+15551234567',
      color: 'text-green-400'
    },
    { 
      icon: MapPin, 
      label: 'Location', 
      value: 'San Francisco, CA', 
      href: '#',
      color: 'text-purple-400'
    },
  ]

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/20 border-t border-border relative overflow-hidden" ref={footerRef}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh Background */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
              "radial-gradient(ellipse at bottom, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
              "radial-gradient(ellipse at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
              "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />

        {/* Floating Elements */}
        {Array.from({ length: 15 }).map((_, i) => {
          // Generate stable values based on index
          const xMove1 = (i * 23 % 200) - 100
          const xMove2 = (i * 37 % 200) - 100
          const yMove1 = (i * 19 % 150) - 75
          const yMove2 = (i * 31 % 150) - 75
          const duration = 10 + (i * 7 % 10)
          const delay = (i * 11 % 5)
          const leftPos = (i * 13 % 100)
          const topPos = (i * 17 % 100)
          
          return (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                x: [0, xMove1, xMove2, 0],
                y: [0, yMove1, yMove2, 0],
                rotate: [0, 360],
                scale: [0.5, 1, 0.5],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
              }}
              style={{
                left: `${leftPos}%`,
                top: `${topPos}%`,
              }}
            >
            {i % 4 === 0 ? <FaCode className="w-4 h-4 text-purple-400/30" /> :
             i % 4 === 1 ? <FaRocket className="w-4 h-4 text-pink-400/30" /> :
             i % 4 === 2 ? <Coffee className="w-4 h-4 text-orange-400/30" /> :
             <Zap className="w-4 h-4 text-cyan-400/30" />}
            </motion.div>
          )
        })}

        {/* Interactive Mouse Trails */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg"
            animate={{
              x: mousePosition.x - 12,
              y: mousePosition.y - 12,
            }}
            transition={{
              type: "spring",
              damping: 30 + i * 15,
              stiffness: 200 - i * 30
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring" }}
          className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section with Enhanced Animations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotate: 2,
                textShadow: "0 0 20px rgba(99,102,241,0.8)"
              }}
              className="text-3xl font-bold cursor-pointer group"
              onClick={scrollToTop}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%] group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-500"
              >
                John Doe
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-muted-foreground leading-relaxed max-w-md text-lg"
            >
              Full Stack Developer passionate about creating beautiful, functional, 
              and user-friendly applications using modern technologies and innovative solutions.
            </motion.p>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <SocialButton
                    key={social.label}
                    social={social}
                    Icon={Icon}
                    index={index}
                    isInView={isInView}
                  />
                )
              })}
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="pt-4"
            >
              <h4 className="font-semibold text-lg mb-3 text-foreground">Stay Updated</h4>
              <div className="flex gap-3">
                <motion.input
                  whileFocus={{ scale: 1.02, borderColor: "rgba(99, 102, 241, 1)" }}
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl font-semibold text-foreground"
            >
              Quick Links
            </motion.h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    x: 10, 
                    color: "rgb(99, 102, 241)",
                    scale: 1.05
                  }}
                  className="block text-left text-muted-foreground hover:text-primary transition-all duration-300 text-lg group"
                >
                  <span className="relative">
                    {link.name}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
                    />
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl font-semibold text-foreground"
            >
              Get In Touch
            </motion.h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="group"
                  >
                    {info.href !== '#' ? (
                      <motion.a
                        href={info.href}
                        whileHover={{ x: 5, scale: 1.02 }}
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-all duration-300"
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 360,
                            boxShadow: "0 0 15px rgba(99,102,241,0.3)"
                          }}
                          transition={{ duration: 0.6 }}
                          className={`p-2 rounded-lg bg-secondary/50 backdrop-blur-sm ${info.color} group-hover:bg-primary group-hover:text-primary-foreground`}
                        >
                          <Icon className="h-4 w-4" />
                        </motion.div>
                        <span className="text-lg">{info.value}</span>
                      </motion.a>
                    ) : (
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 text-muted-foreground"
                      >
                        <div className={`p-2 rounded-lg bg-secondary/50 backdrop-blur-sm ${info.color}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-lg">{info.value}</span>
                      </motion.div>
                    )}
                  </motion.div>
                )
              })}
            </div>

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('/resume.pdf', '_blank')}
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mr-2"
                >
                  📄
                </motion.span>
                Download Resume
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Sparkles className="h-4 w-4" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="border-t border-border/50 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-muted-foreground text-lg text-center md:text-left"
            >
              © {currentYear}{' '}
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_100%] font-semibold"
              >
                John Doe
              </motion.span>
              . All rights reserved.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 text-muted-foreground text-lg"
            >
              <span>Made with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>and lots of</span>
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 0.5
                }}
              >
                <Coffee className="text-orange-500 h-5 w-5" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Enhanced Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.4, type: "spring" }}
        whileHover={{ 
          scale: 1.2, 
          y: -5,
          boxShadow: "0 20px 40px rgba(99,102,241,0.3)"
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 z-50 group"
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowUp className="w-6 h-6" />
        </motion.div>
        
        {/* Ripple Effect */}
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          whileHover={{ scale: 3, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 rounded-full border-2 border-white"
        />
      </motion.button>

      {/* Scroll Progress Indicator */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 origin-left"
      />
    </footer>
  )
}

// Enhanced Social Button Component
const SocialButton = ({ social, Icon, index, isInView }: SocialButtonProps) => {
  return (
    <motion.a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: social.delay,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.3, 
        y: -8,
        rotate: 360,
        boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
      }}
      whileTap={{ scale: 0.9 }}
      className={`relative p-4 rounded-xl bg-secondary/50 backdrop-blur-sm border border-primary/20 text-muted-foreground transition-all duration-300 shadow-lg hover:shadow-2xl group overflow-hidden ${social.color}`}
    >
      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 2 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl"
      />

      {/* Icon */}
      <motion.div
        animate={{ 
          rotate: [0, 5, -5, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          delay: index * 0.5
        }}
        className="relative z-10"
      >
        <Icon className="h-6 w-6" />
      </motion.div>

      {/* Sparkle Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ opacity: 1, scale: 1 }}
        className="absolute top-1 right-1 z-20"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-3 w-3 text-primary" />
        </motion.div>
      </motion.div>

      {/* Ripple Effect */}
      <motion.div
        initial={{ scale: 0, opacity: 0.8 }}
        whileHover={{ scale: 3, opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 rounded-xl border-2 border-primary/30"
      />
    </motion.a>
  )
}

export default Footer;
