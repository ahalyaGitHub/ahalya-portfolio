"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout } from "lucide-react"

const Interests = () => {
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

  const interests = [
    {
      title: "Frontend & Backend Development",
      icon: <Code className="w-6 h-6" />,
      description: "Building responsive and interactive web applications with modern frameworks and libraries.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      description: "Designing efficient database schemas and optimizing queries for better performance.",
      color: "from-blue-500 to-cyan-500",
    },
    
  ]

  return (
    <section id="interests" className="section font-mono">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Interests
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {interests.map((interest, index) => (
            <motion.div key={index} className="card text-center" variants={item} whileHover={{ y: -5 }}>
              <div className="flex justify-center mb-4">
                <div className={`p-4 rounded-full bg-gradient-to-r ${interest.color}`}>{interest.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
              <p className="text-gray-400">{interest.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Interests
