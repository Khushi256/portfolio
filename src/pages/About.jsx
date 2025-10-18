import React from 'react'
import { motion } from 'framer-motion'
import aboutImg from '../assets/about-img.png'

const About = () => {
  return (
    <section id="about" className="h-screen bg-[#0A0018] flex items-center px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Gradient glow background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] opacity-20 blur-3xl rounded-full"
              />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-white/10 backdrop-blur-sm">
                <img
                  src={aboutImg}
                  alt="Khushi's Avatar"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0018]/40 via-transparent to-transparent pointer-events-none"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#FD81C0] to-[#8B5CF6] rounded-full opacity-20 blur-xl"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#8B5CF6] to-[#FD81C0] rounded-full opacity-20 blur-xl"
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* About Me Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-left"
            >
              About <span className="bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] bg-clip-text text-transparent">Me</span>
            </motion.h2>

            {/* Single Paragraph - Left Aligned */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-white/70 text-base md:text-lg lg:text-xl leading-relaxed text-left"
            >
              Hi, I'm Khushi! I'm currently working on frontend projects while learning Data Structures and Algorithms with C++. My next goal is to dive into backend development and transition into full-stack development. I'm open to collaborating on frontend projects, and you can always reach out to me for discussions about frontend development, React, or DSA. I enjoy solving coding problems and building beautiful, user-friendly UIs.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
