import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");
        // Simulate sending
        setTimeout(() => {
            setStatus("sent");
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setStatus(""), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="contact-header"
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p>Have a project in mind or just want to say hi? I'd love to hear from you.</p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="contact-info"
                    >
                        <div className="info-item">
                            <div className="icon-box"><FaEnvelope /></div>
                            <div>
                                <h3>Email</h3>
                                <p>patelumang607@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><FaPhone /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 97234 55615</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><FaMapMarkerAlt /></div>
                            <div>
                                <h3>Location</h3>
                                <p>Ahmedabad, Gujarat, India</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="contact-form-container"
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className={`btn btn-primary ${status}`}>
                                {status === "sending" ? "Sending..." : status === "sent" ? "Message Sent!" : "Send Message"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
