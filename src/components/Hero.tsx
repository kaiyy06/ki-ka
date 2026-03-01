import { motion } from 'framer-motion';
import { Heart, ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    const scrollToGallery = () => {
        document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero section" id="hero">
            <div className="container">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Heart size={14} fill="var(--color-burgundy)" stroke="none" />
                    <span>A Love Story</span>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
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
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            A perfect moment ✦
                        </motion.p>
                    </div>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    To my beloved
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    A heartfelt letter to my dearest — with every
                    word I pour my love onto the page.
                </motion.p>

                <motion.button
                    className="btn btn-burgundy hero-btn"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToGallery}
                >
                    Explore Our Memories
                    <ChevronDown size={16} style={{ marginLeft: '0.5rem' }} />
                </motion.button>
            </div>
        </section>
    );
}
