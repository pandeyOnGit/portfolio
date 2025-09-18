"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'

// Type definitions
interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string | null
  featured: boolean
  color: string
}

interface FeaturedProjectCardProps {
  project: Project
  index: number
}

interface ProjectCardProps {
  project: Project
  index: number
}

const Projects = () => {
  const ref = useRef(null)

  // Your actual project data is now used here
  const projects = [
    {
      title: "E-Commerce Store",
      description: "A responsive e-commerce platform with product listings, advanced search, filters, cart functionality, secure payments, and authentication.",
      image: "/images/project1.png",
      technologies: ["React.js", "React Router", "Context API", "Tailwind CSS", "Stripe", "JWT"],
      githubUrl: "https://github.com/pandeyOnGit/Ecommerce-Store",
      liveUrl: "https://ecommerce-store-silk-ten.vercel.app/",
      featured: true,
      color: 'from-purple-500 to-pink-500' // Added color for styling
    },
    {
      title: "Notion Clone",
      description: "Built a full-stack note-taking app supporting hierarchical page creation, with server-side rendering and route-based content loading for smooth navigation across 100+ blocks/pages.",
      image: "/images/project2.png",
      technologies: ["Next.js", "Clerk", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com/pandeyOnGit/Notion-clone",
      liveUrl: null, // No live URL for this project
      featured: true,
      color: 'from-blue-500 to-cyan-500' // Added color for styling
    },
    {
      title: "NEET Student Rank Predictor",
      description: "The NEET Student Rank Predictor is a Next.js-based web application designed to analyze student performance in quizzes and predict their ranks based on historical data.",
      image: "/images/project3.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Vercel"],
      githubUrl: "https://github.com/pandeyOnGit/Student-rank-predictor",
      liveUrl: "https://student-rank-predictor-seven.vercel.app/",
      featured: false,
      color: 'from-green-500 to-teal-500' // Added color for styling
    },
    {
      title: "TechBlog Platform",
      description: "A Techblog Java project is a blogging app using Servlets, JSP, JDBC, and MySQL, featuring user auth, post management, categories, comments, and search within an MVC architecture.",
      image: "/images/project4.png",
      technologies: ["Java", "JSP", "Servlets", "JDBC", "MySQL"],
      githubUrl: "https://github.com/pandeyOnGit/Techblog",
      liveUrl: null, // No live URL for this project
      featured: false,
      color: 'from-orange-500 to-red-500' // Added color for styling
    },
  ];

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20 bg-secondary/10 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: [360, 0], scale: [1.2, 1, 1.2] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured{' '}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_100%]"
            >
              Projects
            </motion.span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center">
            More{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Button variant="outline" size="lg" asChild className="group">
            <a href="https://github.com/pandeyOnGit" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

// Featured Project Component with Parallax and Glassmorphism
const FeaturedProjectCard = ({ project, index }: FeaturedProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: index * 0.3, type: "spring", stiffness: 100 }}
      viewport={{ once: true }}
      className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
    >
      {/* Project Image */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        whileHover={{ scale: 1.05, rotateY: index % 2 === 0 ? 5 : -5, rotateX: 2 }}
        className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.8 }}>
            <Image
              src={project.image}
              alt={project.title}
              width={700}
              height={450}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
        </div>
      </motion.div>

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
      >
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            <span className={`bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
              {project.title}
            </span>
          </h3>
          <div className="backdrop-blur-md bg-background/30 border border-primary/20 rounded-xl p-8 shadow-2xl">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description}
            </p>
          </div>
          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.technologies.map((tech: string, techIndex: number) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + techIndex * 0.1, type: "spring" }}
                className="px-4 py-2 text-sm bg-primary/10 text-primary rounded-full border border-primary/30"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          {/* Action Buttons */}
          <div className="flex gap-6 pt-6">
            <Button variant="outline" size="lg" asChild className="group border-2 hover:border-primary">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" /> View Code
              </a>
            </Button>
            {project.liveUrl && (
              <Button size="lg" asChild className={`bg-gradient-to-r ${project.color} hover:opacity-90 group`}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" /> Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

// Regular Project Card Component
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      viewport={{ once: true }}
      whileHover={{ y: -15, scale: 1.02, rotateY: 5, rotateX: 5 }}
      className="group h-full"
    >
      <Card className="h-full overflow-hidden border-2 border-transparent hover:border-primary transition-all duration-500 backdrop-blur-sm bg-background/80 shadow-xl hover:shadow-2xl">
        <div className="relative overflow-hidden h-56">
          <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.8 }}>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500`} />
        </div>
        <CardHeader>
          <CardTitle className="group-hover:text-primary transition-colors duration-300 text-xl">
            {project.title}
          </CardTitle>
          <CardDescription className="leading-relaxed mt-3 h-24 overflow-hidden">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-between" style={{ minHeight: '10rem' }}>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span key={tech} className="px-3 py-1 text-xs bg-secondary text-secondary-foreground rounded-full">{tech}</span>
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="ghost" size="sm" asChild className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" /> Code
              </a>
            </Button>
            {project.liveUrl && (
              <Button size="sm" asChild className="flex-1">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-4 w-4" /> Demo
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default Projects