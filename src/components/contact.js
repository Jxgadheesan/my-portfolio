import React from "react";
import { motion } from "framer-motion";
import "../assets/contact.css";

const Contact = () => {
    return (
        <motion.section 
            className="contact-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2>Contact</h2>
            <p>Let's connect and create something impactful.</p>

            {/* Contact Details */}
            <div className="contact-info">
                <p>Email: <a href="mailto:your@email.com">jagadheesanjsd@gmail.com</a></p>
                <p>Location: Dharmapuri, Tamil Nadu, India</p>
            </div>

            {/* Social Links as Buttons */}
            <div className="social-buttons">
                <a href="https://github.com/jxgadheesan" target="_blank" rel="noopener noreferrer" className="contact-button">
                    GitHub →
                </a>
                <a href="https://linkedin.com/in/jxgadheesan" target="_blank" rel="noopener noreferrer" className="contact-button">
                    LinkedIn →
                </a>
                <a href="https://twitter.com/jxgadheesan" target="_blank" rel="noopener noreferrer" className="contact-button">
                    Twitter →
                </a>
            </div>
        </motion.section>
    );
};

export default Contact;
