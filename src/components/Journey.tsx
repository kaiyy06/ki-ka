import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import { JOURNEY_IMAGES } from '../assets';
import './Journey.css';

const journeySteps = [
    {
        id: 1,
        title: 'Our First Date',
        date: 'Oct 2023',
        description: 'The day we met changed everything. Coffee turned into hours of conversation.',
        image: JOURNEY_IMAGES.firstDate,
    },
    {
        id: 2,
        title: 'First Romantic Trip',
        date: 'Nov 2023',
        description: 'Our first trip together to the mountains. The memories we made will last forever.',
        image: JOURNEY_IMAGES.firstTrip,
    },
    {
        id: 3,
        title: 'Still Going Strong',
        date: 'Present',
        description: "Every day with you is a new adventure. I can't wait to see what comes next.",
        image: JOURNEY_IMAGES.present,
    },
];

export default function Journey() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="journey section" id="journey" ref={ref}>
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
                                <MapPin size={18} stroke="var(--color-burgundy)" />
                            </div>

                            <div className="step-content">
                                <div className="step-date">{step.date}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>

                                <motion.div
                                    className="step-image"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img src={step.image} alt={step.title} loading="lazy" />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
