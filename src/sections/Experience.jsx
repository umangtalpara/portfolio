import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import "./Experience.css";

export const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const experiences = [
        {
            company: "SproutsAI",
            role: "Software Developer",
            period: "Jan 2025 - Present",
            description: [
                "Architected and developed scalable backend services utilizing Node.js, Express, Nest.js, MongoDB, Elasticsearch, and RabbitMQ.",
                "Integrated third-party ATS platforms to enable seamless candidate data synchronization and streamline recruitment workflows.",
                "Designed and implemented automation systems using webhooks and cron jobs, improving process efficiency.",
                "Built a high-performance candidate pool with robust search and filtering capabilities.",
                "Implemented email automation features for personalized candidate outreach."
            ]
        },
        {
            company: "Frendy",
            role: "Full Stack Developer",
            period: "Dec 2021 - Jan 2025",
            description: [
                "Designed and developed full-stack web applications including WMS, CRM, POS, and delivery applications.",
                "Engineered and maintained 7+ microservices, 2 user-facing apps, and 7 admin panels.",
                "Scaled platform infrastructure to support over 95,000 users and 700,000 orders.",
                "Led development of operational modules including ticketing systems and multilevel stock management.",
                "Utilized Node.js, Nest.js, Vue.js, MySQL, Redis, and Sentry."
            ]
        },
        {
            company: "BinBytes",
            role: "Full Stack Developer",
            period: "Feb 2021 - Nov 2021",
            description: [
                "Developed multiple websites and admin panels as part of a full stack development team.",
                "Designed and implemented APIs and RESTful web services using Node.js.",
                "Applied strong analytical and debugging skills to deliver quality solutions."
            ]
        }
    ];

    return (
        <section id="experience" className="experience" ref={ref}>
            <div className="experience-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Experience
                </motion.h2>

                <div className="timeline">
                    <motion.div
                        className="timeline-line"
                        style={{ scaleY }}
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="timeline-item"
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h3>{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                    <span className="period">{exp.period}</span>
                                </div>
                                <ul className="timeline-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
