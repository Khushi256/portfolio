import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiGit,
  SiFigma,
  SiRedux,
  SiFramer,
  SiGithub,
  SiPostman,
  SiVercel
} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "from-[#FD81C0] to-[#FF6B9D]",
      skills: [
        { name: "C++", icon: <SiCplusplus className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "Python", icon: <SiPython className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "C", icon: <SiC className="w-8 h-8 md:w-10 md:h-10" /> },
      ]
    },
    {
      title: "Frontend",
      color: "from-[#8B5CF6] to-[#6D28D9]",
      skills: [
        { name: "React", icon: <SiReact className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "Redux", icon: <SiRedux className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "Framer", icon: <SiFramer className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "CSS3", icon: <SiCss3 className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8 md:w-10 md:h-10" /> },
      ]
    },
    {
      title: "Tools",
      color: "from-[#FD81C0] to-[#8B5CF6]",
      skills: [
        { name: "Git", icon: <SiGit className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "GitHub", icon: <SiGithub className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "Figma", icon: <SiFigma className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "Postman", icon: <SiPostman className="w-8 h-8 md:w-10 md:h-10" /> },
        { name: "Vercel", icon: <SiVercel className="w-8 h-8 md:w-10 md:h-10" /> },
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen bg-[#0A0018] py-20 px-4 md:px-6 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] mx-auto rounded-full"></div>
          <p className="text-white/60 mt-4 md:mt-6 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 hover:bg-white/10 transition-all duration-300">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-xl md:rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Category Title */}
                  <h3 className={`text-xl md:text-2xl font-bold mb-5 md:mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>

                  {/* Skills Grid - Fixed height container */}
                  <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 auto-rows-fr">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, y: -5 }}
                        className="flex flex-col items-center justify-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group/skill aspect-square"
                      >
                        <div className="text-white/70 group-hover/skill:text-white transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <span className="text-white/70 text-xs md:text-sm text-center group-hover/skill:text-white transition-colors duration-300 leading-tight line-clamp-2">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
