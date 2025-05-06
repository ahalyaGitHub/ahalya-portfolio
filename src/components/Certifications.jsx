"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

const Certifications = () => {
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

  const certifications = [
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB University",
      date: "2025",
      link: "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/eb18ab3c-f90a-4166-bb57-188f9cd1d5d1-ahalya-r-22csr008-c2122706-29df-47c1-ba84-0ca2fa0f4ecb-certificate.pdf",
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section id="certifications" className="section font-mono">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} className="card" variants={item} whileHover={{ y: -5 }}>
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full bg-gradient-to-r ${cert.color}`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{cert.title}</h3>
                  <p className="text-gray-400 mb-2">
                    {cert.issuer} • {cert.date}
                  </p>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-purple-400 flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
