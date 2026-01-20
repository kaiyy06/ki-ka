import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer section">
            <div className="container">
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="footer-title">Always & Forever</h2>
                    <p className="footer-text">
                        Thank you for being the love of my life. Every moment with you is a treasure.
                    </p>
                    <motion.button
                        className="btn btn-burgundy"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Subscribe
                    </motion.button>
                    <p className="footer-credit">Made with ❤️ by UAL STORIES</p>
                </motion.div>
            </div>
        </footer>
    );
}
