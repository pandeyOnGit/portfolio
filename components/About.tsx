"use client"

import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Download, Sparkles, Heart, Code, Coffee, Zap } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

// TypeScript interface for HighlightCard props
interface HighlightCardProps {
  highlight: {
    number: string
    label: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    color: string
    delay: number
  }
  index: number
  IconComponent: React.ComponentType<{ className?: string }>
  isInView: boolean
}

const About = () => {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false) // Add client-side check

  useEffect(() => {
    setIsClient(true) // Set to true only on client
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Predefined positions to avoid hydration mismatch
  const particlePositions = [
    { left: '10%', top: '20%' },
    { left: '25%', top: '60%' },
    { left: '70%', top: '30%' },
    { left: '85%', top: '80%' },
    { left: '40%', top: '15%' },
    { left: '60%', top: '70%' },
    { left: '15%', top: '85%' },
    { left: '90%', top: '45%' },
    { left: '30%', top: '75%' },
    { left: '75%', top: '25%' },
    { left: '20%', top: '50%' },
    { left: '50%', top: '10%' },
    { left: '80%', top: '65%' },
    { left: '35%', top: '90%' },
    { left: '65%', top: '35%' },
    { left: '5%', top: '75%' },
    { left: '95%', top: '15%' },
    { left: '45%', top: '85%' },
    { left: '55%', top: '40%' },
    { left: '25%', top: '95%' }
  ]

  const highlights = [
    {
      number: '3+',
      label: 'Years Experience',
      description: 'Building web applications',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      delay: 0.1
    },
    {
      number: '50+',
      label: 'Projects Completed',
      description: 'Successful deliveries',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      delay: 0.2
    },
    {
      number: '15+',
      label: 'Technologies',
      description: 'Mastered and counting',
      icon: Heart,
      color: 'from-green-500 to-teal-500',
      delay: 0.3
    },
    {
      number: '100%',
      label: 'Client Satisfaction',
      description: 'Happy clients worldwide',
      icon: Coffee,
      color: 'from-orange-500 to-red-500',
      delay: 0.4
    }
  ]

  const personalTraits = [
    "Creative Problem Solver",
    "Detail-Oriented Developer", 
    "Continuous Learner",
    "Team Collaborator",
    "Innovation Enthusiast"
  ]

  return (
    <section id="about" className="py-20 bg-secondary/10 relative overflow-hidden" ref={containerRef}>
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Meshes */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at top right, rgba(168, 85, 247, 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at bottom left, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at bottom right, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />

        {/* Fixed Position Floating Particles - Only render on client */}
        {isClient && particlePositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{ left: position.left, top: position.top }}
            animate={{
              scale: [0.5, 1.2, 0.8, 1],
              opacity: [0.3, 0.8, 0.4, 0.6]
            }}
            transition={{
              duration: 4 + (i % 3),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Interactive Mouse Trails - Only render on client */}
        {isClient && Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-sm"
            animate={{
              x: mousePosition.x - 8,
              y: mousePosition.y - 8,
            }}
            transition={{
              type: "spring",
              damping: 30 + i * 10,
              stiffness: 200 - i * 20
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            About{' '}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"],
                textShadow: [
                  "0 0 0 transparent",
                  "0 0 30px rgba(99,102,241,0.5)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Me
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Get to know more about my background, passion, and journey in technology
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Enhanced Profile Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={isImageInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Animated Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, repeatType: "reverse" }
                }}
                className="absolute inset-0 rounded-full"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 p-1">
                  <div className="w-full h-full rounded-full bg-background"></div>
                </div>
              </motion.div>

              {/* Floating Icons around Image */}
              {[
                { icon: Code, position: "top-4 right-4", color: "text-purple-400", delay: 0.5 },
                { icon: Heart, position: "bottom-4 left-4", color: "text-pink-400", delay: 0.7 },
                { icon: Zap, position: "top-4 left-4", color: "text-blue-400", delay: 0.9 },
                { icon: Coffee, position: "bottom-4 right-4", color: "text-orange-400", delay: 1.1 }
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isImageInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: item.delay,
                      type: "spring",
                      stiffness: 200
                    }}
                    className={`absolute ${item.position} z-20`}
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -10],
                        rotate: [0, 5]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: index * 0.5
                      }}
                      className="p-3 bg-background/80 backdrop-blur-sm border border-primary/20 rounded-full shadow-lg"
                    >
                      <IconComponent className={`h-5 w-5 ${item.color}`} />
                    </motion.div>
                  </motion.div>
                )
              })}

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 10 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 rounded-full overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/profile.png"
                  alt="John Doe"
                  width={500}
                  height={500}
                  className="relative z-10 rounded-full object-cover w-full h-full"
                />
                
                {/* Overlay with Gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-pink-500/20 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced About Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="space-y-8"
          >
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-semibold"
            >
              I&apos;m a passionate{' '}
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%"]
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                Full Stack Developer
              </motion.span>
            </motion.h3>
            
            {/* Animated Description Paragraphs */}
            <div className="space-y-6">
              {[
                "With over 3 years of experience in web development, I specialize in creating modern, responsive, and user-friendly applications. I love turning complex problems into simple, beautiful designs.",
                "My expertise spans across frontend technologies like React, Next.js, and TypeScript, as well as backend technologies including Node.js, Python, and various databases. I'm constantly learning and adapting to new technologies.",
                "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities. I believe in continuous growth and sharing knowledge with the community."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
                  className="text-lg text-muted-foreground leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Personal Traits with Staggered Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-lg">What defines me:</h4>
              <div className="flex flex-wrap gap-3">
                {personalTraits.map((trait, index) => (
                  <motion.span
                    key={trait}
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                    }}
                    className="px-4 py-2 text-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 rounded-full border border-purple-500/20 backdrop-blur-sm cursor-default"
                  >
                    {trait}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="mr-3"
                  >
                    <Download className="h-5 w-5" />
                  </motion.div>
                  Download Resume
                  <motion.div
                    animate={{ x: [0, 5] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Sparkles className="h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, type: "spring" }}
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-2xl md:text-3xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              By the Numbers
            </span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <HighlightCard
                  key={highlight.label}
                  highlight={highlight}
                  index={index}
                  IconComponent={IconComponent}
                  isInView={isInView}
                />
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Highlight Card Component
const HighlightCard = ({ highlight, index, IconComponent, isInView }: HighlightCardProps) => {
  const [count, setCount] = useState(0)
  const targetNumber = parseInt(highlight.number.replace(/\D/g, '')) || 100

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 2000
      const increment = targetNumber / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= targetNumber) {
          setCount(targetNumber)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, targetNumber])

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: 1.2 + highlight.delay,
        type: "spring",
        stiffness: 150
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        rotateY: 5,
        rotateX: 5
      }}
      className="group text-center"
    >
      <Card className="h-full border-2 border-transparent hover:border-primary transition-all duration-500 backdrop-blur-sm bg-background/90 shadow-xl hover:shadow-2xl overflow-hidden">
        {/* Gradient Header */}
        <div className={`h-2 bg-gradient-to-r ${highlight.color}`} />
        
        <CardContent className="p-6 space-y-4 relative">
          {/* Background Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileHover={{ opacity: 1, scale: 2 }}
            transition={{ duration: 0.3 }}
            className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-5 rounded-lg`}
          />

          {/* Animated Icon */}
          <motion.div
            animate={{ 
              rotate: [0, 5],
              scale: [1, 1.1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.5
            }}
            className="relative z-10 flex justify-center"
          >
            <div className={`p-4 bg-gradient-to-r ${highlight.color} rounded-full text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
              <IconComponent className="h-8 w-8" />
            </div>
          </motion.div>

          {/* Animated Number */}
          <motion.h4
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ 
              duration: 0.6, 
              delay: 1.4 + highlight.delay,
              type: "spring",
              stiffness: 200
            }}
            className="text-3xl md:text-4xl font-bold relative z-10"
          >
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              className={`bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent bg-[length:200%_100%]`}
            >
              {highlight.number.includes('%') ? `${count}%` : 
               highlight.number.includes('+') ? `${count}+` : count}
            </motion.span>
          </motion.h4>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 + highlight.delay }}
            className="font-semibold text-foreground relative z-10 group-hover:text-primary transition-colors duration-300"
          >
            {highlight.label}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.8 + highlight.delay }}
            className="text-sm text-muted-foreground relative z-10"
          >
            {highlight.description}
          </motion.p>

          {/* Hover Sparkle Effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute top-4 right-4 z-20"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default About
