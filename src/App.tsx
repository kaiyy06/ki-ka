import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Journey from './components/Journey';
import Letter from './components/Letter';
import ReasonsGallery from './components/ReasonsGallery';
import Quiz from './components/Quiz';
import Anthology from './components/Anthology';
import Footer from './components/Footer';
import FloatingDecorations from './components/FloatingDecorations';
import Overlay from './components/Overlay';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Overlay visible={loading} />
            <Header />
            <main>
                <Hero />
                <section id="gallery" className="gallery-section">
                    <h2 className="gallery-section-title">Our Photo Collection</h2>
                    <p className="gallery-section-subtitle">Drag to explore memories</p>
                    <Gallery running={!loading} />
                </section>
                <Journey />
                <Letter />
                <ReasonsGallery />
                <Quiz />
                <Anthology />
            </main>
            <Footer />
            <FloatingDecorations />
            <ScrollToTop />
        </>
    );
}
