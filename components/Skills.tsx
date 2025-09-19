"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { useRef } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiVercel,
  SiFigma,
  SiGraphql,
  SiJenkins
} from 'react-icons/si'

// TypeScript interfaces
interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
}

interface SkillCardProps {
  skill: Skill
  Icon: React.ComponentType<{ className?: string }>
  index: number
  categoryIndex: number
}

const Skills = () => {
  const ref = useRef(null)

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: 'text-blue-500', bgColor: 'hover:bg-blue-500/20' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white', bgColor: 'hover:bg-gray-500/20' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600', bgColor: 'hover:bg-blue-600/20' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500', bgColor: 'hover:bg-yellow-500/20' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500', bgColor: 'hover:bg-cyan-500/20' },
        { name: 'Framer Motion', icon: SiFramer, color: 'text-pink-500', bgColor: 'hover:bg-pink-500/20' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', bgColor: 'hover:bg-green-500/20' },
        { name: 'Python', icon: SiPython, color: 'text-yellow-600', bgColor: 'hover:bg-yellow-600/20' },
        { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-600', bgColor: 'hover:bg-pink-600/20' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600', bgColor: 'hover:bg-green-600/20' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700', bgColor: 'hover:bg-blue-700/20' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: SiGit, color: 'text-orange-500', bgColor: 'hover:bg-orange-500/20' },
        { name: 'Docker', icon: SiDocker, color: 'text-blue-500', bgColor: 'hover:bg-blue-500/20' },
        { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-600', bgColor: 'hover:bg-orange-600/20' },
        { name: 'Vercel', icon: SiVercel, color: 'text-black dark:text-white', bgColor: 'hover:bg-gray-500/20' },
        { name: 'Jenkins', icon: SiJenkins, color: 'text-purple-500', bgColor: 'hover:bg-purple-500/20' },
      ]
    }
  ]

  // All skills for marquee
  const allSkills = skillCategories.flatMap(category => category.skills)

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(119, 198, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Skills
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <div className="mb-20 overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "0%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex space-x-8 whitespace-nowrap"
          >
            {[...allSkills, ...allSkills].map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.2, y: -10 }}
                  className="flex items-center space-x-3 bg-secondary/50 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20"
                >
                  <Icon className={`h-8 w-8 ${skill.color}`} />
                  <span className="font-medium text-foreground">{skill.name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <div className="space-y-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: categoryIndex * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    Icon={skill.icon}
                    index={skillIndex}
                    categoryIndex={categoryIndex}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Separate component for individual skill cards with advanced animations
const SkillCard = ({ skill, Icon, index, categoryIndex }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateY: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.6,
        delay: categoryIndex * 0.3 + index * 0.1,
        type: "spring",
        stiffness: 150
      }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.15,
        y: -20,
        rotateY: 15,
        rotateX: 10,
        z: 50
      }}
      className="group"
      style={{ transformStyle: "preserve-3d", perspective: '1000px' }}
    >
      <Card className={`h-full border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl ${skill.bgColor} backdrop-blur-sm bg-background/80`}>
        <CardContent className="p-6 text-center space-y-4">
          <motion.div
            whileHover={{
              scale: 1.3,
              rotate: [0, -10, 10, -10, 0],
              filter: "drop-shadow(0 0 10px currentColor)"
            }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mb-4"
          >
            <Icon className={`h-16 w-16 ${skill.color}`} />
          </motion.div>
          <p className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
            {skill.name}
          </p>
          {/* Hover glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 -z-10 rounded-lg"
            style={{
              background: `radial-gradient(circle, ${skill.color.replace('text-', 'rgba(').replace('-500', ', 0.2)').replace(')', '')}) 0%, transparent 70%)`
            }}
            transition={{ duration: 0.3 }}
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Skills