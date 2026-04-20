import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Hero.css";

export const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="greeting"
                >
                    Hello, I'm
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="name"
                >
                    Umang Talpara
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="role"
                >
                    Backend-Focused Full Stack Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="description"
                >
                    Backend-focused Full Stack Developer with 4.5+ years of experience in designing and scaling distributed systems, microservices, and REST APIs. Proven track record shipping production-grade systems for 195K+ users and 4M+ orders.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="cta-buttons"
                >
                    <a href="#experience" className="btn btn-primary">View Experience</a>
                    <a href="#contact" className="btn btn-outline">Contact Me</a>
                    <a href="/umang_resume.pdf" download className="btn btn-outline">📄 Download Resume</a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="social-links"
                >
                    <a href="https://github.com/umangtalpara" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/umang-talpara" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </motion.div>
            </div>
        </section>
    );
};
