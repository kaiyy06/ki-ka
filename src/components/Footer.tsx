import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                    <motion.div
                        className="footer-heart"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Heart size={32} fill="var(--color-burgundy)" stroke="none" />
                    </motion.div>
                    <h2 className="footer-title">Always & Forever</h2>
                    <p className="footer-text">
                        Thank you for being the love of my life.
                        Every moment with you is a treasure I hold close to my heart.
                    </p>
                    <motion.button
                        className="btn btn-burgundy"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToTop}
                    >
                        Back to the Start ↑
                    </motion.button>
                    <p className="footer-credit">
                        Made with <Heart size={12} fill="var(--color-burgundy)" stroke="none" style={{ display: 'inline', verticalAlign: 'middle' }} /> for Kiki
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
