"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, Loader2, Sparkles } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

// TypeScript interfaces
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  delay?: number
  label?: string
}

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  delay?: number
  label?: string
}

interface SuccessMessageProps {
  onReset: () => void
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactRef = useRef(null)
  const isInView = useInView(contactRef, { once: true, amount: 0.2 })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityapandey4254@gmail.com',
      href: 'mailto:adityapandey4254@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '8368664323',
      href: 'tel:+918368664323',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Greater Noida, India',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/pandeyOnGit', label: 'GitHub', color: 'hover:text-gray-600' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/pandeyonsocial', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com/_onetruegod', label: 'Twitter', color: 'hover:text-cyan-500' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setShowConfetti(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        // Hide confetti after 3 seconds
        setTimeout(() => setShowConfetti(false), 3000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-secondary/10 relative overflow-hidden" ref={contactRef}>
      {/* Confetti Animation */}
      {showConfetti && <ConfettiAnimation />}

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at top left, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at top right, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at bottom left, rgba(34, 197, 94, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at top left, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Get In{' '}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                textShadow: [
                  "0 0 0 transparent",
                  "0 0 30px rgba(99,102,241,0.5)",
                  "0 0 0 transparent"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Touch
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="space-y-10"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl font-semibold mb-6"
              >
                Let&apos;s{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Connect
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-muted-foreground text-lg leading-relaxed"
              >
                I&apos;m always open to discussing new opportunities, creative projects, 
                or just having a friendly chat about technology and development.
              </motion.p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -50, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + index * 0.2,
                      type: "spring",
                      stiffness: 150
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      rotateY: 5,
                      rotateX: 5
                    }}
                    className="group"
                  >
                    <Card className="p-6 border-2 border-transparent hover:border-primary transition-all duration-500 backdrop-blur-sm bg-background/80 shadow-lg hover:shadow-2xl">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-6">
                          <motion.div 
                            whileHover={{ 
                              scale: 1.2, 
                              rotate: 360,
                              boxShadow: "0 0 30px rgba(99, 102, 241, 0.4)"
                            }}
                            transition={{ duration: 0.6 }}
                            className={`p-4 bg-gradient-to-r ${info.color} rounded-xl text-white shadow-lg`}
                          >
                            <Icon className="h-6 w-6" />
                          </motion.div>
                          <div>
                            <p className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                              {info.label}
                            </p>
                            {info.href !== '#' ? (
                              <a
                                href={info.href}
                                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-lg"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground text-lg">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links with Enhanced Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h4 className="text-xl font-semibold mb-6">Follow Me</h4>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.6 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        scale: 1.2, 
                        y: -8,
                        rotate: 360,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 bg-secondary hover:bg-primary text-muted-foreground hover:text-primary-foreground rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl ${social.color}`}
                    >
                      <Icon className="h-7 w-7" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form with Spring Animation */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-2 border-transparent hover:border-primary transition-all duration-500 backdrop-blur-sm bg-background/90 shadow-2xl hover:shadow-primary/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                />
                
                <CardHeader>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <CardTitle className="text-2xl md:text-3xl">Send Me a Message</CardTitle>
                    <CardDescription className="text-lg mt-2">
                      Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </CardDescription>
                  </motion.div>
                </CardHeader>

                <CardContent>
                  {isSubmitted ? (
                    <SuccessMessage onReset={() => setIsSubmitted(false)} />
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormInput
                          id="name"
                          name="name"
                          type="text"
                          label="Name *"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          delay={0.8}
                          required
                        />
                        
                        <FormInput
                          id="email"
                          name="email"
                          type="email"
                          label="Email *"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          delay={1.0}
                          required
                        />
                      </div>

                      <FormInput
                        id="subject"
                        name="subject"
                        type="text"
                        label="Subject *"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        delay={1.2}
                        required
                      />

                      <FormTextarea
                        id="message"
                        name="message"
                        label="Message *"
                        placeholder="Tell me more about your project or inquiry..."
                        value={formData.message}
                        onChange={handleInputChange}
                        delay={1.4}
                        required
                      />

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.6 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            size="lg"
                            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 hover:from-purple-600 hover:via-pink-600 hover:to-cyan-600 text-white font-semibold py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                          >
                            <motion.div
                              animate={isSubmitting ? {} : {
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="flex items-center justify-center"
                            >
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  <Send className="mr-2 h-6 w-6" />
                                  Send Message
                                </>
                              )}
                            </motion.div>
                          </Button>
                        </motion.div>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Enhanced Form Input Component
const FormInput = ({ delay, ...props }: FormInputProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef(null)
  const isInView = useInView(inputRef, { once: true })

  return (
    <motion.div
      ref={inputRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      <label htmlFor={props.id} className="block text-sm font-medium mb-3 text-foreground">
        {props.label}
      </label>
      <motion.div
        animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <Input
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full py-4 text-lg border-2 transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={isFocused ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </motion.div>
    </motion.div>
  )
}

// Enhanced Form Textarea Component
const FormTextarea = ({ delay, ...props }: FormTextareaProps) => {
  const [isFocused, setIsFocused] = useState(false)
  const textareaRef = useRef(null)
  const isInView = useInView(textareaRef, { once: true })

  return (
    <motion.div
      ref={textareaRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      <label htmlFor={props.id} className="block text-sm font-medium mb-3 text-foreground">
        {props.label}
      </label>
      <motion.div
        animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <Textarea
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full min-h-[150px] text-lg border-2 transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={isFocused ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </motion.div>
    </motion.div>
  )
}

// Success Message Component
const SuccessMessage = ({ onReset }: SuccessMessageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="text-center py-16"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
        className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
      >
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Sparkles className="h-10 w-10 text-white" />
        </motion.div>
      </motion.div>
      
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3"
      >
        Message Sent Successfully!
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-muted-foreground mb-8 text-lg"
      >
        Thank you for reaching out. I&apos;ll get back to you within 24 hours.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button onClick={onReset} variant="outline" size="lg">
          Send Another Message
        </Button>
      </motion.div>
    </motion.div>
  )
}

// Confetti Animation Component
const ConfettiAnimation = () => {
  const [windowSize, setWindowSize] = useState({ width: 1024, height: 768 })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      
      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
      
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {Array.from({ length: 50 }).map((_, i) => {
        // Generate stable values based on index
        const initialX = (i * 23 % windowSize.width)
        const delay = (i * 7 % 20) / 10
        
        return (
          <motion.div
            key={i}
            initial={{ 
              x: initialX,
              y: -10,
              rotate: 0,
              scale: 0
            }}
            animate={{ 
              y: windowSize.height + 10,
              rotate: 360 * 3,
              scale: [0, 1, 1, 0]
            }}
            transition={{ 
              duration: 3,
              delay: delay,
              ease: "easeOut"
            }}
            className={`absolute w-3 h-3 ${
              i % 5 === 0 ? 'bg-purple-500' :
              i % 5 === 1 ? 'bg-pink-500' :
              i % 5 === 2 ? 'bg-cyan-500' :
              i % 5 === 3 ? 'bg-yellow-500' :
              'bg-green-500'
            } rounded-full`}
          />
        )
      })}
    </div>
  )
}

export default Contact
