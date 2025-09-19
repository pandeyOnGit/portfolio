"use client"

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, MapPin, Sparkles } from 'lucide-react'
import { useRef } from 'react'

// TypeScript interfaces
interface Experience {
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
  color: string
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

const Experience = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'StuFlo pvt ltd.',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Lead development of scalable web applications using React, Next.js, and Node.js.',
      achievements: [
        'Integrated secure authentication protocols (OAuth 2.0) into the flagship application, increasing user security audit scores by 40% and reducing unauthorized access attempts by 25%',
        'Developed and refined RESTful APIs using Next.js, reducing average data retrieval time by 35% and supporting over 1,000 concurrent users with zero downtime during peak usage',
        'Redesigned MySQL queries and indexing strategies, cutting average API response time from 1.8s to 1.2s (a 35% improvement) and improving performance reliability under load testing by 45%',
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL','Tailwind CSS'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section id="experience" className="py-20 relative overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at bottom, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(ellipse at top, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Work{' '}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Experience
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            My professional journey and the experiences that shaped my career
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-full"></div>
            <motion.div
              style={{ scaleY: useTransform(scrollYProgress, [0, 1], [0, 1]) }}
              className="absolute inset-0 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 rounded-full origin-top"
            />
          </div>

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.title + experience.company}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Education Section with Enhanced Animations */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-2xl md:text-3xl font-bold text-center mb-16"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
            </span>
          </motion.h3>

          <div className="max-w-3xl mx-auto">
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: 2
              }}
              className="group"
            >
              <Card className="border-2 border-transparent hover:border-primary transition-all duration-500 backdrop-blur-sm bg-background/80 shadow-xl hover:shadow-2xl">
                <CardHeader>
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <CardTitle className="text-xl md:text-2xl text-primary group-hover:text-purple-400 transition-colors duration-300">
                      Bachelor of Technology in Computer Science
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground mt-2">
                      Guru Gobind Singh Indraprastha University
                    </CardDescription>
                    <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mt-3">
                      <div className="flex items-center">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        2022 - 2026
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        Greater Noida, India
                      </div>
                    </div>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-muted-foreground leading-relaxed mb-6"
                  >
                    Graduated with honors, specializing in software engineering and web technologies. 
                    Completed multiple projects in team environments.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <h4 className="font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'Software Engineering', 'Computer Networks'].map((course, index) => (
                        <motion.span
                          key={course}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.6 + index * 0.1,
                            type: "spring"
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-3 py-1 text-xs bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-600 dark:text-purple-400 rounded-full border border-purple-500/20"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Individual Experience Card Component
const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        scale: 1,
      } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className={`relative mb-20 ${
        index % 2 === 0 
          ? 'md:pr-1/2 md:text-right' 
          : 'md:pl-1/2 md:ml-auto'
      }`}
    >
      {/* Animated Timeline Dot with Burst Effect */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={isInView ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.2, type: "spring" }}
        className={`absolute top-8 w-6 h-6 z-10 ${
          index % 2 === 0
            ? 'left-5 md:left-auto md:right-[-12px]'
            : 'left-5 md:left-[-12px]'
        }`}
      >
        <motion.div
          animate={isInView ? {
            scale: [1, 1.5, 1],
            boxShadow: [
              "0 0 0 0 rgba(99, 102, 241, 0.7)",
              "0 0 0 20px rgba(99, 102, 241, 0)",
              "0 0 0 0 rgba(99, 102, 241, 0)"
            ]
          } : {}}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            delay: 1 + index * 0.5
          }}
          className={`w-full h-full bg-gradient-to-r ${experience.color} rounded-full border-4 border-background shadow-lg`}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full flex items-center justify-center"
          >
            <Sparkles className="w-3 h-3 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Experience Card */}
      <motion.div
        whileHover={{ 
          scale: 1.02,
          rotateY: index % 2 === 0 ? -3 : 3,
          rotateX: 2
        }}
        transition={{ duration: 0.3 }}
        className={`ml-16 md:ml-0 group ${
          index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
        }`}
      >
        <Card className="border-2 border-transparent hover:border-primary transition-all duration-500 backdrop-blur-sm bg-background/90 shadow-xl hover:shadow-2xl overflow-hidden">
          {/* Gradient Header */}
          <div className={`h-2 bg-gradient-to-r ${experience.color}`} />
          
          <CardHeader className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
            >
              <CardTitle className="text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                {experience.title}
              </CardTitle>
              <CardDescription className="text-lg font-semibold text-muted-foreground mt-2">
                {experience.company}
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground mt-3">
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {experience.period}
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  {experience.location}
                </motion.div>
              </div>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
              className="text-muted-foreground leading-relaxed"
            >
              {experience.description}
            </motion.p>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement: string, achievementIndex: number) => (
                  <motion.li
                    key={achievementIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.1 + index * 0.2 + achievementIndex * 0.1 
                    }}
                    className="flex items-start text-sm text-muted-foreground group/item"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.5, rotate: 90 }}
                      className="w-2 h-2 bg-gradient-to-r from-primary to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"
                    />
                    <span className="group-hover/item:text-foreground transition-colors duration-200">
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies Used */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.3 + index * 0.2 }}
            >
              <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech: string, techIndex: number) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: 1.5 + index * 0.2 + techIndex * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -3,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                    }}
                    className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20 backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}

export default Experience
