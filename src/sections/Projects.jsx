import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

export const Projects = () => {
    const projects = [
        {
            title: "AI-Driven ATS SaaS Platform",
            description: "An AI-powered Applicant Tracking System handling 200M+ candidate profiles with real-time ATS integrations (Ashby, BambooHR, Lever, Keka), email automation engine, and Elasticsearch-powered advanced search.",
            tags: ["Node.js", "NestJS", "MongoDB", "Elasticsearch", "RabbitMQ"],
            github: "https://github.com/umangtalpara",
            demo: "#",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
        },
        {
            title: "E-Commerce & Delivery Platform",
            description: "Full-stack WMS, CRM, POS, and last-mile delivery platform scaled to 100K+ users and 8M+ orders with 7+ microservices, real-time order tracking, and Redis caching for 40% faster API responses.",
            tags: ["Node.js", "NestJS", "Vue.js", "MySQL", "Redis", "AWS"],
            github: "https://github.com/umangtalpara",
            demo: "#",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
        },
        {
            title: "Microservices Backend Architecture",
            description: "Scalable microservices architecture with event-driven communication using RabbitMQ and BullMQ, JWT-based auth with RBAC, CI/CD pipelines with Jenkins and Docker, and Sentry monitoring.",
            tags: ["NestJS", "Docker", "RabbitMQ", "Jenkins", "Sentry"],
            github: "https://github.com/umangtalpara",
            demo: "#",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
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
