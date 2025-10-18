import React from 'react'
import { motion } from 'framer-motion'
import LightRays from '../components/LightRays'
import Navbar from './Navbar'

const Herosection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0018]">
      {/* Background Light Rays - Lowest layer */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#FFFFFF"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="w-full h-full"
        />
      </div>

      {/* Navbar - Above background */}
      <div className="relative z-40">
        <Navbar />
      </div>

      {/* Hero Content - Centered & Elegant */}
      <div className="relative z-30 h-full flex items-center justify-center">
        <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              >
                <span className="text-white/90">Hi, I'm </span>
                <span className="bg-gradient-to-r from-[#d281fd] to-[#8B5CF6] bg-clip-text text-transparent">
                  Khushi
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white/80"
              >
                Frontend Developer & UI/UX Designer
              </motion.h2>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-3 text-base md:text-lg font-medium text-white rounded-lg overflow-hidden group min-w-[180px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] to-[#FD81C0] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">View My Work</span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-base md:text-lg font-medium text-white rounded-lg border-2 border-white/20 hover:border-[#FD81C0] hover:bg-white/5 transition-all duration-300 backdrop-blur-sm min-w-[180px]"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Herosection
