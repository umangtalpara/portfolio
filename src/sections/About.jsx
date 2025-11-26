import { motion } from "framer-motion";
import "./About.css";

export const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="about-content"
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="about-text">
                        I am a Backend-focused Full Stack Developer with 4+ years of experience designing and deploying scalable, high-performance web applications for SaaS, e-commerce, and recruitment platforms.
                        <br /><br />
                        I have strong expertise in system architecture, backend API development, and data flow optimization. I have a proven track record of leading teams, driving project execution, and supporting large user bases with extensive transaction volumes.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
