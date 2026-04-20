import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

export const Education = () => {
    return (
        <section id="education" className="education">
            <div className="education-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Education
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="education-card"
                >
                    <div className="education-icon">
                        <FaGraduationCap />
                    </div>
                    <div className="education-details">
                        <h3>Bachelor of Technology (B.Tech)</h3>
                        <span className="education-field">Computer Science & Engineering</span>
                        <span className="education-university">Parul University, Vadodara</span>
                        <span className="education-period">2017 – 2021</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
