import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './Anthology.css';

const chapters = [
    {
        id: 1,
        title: 'Chapter',
        content: 'Our story began on a sunny afternoon. Neither of us knew that a simple conversation would change our lives forever.'
    },
    {
        id: 2,
        title: 'Dear Me The Day Before',
        content: 'If I could write to myself before meeting you, I would tell myself to be ready for the most amazing journey of my life.'
    },
];

export default function Anthology() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="anthology section" ref={ref}>
            <div className="container">
                <motion.div
                    className="anthology-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="anthology-title">The Anthology</h2>
                    <p className="anthology-subtitle">Stories of our love</p>
                </motion.div>

                <div className="anthology-list">
                    {chapters.map((chapter, index) => (
                        <motion.div
                            key={chapter.id}
                            className="anthology-item"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                className="anthology-button"
                                onClick={() => setExpandedId(expandedId === chapter.id ? null : chapter.id)}
                            >
                                <span>{chapter.title}</span>
                                <motion.div
                                    animate={{ rotate: expandedId === chapter.id ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </button>

                            <motion.div
                                className="anthology-content"
                                initial={false}
                                animate={{
                                    height: expandedId === chapter.id ? 'auto' : 0,
                                    opacity: expandedId === chapter.id ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <p>{chapter.content}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
