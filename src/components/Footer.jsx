"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800 font-mono">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-bold gradient-text mb-2">Ahalya R</p>
            <p className="text-gray-400">Computer Science Student</p>
          </motion.div>

          <motion.div
            className="flex space-x-4 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="mailto:ahalya.r2004@gmail.com"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/ahalyaGitHub" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ahalya-r-552667256/" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>© {new Date().getFullYear()} Made with ❤️ by Ahalya R.</p>
        </motion.div>


      </div>
    </footer>
  )
}

export default Footer
