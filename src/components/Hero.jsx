"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ChevronDown } from "lucide-react"

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative tech-bg pt-20 font-mono">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
        <div className="tech-bg w-full h-full"></div>
      </div>

      <motion.div
        className="container mx-auto px-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="gradient-text">Ahalya R</span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Computer Science Student | MERN Stack Enthusiast
            </motion.h2>

            <motion.div
              className="text-lg md:text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  "Turning ideas into interactive experiences with MongoDB, Express, React, and Node.js.",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
                className="text-gray-200"
              />
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {["JavaScript", "React.js", "Node.js", "MongoDB", "MySQL", "Figma", "Tailwind CSS"].map(
                (skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800/60 border border-purple-500/30 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ),
              )}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 glow-btn"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
              <img
                src="/ahal.jpg"
                alt="Profile"
                className="w-full h-full rounded-full object-cover shadow-lg" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <a href="#education" className="flex flex-col items-center text-gray-400 hover:text-white">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
