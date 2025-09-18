"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { Download, ChevronDown } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // ✅ Updated Social Links
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/pandeyOnGit', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/pandeyonsocial', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaTwitter, href: 'https://twitter.com/_onetruegod', label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: FaInstagram, href: 'https://instagram.com/pandeyScripted', label: 'Instagram', color: 'hover:text-pink-400' },
  ]

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Typing effect for profession text
  const professionText = "Full Stack Developer"
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < professionText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + professionText[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, professionText])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background with Morphing Blobs */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background with Color Shifts */}
        <motion.div 
          animate={{
            background: [
              "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
              "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)",
              "linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)",
              "linear-gradient(45deg, #43e97b 0%, #38f9d7 100%)",
              "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute inset-0 opacity-10"
        />

        {/* Morphing Gradient Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.5],
            rotate: [0, 360],
            x: [0, 50],
            y: [0, -50],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1],
            rotate: [360, 0],
            x: [0, -50],
            y: [0, 50],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />

        {/* Particle Animation following mouse */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            animate={{
              x: mousePosition.x + Math.sin(i * 0.2) * (50 + i * 2),
              y: mousePosition.y + Math.cos(i * 0.2) * (50 + i * 2),
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero Content */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateX: 45 }}
          animate={isLoaded ? { scale: 1, opacity: 1, rotateX: 0 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 15, duration: 1 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          {/* ✅ Your Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6"
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px #667eea, 0 0 40px #667eea",
                  "0 0 20px #f093fb, 0 0 40px #f093fb"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Aditya Pandey
            </motion.span>
          </motion.h1>

          {/* Profession Typing Effect */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-2xl md:text-3xl lg:text-5xl font-semibold text-muted-foreground mb-8"
          >
            <motion.span>{displayedText}</motion.span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="inline-block w-1 h-8 bg-primary ml-1"
            />
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Passionate about creating beautiful, functional, and user-friendly applications
            using modern technologies and best practices.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotateY: -5, rotateX: -5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-2xl hover:shadow-primary/25"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* ✅ Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex justify-center space-x-8 mb-16"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 1.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.3, y: -10, rotate: [0, -10, 10, -10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 rounded-xl bg-secondary/50 backdrop-blur-sm border border-primary/20 text-muted-foreground transition-all duration-300 ${social.color} shadow-lg hover:shadow-2xl`}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" }}
            className="p-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/30 hover:bg-primary group transition-all duration-300"
          >
            <ChevronDown className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
