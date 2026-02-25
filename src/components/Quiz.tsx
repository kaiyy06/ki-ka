import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Quiz.css';

export default function Quiz() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="quiz section" ref={ref}>
            <div className="container">
                <motion.div
                    className="quiz-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="quiz-icon">💝</div>
                    <h2 className="quiz-title">How well do we know each other?</h2>
                    <p className="quiz-description">
                        Take our fun quiz and discover how deeply we understand each other's hearts.
                    </p>
                    <motion.button
                        className="btn btn-burgundy"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start the Quiz
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
