"use client"

import { motion } from "framer-motion"
import { GraduationCap, School } from "lucide-react"

const Education = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" className="section font-mono">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div className="card" variants={item}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Kongu Engineering College</h3>
                <p className="text-gray-400 mb-2">B.E. in Computer Science and Engineering (2022–2026)</p>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">CGPA: 8.23</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="card" variants={item}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-500/20 rounded-full">
                <School className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">AVP Trust National Matriculation School</h3>
                <p className="text-gray-400 mb-2">Higher Secondary Education</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm">SSLC: 82.6%</span>
                  <span className="px-3 py-1 bg-pink-500/20 rounded-full text-sm">HSC: 94%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
