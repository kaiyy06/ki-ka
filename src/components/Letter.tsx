import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart } from 'lucide-react';
import './Letter.css';

export default function Letter() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="letter section-sm" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="letter-title">The Letter</h2>
                    <p className="letter-text">
                        My darling, writing this letter to you fills my
                        heart with so much light. The way you make me feel,
                        the way you see me and believe in me is something
                        I never expected to find.
                    </p>
                    <motion.div
                        className="letter-icon"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        <Heart fill="var(--color-burgundy)" stroke="none" size={24} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
