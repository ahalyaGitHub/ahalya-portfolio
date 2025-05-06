"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
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

  const projects = [
    {
      title: "Paw Match",
      description: "Pet adoption platform with request tracking",
      image: "/paw-match.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://tubular-kangaroo-3196e7.netlify.app/",
      githubLink: "https://github.com/ahalyaGitHub/paw-match",
      color: "",
    },
    {
      title: "Book Bazaar",
      description: "Book marketplace for buying and selling",
      image: "/book-bazaar.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://book-store-app-two-pearl.vercel.app/",
      githubLink: "https://github.com/ahalyaGitHub/book-bazaar",
      color: "",
    },
    {
      title: "Bonafide Application Tracker",
      description: "Apply and track bonafide certificates online",
      image: "/bonafide-app.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: null,
      githubLink: "https://github.com/ahalyaGitHub/bonafied-application-tracker",
      color: "",
    },
    {
      title: "Recipe Finder",
      description: "Traditional Tamil Nadu recipes search tool",
      image: "/recipe-finder.png",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: null,
      githubLink: "https://github.com/ahalyaGitHub/recipe-finder",
      color: "",
    },
    {
      title: "CGPA & GPA Calculator",
      description: "Student tool for calculating GPA/CGPA",
      image: "/cgpa-calculator.png",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      liveLink: null,
      githubLink: "https://github.com/ahalyaGitHub/gpa-cgpa-calculator",
      color: "",
    },
  ]

  return (
    <section id="projects" className="section font-mono">
      <div className="container mx-auto px-4">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} className="card group overflow-hidden" variants={item} whileHover={{ y: -10 }}>
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`px-2 py-1 bg-gray-800 rounded-md text-xs`}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-purple-400 flex items-center gap-1 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white hover:text-purple-400 flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
