import { useState, useEffect } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ExploreButton from './components/ExploreButton';
import Overlay from './components/Overlay';
import FloatingDecorations from './components/FloatingDecorations';

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header brand="Kiki_pics Collection" curatedBy="Kalpit" />
            <Gallery running={!loading} />
            <ExploreButton />
            <FloatingDecorations />
            <Overlay visible={loading} />
        </>
    );
}
