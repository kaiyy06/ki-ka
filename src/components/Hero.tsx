import { motion } from 'framer-motion';
import { Video } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    return (
        <section className="hero section">
            <div className="container">
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80"
                        alt="Romantic couple"
                    />
                    <div className="image-overlay">
                        <motion.p
                            className="image-caption"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            A perfect moment
                        </motion.p>
                    </div>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    To my beloved
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    A heartfelt letter to my dearest and with every
                    word I pour my love onto the page.
                </motion.p>

                <motion.button
                    className="btn btn-burgundy hero-btn"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Video size={16} style={{ marginRight: '0.5rem' }} />
                    My Identity video
                </motion.button>
            </div>
        </section>
    );
}
