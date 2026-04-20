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
                        I am a Backend-focused Full Stack Developer with 4.5+ years of experience in designing and scaling distributed systems, microservices, and REST APIs. Experienced in high-traffic e-commerce, delivery, and HR Tech SaaS platforms.
                        <br /><br />
                        I have expertise in shipping production-grade systems for 195K+ users and 4M+ orders. Proficient in leveraging AI tools (ChatGPT, Claude, Cursor) for accelerated development and LLM integration. Proven track record of leading teams, driving project execution, and architecting scalable microservice platforms.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
