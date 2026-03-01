import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { REASONS_IMAGES } from '../assets';
import './ReasonsGallery.css';

const reasons = [
    { id: 1, image: REASONS_IMAGES[0], caption: 'Your adventurous spirit' },
    { id: 2, image: REASONS_IMAGES[1], caption: 'Golden sunsets together' },
    { id: 3, image: REASONS_IMAGES[2], caption: 'Shared dreams' },
    { id: 4, image: REASONS_IMAGES[3], caption: 'Love for nature' },
];

export default function ReasonsGallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="reasons section" id="reasons" ref={ref}>
            <div className="container">
                <motion.h2
                    className="reasons-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    Reasons I Love You
                </motion.h2>

                <div className="reasons-grid">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.id}
                            className="reason-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <div className="reason-image">
                                <img src={reason.image} alt={reason.caption} loading="lazy" />
                            </div>
                            <p className="reason-caption">{reason.caption}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
