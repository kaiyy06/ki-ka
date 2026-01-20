import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import './Journey.css';

const journeySteps = [
    {
        id: 1,
        title: 'Our First Date',
        date: 'Oct 2023',
        description: 'The day we met changed everything. Coffee turned into hours of conversation.',
        image: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?w=600&q=80'
    },
    {
        id: 2,
        title: 'First Romantic',
        date: 'Nov 2023',
        description: 'Our first trip together to the mountains. The memories we made will last forever.',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80'
    },
    {
        id: 3,
        title: 'Still Going',
        date: 'Present',
        description: 'Every day with you is a new adventure. I can\'t wait to see what comes next.',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80'
    },
];

export default function Journey() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="journey section" ref={ref}>
            <div className="container">
                <motion.h2
                    className="journey-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Journey
                </motion.h2>

                <div className="journey-steps">
                    {journeySteps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            className="journey-step"
                            initial={{ opacity: 0, x: -30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="step-marker">
                                <MapPin size={20} stroke="var(--color-burgundy)" />
                            </div>

                            <div className="step-content">
                                <div className="step-date">{step.date}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>

                                <motion.div
                                    className="step-image"
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <img src={step.image} alt={step.title} />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
