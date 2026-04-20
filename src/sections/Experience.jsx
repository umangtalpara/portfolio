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
            role: "Software Developer (Backend)",
            period: "Jan 2025 – Jan 2026",
            location: "California, USA (Remote)",
            description: [
                "Architected scalable backend microservices using Node.js, NestJS, MongoDB, Elasticsearch, and RabbitMQ for an AI-driven ATS SaaS platform handling 200M+ candidate profiles.",
                "Built email automation engine with personalized outreach, retry logic, rate limiting, and fail-tracking using event-driven architecture; enforced REST API best practices including JWT-based auth and RBAC.",
                "Integrated ATS platforms (Ashby, BambooHR, Lever, Keka) via REST APIs and webhooks for real-time candidate data sync.",
                "Developed high-performance candidate search and filtering system using Elasticsearch, reducing recruiter search time significantly.",
                "Leveraged AI tools (ChatGPT, Claude, Cursor) for code generation, debugging, and LLM-based feature prototyping within production workflows."
            ]
        },
        {
            company: "Frendy",
            role: "Full Stack Developer (Backend Lead)",
            period: "Dec 2021 – Jan 2025",
            location: "Ahmedabad, India",
            description: [
                "Led backend development of WMS, CRM, POS, and last-mile delivery platform; scaled to 195K+ users and 4M+ orders ensuring high availability and zero-downtime deployments.",
                "Designed and maintained 7+ microservices, 2 customer-facing apps, and 7 admin panels using Node.js, NestJS, Express.js, Vue.js, React.js, MongoDB, and MySQL.",
                "Implemented Redis caching and query optimization strategies, improving API response times by up to 40%.",
                "Led a team of developers, coordinated sprint planning, code reviews, and delivery milestones using Jira.",
                "Used Sentry for real-time error monitoring and AWS services for cloud infrastructure and deployments."
            ]
        },
        {
            company: "BinBytes",
            role: "Full Stack Developer",
            period: "Feb 2021 – Nov 2021",
            location: "Rajkot, India",
            description: [
                "Built multiple client websites and admin dashboards with Node.js, REST APIs, and React.js frontends.",
                "Delivered clean, maintainable full-stack codebases with third-party API integrations.",
                "Applied strong analytical and debugging skills to deliver quality solutions on tight deadlines."
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
                                    {exp.location && <span className="location">{exp.location}</span>}
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
