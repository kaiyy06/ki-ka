import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
    return (
        <motion.header
            className="header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container">
                <div className="header-content">
                    <div className="logo">UAL STORIES</div>
                    <motion.button
                        className="btn btn-burgundy"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Subscribe
                    </motion.button>
                </div>
            </div>
        </motion.header>
    );
}
