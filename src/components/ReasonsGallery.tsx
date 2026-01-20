import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './ReasonsGallery.css';

const reasons = [
    { id: 1, image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80', caption: 'Adventure' },
    { id: 2, image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80', caption: 'Sunset' },
    { id: 3, image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&q=80', caption: 'Dreams' },
    { id: 4, image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80', caption: 'Nature' },
];

export default function ReasonsGallery() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="reasons section" ref={ref}>
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
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="reason-image">
                                <img src={reason.image} alt={reason.caption} />
                            </div>
                            <p className="reason-caption">{reason.caption}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
