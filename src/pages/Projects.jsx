import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

import reflectiqimg from '../assets/reflectiq-img.png'
import craftImg from '../assets/craft-img.png'
import crustImg from '../assets/crust-img.png'


const Projects = () => {
  const projects = [
    {
      title: "ReflectIQ",
      description: "Real-time AI journal with goal tracking and team chat. Built responsive UI with React, TypeScript, and WebSocket integration.",
      image: reflectiqimg,
      tech: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "WebSocket"],
      github: "https://github.com/riteshkrkarn/ai-journal",
      demo: "https://reflectiq.r2k.dev",
      gradient: "from-[#6366F1] to-[#8B5CF6]"
    },
    {
      title: "Crust",
      description: "A modern, single-page pizzeria website featuring smooth-scrolling, interactive glow effects, and beautiful animations with DaisyUI and Framer Motion.",
      image: crustImg,
      tech: ["React", "DaisyUI", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/Khushi256/Crust",
      demo: "#",
      gradient: "from-[#8B5CF6] to-[#6D28D9]"
    },
    {
      title: "Craft",
      description: "A creative web application built with modern frontend technologies, showcasing advanced React patterns and elegant design principles.",
      image: craftImg,
      tech: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
      github: "https://github.com/Khushi256/Craft",
      demo: "#",
      gradient: "from-[#FD81C0] to-[#8B5CF6]"
    }
  ]

  return (
    <section id="projects" className="min-h-screen bg-[#0A0018] py-16 md:py-20 px-4 md:px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4"
          >
            My <span className="bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white/60 mt-4 md:mt-6 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4"
          >
            Showcasing my recent work and creative experiments
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500">
                {/* Gradient overlay animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Project Image - Smaller on mobile */}
                <div className="relative h-40 md:h-48 overflow-hidden bg-gradient-to-br from-white/5 to-white/10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    {/* Placeholder if image not found */}
                    <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-[#FD81C0]/20 to-[#8B5CF6]/20">
                      <span className="text-4xl md:text-6xl font-bold text-white/20">{project.title[0]}</span>
                    </div>
                  </motion.div>
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0018] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content - More compact on mobile */}
                <div className="relative p-4 md:p-6 flex flex-col">
                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`text-xl md:text-2xl font-bold mb-2 md:mb-3 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description - Shorter on mobile */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-white/60 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 md:line-clamp-none"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Stack - Smaller tags on mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-3 md:mb-4"
                  >
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 + techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-[10px] md:text-xs hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 md:px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50 text-[10px] md:text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </motion.div>

                  {/* Links - Smaller buttons on mobile */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-2 md:gap-3"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-white/5 border border-white/20 rounded-lg text-white/80 text-xs md:text-sm font-medium hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                    >
                      <FiGithub className="w-3 h-3 md:w-4 md:h-4" />
                      GitHub
                    </motion.a>

                    {project.demo !== "#" && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex-1 flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r ${project.gradient} rounded-lg text-white text-xs md:text-sm font-medium hover:opacity-90 transition-all duration-300`}
                      >
                        <FiExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                        Demo
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
