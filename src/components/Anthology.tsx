import { motion, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import './Anthology.css';

const chapters = [
    {
        id: 1,
        title: 'Chapter One — The Beginning',
        content:
            'Our story began on a sunny afternoon. Neither of us knew that a simple conversation would change our lives forever. The moment I saw you, something told me you were different. And now, looking back, I know that was the best day of my life.',
    },
    {
        id: 2,
        title: 'Dear Me, The Day Before',
        content:
            "If I could write to myself before meeting you, I would tell myself to be ready for the most amazing journey of my life. I'd say: \"Tomorrow, everything changes. Tomorrow, you find your person.\"",
    },
    {
        id: 3,
        title: 'The Promises We Keep',
        content:
            'I promise to always make you laugh, to hold your hand on tough days, and to be your biggest fan. I promise to grow with you, not apart. And above all, to love you more with each passing day.',
    },
];

export default function Anthology() {
    const [expandedId, setExpandedId] = useState<number | null>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="anthology section" id="anthology" ref={ref}>
            <div className="container">
                <motion.div
                    className="anthology-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="anthology-title">The Anthology</h2>
                    <p className="anthology-subtitle">Stories of our love, written from the heart</p>
                </motion.div>

                <div className="anthology-list">
                    {chapters.map((chapter, index) => (
                        <motion.div
                            key={chapter.id}
                            className={`anthology-item${expandedId === chapter.id ? ' anthology-item--open' : ''}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <button
                                className="anthology-button"
                                onClick={() =>
                                    setExpandedId(expandedId === chapter.id ? null : chapter.id)
                                }
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
                                    opacity: expandedId === chapter.id ? 1 : 0,
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
