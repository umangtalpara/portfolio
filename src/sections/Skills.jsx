import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaAws, FaGithub, FaGitlab, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiNestjs, SiMongodb, SiRedis, SiElasticsearch, SiRabbitmq, SiMysql, SiVuedotjs, SiVuetify, SiJest, SiApachekafka, SiVercel, SiJenkins, SiPostman, SiSentry, SiJira, SiDbeaver } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./Skills.css";

const SkillCard = ({ skill, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                borderColor: `${skill.color}50`, // 50% opacity border
                boxShadow: `0 4px 20px ${skill.color}15` // Subtle colored glow
            }}
            className="skill-item"
        >
            <div
                className="skill-content"
                style={{ transform: "translateZ(20px)" }}
            >
                <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
            </div>
            <div
                className="skill-glow"
                style={{
                    background: `radial-gradient(circle at center, ${skill.color}40 0%, transparent 70%)`
                }}
            ></div>
        </motion.div>
    );
};

export const Skills = () => {
    const skills = [
        // Backend
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
        { name: "Express.js", icon: <FaNodeJs />, color: "#000000" },

        // Frontend
        { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D" },
        { name: "Vuetify", icon: <SiVuetify />, color: "#1867C0" },
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
        { name: "Jest", icon: <SiJest />, color: "#C21325" },

        // Database & Infra
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
        { name: "Elasticsearch", icon: <SiElasticsearch />, color: "#005571" },
        { name: "RabbitMQ", icon: <SiRabbitmq />, color: "#FF6600" },
        { name: "Kafka", icon: <SiApachekafka />, color: "#231F20" },
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
        { name: "Vercel", icon: <SiVercel />, color: "#000000" },

        // DevOps & Tools
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "GitHub", icon: <FaGithub />, color: "#181717" },
        { name: "GitLab", icon: <FaGitlab />, color: "#FC6D26" },
        { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Sentry", icon: <SiSentry />, color: "#362D59" },
        { name: "Jira", icon: <SiJira />, color: "#0052CC" },
        { name: "VS Code", icon: <VscVscode />, color: "#007ACC" },
        { name: "DBeaver", icon: <SiDbeaver />, color: "#382923" },
    ];

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="skills-header"
                >
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="skills-subtitle">Technologies I work with</p>
                </motion.div>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
