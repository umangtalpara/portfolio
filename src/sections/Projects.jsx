import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

export const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with cart functionality, user authentication, and payment integration.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com",
            demo: "https://demo.com",
            image: "https://via.placeholder.com/600x400/1a1a1a/3b82f6?text=E-Commerce"
        },
        {
            title: "Task Management App",
            description: "A productivity tool for teams to organize tasks, track progress, and collaborate in real-time.",
            tags: ["React", "Firebase", "Tailwind CSS"],
            github: "https://github.com",
            demo: "https://demo.com",
            image: "https://via.placeholder.com/600x400/1a1a1a/8b5cf6?text=Task+App"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather application using OpenWeatherMap API with location detection and 5-day forecast.",
            tags: ["JavaScript", "API Integration", "CSS3"],
            github: "https://github.com",
            demo: "https://demo.com",
            image: "https://via.placeholder.com/600x400/1a1a1a/06b6d4?text=Weather"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Featured Work
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="project-card"
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /> Code</a>
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Demo</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
